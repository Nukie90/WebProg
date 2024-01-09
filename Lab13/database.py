import ZODB, ZODB.FileStorage
import persistent
import transaction
from z_enrollment import *
import BTrees.OOBTree

from fastapi import FastAPI, Request, Body, Form, Response, HTTPException
from fastapi.responses import HTMLResponse, RedirectResponse

app = FastAPI()

storage = ZODB.FileStorage.FileStorage('db/mydata.fs')
db = ZODB.DB(storage)
connection = db.open()
root = connection.root()

root.courses = BTrees.OOBTree.BTree()
root.students = BTrees.OOBTree.BTree()

root.courses['101'] = Course('101', 'Computer Programming', 4)
root.courses['102'] = Course('102', 'Web Programming', 4)
root.courses['103'] = Course('103', 'SEP', 5)
root.courses['104'] = Course('104', 'AI', 3)

root.students['001'] = Student("001",'abc', '1234')

grade1 = root.students['001'].enrollCourse(root.courses['101'])
grade2 = root.students['001'].enrollCourse(root.courses['102'])
grade3 = root.students['001'].enrollCourse(root.courses['103'])
grade4 = root.students['001'].enrollCourse(root.courses['104'])


@app.get("/login/", response_class=HTMLResponse)
async def loginPage():
    return """
    <html>
        <head>
            <title>Login</title>
        </head>
        <body>
            <form action="/login/" method="post">
                <label for="id">ID:</label>
                <input type="text" id="id" name="id"><br><br>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password"><br><br>
                <input type="submit" value="Login">
            </form>
        </body>
    </html>
    """
    
@app.post("/login/")
async def login(id: str = Form(...), password: str = Form(...)):
    if id in root.students:
        if root.students[id].getPassword() == password:
            redirect = f"/form/{id}"
            return RedirectResponse(url=redirect, status_code=303)  # Use status code 303 for redirect
        else:
            return {"Password": "Incorrect"}
    else:
        return {"ID": "Not Found"}
    
@app.get("/form/{id}", response_class=HTMLResponse)
def formPage(response: Response, id):
    if id in root.students:
        student = root.students[id]
        courseTable = ""
        textid = 0
        for course in student.enrolls:
            textid += 1
            courseTable += f"""
            <tr>
                <td>{course.getCourses().id}</td>
                <td>{course.getCourses().name}</td>
                <td>{course.getCourses().credit}</td>
                <td><input type="text" name="score_{course.getCourses().id}"></td>
            </tr>
            """
        return f"""
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Transcript Entry Form</title>
        </head>
        <body>
            <h1>Transcript Entry Form</h1>
            <form action="/form/{id}" method="post">
                <table border="1" style="border-collapse: collapse; width: 100%;">
                    <tr>
                        <th colspan="2">ID: {student.id}</th>
                        <th colspan="2">Name: {student.name}</th>
                    </tr>
                    <tr>
                        <td>Course Code</td>
                        <td>Course Name</td>
                        <td>Credits</td>
                        <td>Score</td>
                    </tr>
                    {courseTable}
                </table>
                <input type="submit" value="Submit">
            </form>
        </body>
        </html>
        """
    else:
        return "Student not found"

@app.post("/form/{id}")
async def form(id, form_data: dict = Form(...)):
    if id in root.students:
        for course in root.students[id].enrolls:
            course_id = course.getCourses().id
            score_key = f"score_{course_id}"
            if score_key in form_data:
                course.setScore(form_data[score_key])
        
        redirect = f"/transcript/{id}"
        return RedirectResponse(url=redirect, status_code=303)
    else:
        return "Student not found"

@app.get("/transcript/{id}", response_class=HTMLResponse)
def transcript(response: Response, id):
    if id in root.students:
        student = root.students[id]

        # You need to generate the transcript HTML here based on the student's data.
        # You can iterate through the student's enrolled courses and grades to display them.

        transcript_table = ""
        for enrollment in student.enrolls:
            course = enrollment.getCourses()
            score = enrollment.getScore()  # You need to define the method to get the score in your Grade class.
            
            # Build the rows for each enrolled course
            transcript_table += f"""
            <tr>
                <td>{course.id}   {course.name}</td>
                <td>{course.credit}</td>
                <td>{score}</td>
                <td>{course.scoreGrading(int(score))}</td>
            </tr>
            """

        # Build the complete transcript HTML
        transcript_html = f"""
<!DOCTYPE html>
<html>
<head>
    <title>Unofficial Transcript</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <br><br>
    <h1>( Unofficial Transcript )</h1>
    <table>
        <tbody>
            <tr>
                <td class="left_top_col">
                    <label for="name" style="font-style: italic;">Name {student.name}</label>
                </td>
                <td class="mid_top_col"></td>
                <td class="right_top_col">
                    <label for="student_id" style="font-style: italic;">Student ID: {student.id}</label>
                </td>
            </tr>
        </tbody>
    </table>
    <br>
    <table class="content_table">
        <thead>
            <th style="width: 85%;">
                <p>COURSE TITLE</p>
            </th>
            <th style="width: 5%;">
                <p>CREDIT</p>
            </th>
            <th style="width: 5%;">
                <p>Score</p>
            </th>
            <th style="width: 5%;">
                <p>GRADE</p>
            </th>
        </thead>
        <tbody id="content_body">
            {transcript_table}
        </tbody>
    </table>
</body>
</html>
"""

        return HTMLResponse(content=transcript_html)

    # If the student ID is not found, return a 404 error
    raise HTTPException(status_code=404, detail="Student Not Found")
