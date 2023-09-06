const days_of_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const day_names = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let startingDay = [6, 2, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
let currentMonth = 1;

function show_monthOf2023(month, space) {
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.style.textAlign = 'center';
    tbl.style.width = '50%';
    tbl.setAttribute('border', '1');
    tbl.style.borderCollapse = 'collapse';
    var tbody = document.createElement('tbody');
    for (var row = 0; row < 8; row++) {
        var tr = document.createElement('tr');
        for (var col = 0; col < 7; col++) {
            if (row === 0) {
                var prev = document.createElement('td');
                prev.innerHTML = '<button id="prev" onclick="prevMonth()"><</button>';
                tr.appendChild(prev);
                var monthCell = document.createElement('td');
                monthCell.setAttribute('colspan', '5');
                monthCell.innerHTML = `${month}/2023`;
                tr.appendChild(monthCell);
                var next = document.createElement('td');
                next.innerHTML = '<button id="next" onclick="nextMonth()">></button>';
                tr.appendChild(next);
                break;
            }
            if (row === 1) {
                var dayCell = document.createElement('td');
                dayCell.appendChild(document.createTextNode(day_names[col]));
                tr.appendChild(dayCell);

            } else {
                var dayNumber = (row - 2) * 7 + col - space[month - 1] + 1;
                console.log(dayNumber);
                if (dayNumber > 0 && dayNumber <= days_of_month[month - 1]) {
                    var dayCell = document.createElement('td');
                    if (col == 6) {
                        dayCell.setAttribute('style', 'color:red');
                    }
                    dayCell.appendChild(document.createTextNode(dayNumber));
                    tr.appendChild(dayCell);
                } else {
                    var emptyCell = document.createElement('td');
                    emptyCell.innerHTML = '&nbsp';
                    tr.appendChild(emptyCell);
                }

            }
        }
        tbody.appendChild(tr);
    }
    tbl.appendChild(tbody);
    body.innerHTML = '<h1>2023 Calenndar</h1>'
    body.appendChild(tbl);
}

function prevMonth() {
    if (currentMonth > 1) {
        currentMonth--;
        show_monthOf2023(currentMonth, startingDay);
    }
}

function nextMonth() {
    if (currentMonth < 12) {
        currentMonth++;
        show_monthOf2023(currentMonth, startingDay);
    }
}

document.addEventListener('keydown', function (event) {
    if (event.keyCode === 37) { // Left arrow key
        prevMonth();
    } else if (event.keyCode === 39) { // Right arrow key
        nextMonth();
    }
});

// Initial display for January
show_monthOf2023(currentMonth, startingDay);