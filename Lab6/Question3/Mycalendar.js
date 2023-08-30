function calendar() {
    var body = document.getElementsByTagName('body')[0];
    var table = document.createElement('table');
    table.style.margin = '0 auto';
    table.setAttribute('border', '1');
    table.style.textAlign = 'center'
    table.style.borderCollapse = `collapse`;
    var day = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"];
    var tbdy = document.createElement('tbody');
    var noday = 1;
    for (var i = 0; i < 7; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 7; j++) {
            if (i == 0) {
                var th = document.createElement('th');
                th.appendChild(document.createTextNode('August 2023'));
                th.setAttribute('colspan', '7');
                tr.appendChild(th);
                break;
            }
            if (i == 1) {
                var td = document.createElement('td');
                td.appendChild(document.createTextNode(day[j]));
                tr.appendChild(td);
                continue;
            }
            if (i==2 &&(j==0||j==1)){
                var td = document.createElement('td');
                td.appendChild(document.createTextNode(' '));
                tr.appendChild(td);
                continue;
            }
            if (i==6 &&(j==5||j==6)){
                var td = document.createElement('td');
                td.appendChild(document.createTextNode(' '));
                tr.appendChild(td);
                continue;
            }
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(noday));
            tr.appendChild(td);
            noday+=1;
            
        }
        tbdy.appendChild(tr);
    }
    table.appendChild(tbdy);
    body.appendChild(table)
}

window.onload = calendar;