import requests

def get1():
    url = f"http://161.246.5.61:11306/students/html/"
    response = requests.get(url)

    if response.status_code == 200:
        print("Request Successful!")
        print("Response: " , response.text)
    else:
        print("Request Failed! Response: ", response.status_code)
        
def get2():
    student_id = input("Enter student id: ")
    url = f"http://161.246.5.61:11306/students/html/{student_id}"
    response = requests.get(url)
    
    if response.status_code == 200:
        print("Request Successful!")
        print("Response: " , response.text)
    else:
        print("Request Failed! Response: ", response.status_code)
        
def post():
    name = input("Enter student name: ")
    surname = input("Enter student surname: ")
    student_id = input("Enter student id: ")
    
    url = f"http://161.246.5.61:11306/students/newForm/?student_name={name}&student_surname={surname}&student_id={student_id}"
    response = requests.post(url)
    
    if response.status_code == 200:
        print("Request Successful!")
        print("Response: " , response.text)
    else:
        print("Request Failed! Response: ", response.status_code)
        
def post2():
    name = input("Enter student name: ")
    surname = input("Enter student surname: ")
    student_id = input("Enter student id: ")
    
    url = f"http://161.246.5.61:11306/students/new/{name}/{surname}/{student_id}"
    response = requests.post(url)

    if response.status_code == 200:
        print("Request Successful!")
        print("Response: " , response.text)
    else:
        print("Request Failed! Response: ", response.status_code)
        
def postWithData():
    name = input("Enter student name: ")
    surname = input("Enter student surname: ")
    student_id = input("Enter student id: ")
    
    url = f"http://161.246.5.61:11306/students/new/"
    response = requests.post(url, json= {"name": name, "surname": surname, "ID": student_id})
    
    if response.status_code == 200:
        print("Request Successful!")
        print("Response: " , response.text)
    else:
        print("Request Failed! Response: ", response.status_code)
        
# get1()
# get2()
# post()
# post2()
# postWithData()