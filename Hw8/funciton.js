let transcript = [];
console.log(transcript)

window.addEventListener('load', function () {
    var upload = document.getElementById('fileInput');
    if (upload) {
        upload.addEventListener('change', function () {
            if (upload.files.length > 0) {
                var reader = new FileReader();

                reader.addEventListener('load', function () {
                    var result = JSON.parse(reader.result);

                    console.log(result);
                    transcript = result;

                    document.getElementById('student_name').value = transcript.student_name;
                    document.getElementById('date_of_birth').value = transcript.date_of_birth;
                    document.getElementById('student_id').value = transcript.student_id;
                    document.getElementById('date_of_admission').value = transcript.date_of_admission;
                    document.getElementById('date_of_graduation').value = transcript.date_of_graduation;
                    document.getElementById('degree').value = transcript.degree;
                    document.getElementById('major').value = transcript.major;

                    var contentBody = document.getElementById('content_body');
                    contentBody.innerHTML = '';
                    var semesterNumber = 1;
                    var totalCredit = 0;
                    var totalGradePoints = 0;
                    var GPS = 0;
                    var GPA = 0;
                    for (var semester in transcript.credit['Year, 2022-2023']) {
                        var courses = transcript.credit['Year, 2022-2023'][semester];
                        var semesterRow = document.createElement('tr');
                        var semesterCell = document.createElement('td');
                        semesterCell.textContent = `${semester}, ${Object.keys(transcript.credit)}`;
                        var creditCell = document.createElement('td');
                        var gradeCell = document.createElement('td');
                        semesterRow.appendChild(semesterCell);
                        semesterRow.appendChild(creditCell);
                        semesterRow.appendChild(gradeCell);
                        contentBody.appendChild(semesterRow);

                        var semesterCredit = 0;
                        var semesterGradePoints = 0;

                        courses.forEach(function (course) {
                            var row = document.createElement('tr');
                            var courseNameCell = document.createElement('td');
                            courseNameCell.style.textAlign = 'left';
                            courseNameCell.textContent = course.subject_id + " " + course.name;
                            row.appendChild(courseNameCell);

                            var creditCell = document.createElement('td');
                            creditCell.textContent = course.credit;
                            row.appendChild(creditCell);

                            var gradeCell = document.createElement('td');
                            gradeCell.textContent = course.grade;
                            row.appendChild(gradeCell);

                            contentBody.appendChild(row);

                            semesterCredit += parseFloat(course.credit);
                            semesterGradePoints += parseFloat(course.credit) * gradeNumber(course.grade);
                        });

                        GPS = (semesterGradePoints / semesterCredit).toFixed(2);
                        GPA += parseFloat(GPS);

                        var gpaRow = document.createElement('tr');
                        var gpaCell = document.createElement('td');
                        gpaCell.textContent = `GPS: ${GPS} GPA: ${(GPA / semesterNumber).toFixed(2)}`;
                        var creditCell = document.createElement('td');
                        var gradeCell = document.createElement('td');
                        gpaRow.appendChild(gpaCell);
                        gpaRow.appendChild(creditCell);
                        gpaRow.appendChild(gradeCell);
                        contentBody.appendChild(gpaRow);

                        totalCredit += semesterCredit;
                        totalGradePoints += semesterGradePoints;

                        semesterNumber++;
                    }
                });
                reader.readAsText(upload.files[0]);
            }
        });
    }
});

function gradeNumber(grade) {
    if (grade == 'A') {
        return 4.0;
    } else if (grade == 'B+') {
        return 3.5;
    } else if (grade == 'B') {
        return 3.0;
    } else if (grade == 'C+') {
        return 2.5;
    } else if (grade == 'C') {
        return 2.0;
    } else if (grade == 'D+') {
        return 1.5;
    } else if (grade == 'D') {
        return 1.0;
    } else if (grade == 'F') {
        return 0.0;
    } else {
        return 0.0;
    }
}
