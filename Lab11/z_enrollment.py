import persistent

class Course(persistent.Persistent):
    def __init__(self, id, name = "", credit = 0):
        self.id = id
        self.credit = credit
        self.name = name
        
    def __str__(self):
        return "ID: %8s Course Name: %s, Credits: %d" % (str(self.id), self.name, self.credit)
    
    def getCredit(self):
        return self.credit
    
    def setName(self, name):
        self.name = name
        
    def printDetail(self):
        print(self.__str__())
        
class Student(persistent.Persistent):
    def __init__(self, id, name):
        self.id = id
        self.name = name
        self.enrolls = []
        
    def enrollCourse(self, course):
        enroll = Enrollment(self, course, "")
        self.enrolls.append(enroll)
        return enroll
    
    def getEnrollment(self, course):
        for enroll in self.enrolls:
            if enroll.getCourses() == course:
                return enroll
            else:
                return None
            
    def getGPA(self):
        total = 0
        total_credit = 0
        for enroll in self.enrolls:
            grade = enroll.getGrade()
            if grade == "A":
                total += 4 * enroll.getCourses().getCredit()
            elif grade == "B":
                total += 3 * enroll.getCourses().getCredit()
            elif grade == "C":
                total += 2 * enroll.getCourses().getCredit()
            elif grade == "D":
                total += 1 * enroll.getCourses().getCredit()
            total_credit += enroll.getCourses().getCredit()
        return total / total_credit
    
    def printTranscript(self):
        print("\tTransript\nID: %8s Name: %s\nCourse list" % (str(self.id), self.name))
        for course in self.enrolls:
            course.printDetail()
        print("GPA: %.2f" % (self.getGPA()))
        
    def setName(self, name):
        self.name = name
        
class Enrollment(persistent.Persistent):
    def __init__(self, student, course, grade = ""):
        self.student = student
        self.course = course
        self.grade = grade
        
    def __str__(self):
        return "\tID: %8s Course Name: %s, Credits: %d Grade: %s" % (str(self.course.id), self.course.name, self.course.credit, self.grade)
    
    def getCourses(self):
        return self.course
    
    def getGrade(self):
        return self.grade
    
    def printDetail(self):
        print(self.__str__())
        
    def setGrade(self, grade):
        self.grade = grade
        


    



