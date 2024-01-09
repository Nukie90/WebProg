import ZODB, ZODB.FileStorage
import persistent
import transaction
from z_enrollment import *
import BTrees.OOBTree

storage = ZODB.FileStorage.FileStorage('mydata.fs')
db = ZODB.DB(storage)
connection = db.open()
root = connection.root()

root.courses = BTrees.OOBTree.BTree()
root.students = BTrees.OOBTree.BTree()

root.courses['101'] = Course('101', 'Computer Programming', 4)
root.courses['102'] = Course('102', 'Web Programming', 4)
root.courses['103'] = Course('103', 'SEP', 5)
root.courses['104'] = Course('104', 'AI', 3)

def student1():
    root.students['001'] = Student('001', 'Mr. A')
    grade1 = root.students['001'].enrollCourse(root.courses['101'])
    grade1.setScore(75)
    grade2 = root.students['001'].enrollCourse(root.courses['102'])
    grade2.setScore(81)
    grade4 = root.students['001'].enrollCourse(root.courses['103'])
    grade4.setScore(81)
    grade3 = root.students['001'].enrollCourse(root.courses['104'])
    grade3.setScore(59) 

def student2():
    root.students['002'] = Student('002', 'Miss B')
    grade1 = root.students['002'].enrollCourse(root.courses['101'])
    grade1.setScore(79)
    grade2 = root.students['002'].enrollCourse(root.courses['102'])
    grade2.setScore(81)
    grade3 = root.students['002'].enrollCourse(root.courses['103'])
    grade3.setScore(81)
    grade4 = root.students['002'].enrollCourse(root.courses['104'])
    grade4.setScore(81)

def student3():
    root.students['003'] = Student('003', 'Mr. C')
    grade1 = root.students['003'].enrollCourse(root.courses['101'])
    grade1.setScore(60)
    grade2 = root.students['003'].enrollCourse(root.courses['102'])
    grade2.setScore(59)
    grade3 = root.students['003'].enrollCourse(root.courses['103'])
    grade3.setScore(59)
    grade4 = root.students['003'].enrollCourse(root.courses['104'])
    grade4.setScore(59)
    
student1()
student2()
student3()

transaction.commit()

if __name__ == "__main__":
    courses = root.courses
    for c in courses:
        course = courses[c]
        course.printDetail()
        
    print("=====================================")
    
    students = root.students
    for s in students:
        student = students[s]
        student.printTranscript()
        print()