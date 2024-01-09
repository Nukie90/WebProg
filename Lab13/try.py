from fastapi import FastAPI, Request, Body
from fastapi.responses import HTMLResponse, RedirectResponse
import ZODB, ZODB.FileStorage, transaction
import BTrees.OOBTree

app = FastAPI()

storage = ZODB.FileStorage.FileStorage('mydata.fs')
db = ZODB.DB(storage)
connection = db.open()
root = connection.root
root.students = BTrees.OOBTree.BTree()

@app.get("/html/", response_class=HTMLResponse)
async def get_html():
    return """
    <html>
        <head>
            <title>HTML Response</title>
        </head>
        <body>
            <h1>Hello World.</h1>
        </body>
    </html>
    """
    
@app.get("/redirect/", response_class=HTMLResponse)
def redirect_to_url():
    redirect_url = "/target_url"
    return RedirectResponse(url=redirect_url)

@app.get("/target_url")
def target_url():
    return {"Hello": "World"}

@app.post("/students/new/")
async def create_student(body = Body(...)):
    sid = int(body["ID"])
    root.students[sid] = body
    transaction.commit()
    return root.students[sid]

@app.on_event("shutdown")
def shutdown_event():
    connection.close()
    db.close()
    storage.close()