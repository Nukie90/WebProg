import persistent

class Course(persistent.Persistent):
    def __init__(self, id, name = "", credit = 0):
        self.id = id
        self.credit = credit
        self.name = name
        self.grading = [ { "grade": "A", "min": 80, "max": 100 },
                   { "grade": "B", "min": 70, "max": 79 },
                   { "grade": "C", "min": 60, "max": 69 },
                   { "grade": "D", "min": 50, "max": 59 },
                   { "grade": "F", "min": 0, "max": 49}]
        
    def getCredit(self):
        return self.credit
    
    def setName(self, name):
        self.name = name
        
    def scoreGrading(self, score):
        for grade in self.grading:
            if score >= grade["min"] and score <= grade["max"]:
                return grade["grade"]
        return "F"
        
    def setGradeScheme(self, grading):
        self.grading = grading
        
    def printDetail(self):
        print(f"ID: {self.id:>8} Course Name: {self.name:<25}, Credits: {self.credit}")
        
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
        print(f"GPA: {self.getGPA():.2f}")
        
    def setName(self, name):
        self.name = name
        
class Enrollment(persistent.Persistent):
    def __init__(self, student, course, score = 0):
        self.student = student
        self.course = course
        self.score = score
        
    def getScore(self):
        return self.score
    
    def setScore(self, score):
        self.score = score
    
    def getGrade(self):
        return self.course.scoreGrading(self.score)
    
    def getCourses(self):
        return self.course
    
    def getGrade(self):
        return self.course.scoreGrading(self.score)
    
    def printDetail(self):
        print(f"\tID: {self.course.id:>8} Course Name: {self.course.name:<25}, Credits: {self.course.credit} Score: {self.getScore():>4} Grade: {self.course.scoreGrading(self.score):>4}")