from fastapi import FastAPI

app = FastAPI()

students = {
    1 : {"ID": 1, "name": "Nukie", "Surname": "Sri"},
    2 : {"ID": 2, "name": "Roshan", "Surname": "X"},
}

@app.get("/")
async def root():
    return "Hello World"

@app.get("/readJSON")
def readJSON():
    return {"Hello": "Hello World"}

@app.get("/person/all")
def read_all_person():
    return students

@app.get("/person/{person_id}")
def read_person(person_id: int):
    for id in students:
        if id == person_id:
            return students[id]
    return {"Error": "Student not found"}

@app.post("/person/new")
def create_person(person: dict):
   if person["ID"] in students or person["name"] in students or person["Surname"] in students:
       return {"Error": "Student already exists"}
   else:
       students[person["ID"]] = person
       return students[person["ID"]]

@app.post("/person/new/{name}/{surname}/{id}")
def create_person2(name: str, surname: str, id: int):
    if id in students or name in students or surname in students:
        return {"Error": "Student already exists"}
    else:
        students[id] = {"ID": id, "name": name, "Surname": surname}
        return students[id]
        
@app.post("/person/newForm")
def create_person3(name: str, surname: str, id: int):
    if id in students or name in students or surname in students:
        return {"Error": "Student already exists"}
    else:
        students[id] = {"ID": id, "name": name, "Surname": surname}
        return students[id]