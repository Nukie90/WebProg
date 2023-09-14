

let timer = [];
console.log(timer)
const time = document.getElementById('time');
const message = document.getElementById('message');

function export_() {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(timer, null, 2)], {
        type: "text/plain"
    }));
    a.setAttribute("download", "timer.json");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function import_(){
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            timer = JSON.parse(reader.result);
            edit();
            done()
        }
    }
    input.click();
}

function save(){
    var date = document.getElementById('date').value
    localStorage.setItem(date, JSON.stringify(timer));
}

function selectDate(){
    var date = document.getElementById('date').value
    timer = JSON.parse(localStorage.getItem(date));
    edit();
    done();
}

function done() {
    console.log(timer)
    button = document.getElementById('kuypun');
    button.innerHTML = 'Edit';
    button.setAttribute('onclick', 'edit()');
    let table = document.getElementById('info');

    let updatedTimer = [];

    for (let i = 0; i < timer.length; i++) {
        console.log(`time${i}`)
        let timeInput = document.getElementById(`time${i}`);
        let messageInput = document.getElementById(`message${i}`);
        if (timeInput && messageInput) {
            timer[i].time = timeInput.value;
            timer[i].message = messageInput.value;

            if (!(timer[i].time === '' || timer[i].message === '')) {
                updatedTimer.push(timer[i]);
            }
        }
    }
    timer = updatedTimer;

    //sort in time
    timer.sort((a, b) => {
        let timeA = a.time.split(':');
        let timeB = b.time.split(':');
        if (timeA[0] === timeB[0]) {
            return timeA[1] - timeB[1];
        }
        return timeA[0] - timeB[0];
    });

    table.innerHTML = "";
    headerText();

    for (let i = 0; i < timer.length; i++) {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        td1.innerHTML = timer[i].time;
        td2.innerHTML = timer[i].message;
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
    }

    let addrow = document.getElementById('naheepun');
    addrow.parentNode.removeChild(addrow);
}

function edit() {
    button = document.getElementById('kuypun');
    button.innerHTML = 'Done';
    button.setAttribute('onclick', 'done()');
    let table = document.getElementById('info');
    table.innerHTML = "";
    headerText();

    for (let i = 0; i < timer.length; i++) {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');

        const timeInput = document.createElement('input');
        timeInput.type = "time";
        timeInput.id = `time${i}`;
        timeInput.value = timer[i].time;

        const messageInput = document.createElement('input');
        messageInput.type = "text";
        messageInput.id = `message${i}`;
        messageInput.value = timer[i].message;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.onclick = () => remove(i);

        td1.appendChild(timeInput);
        td2.appendChild(messageInput);
        td3.appendChild(removeButton);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        table.appendChild(tr);
    }

    let addrow = document.createElement('button');
    addrow.innerHTML = 'Add Row';
    addrow.setAttribute('onclick', 'addrow()');
    addrow.id = 'naheepun';
    document.getElementById('main').appendChild(addrow);
}

function remove(i) {
    timer.splice(i, 1);
    edit();
    let addrow = document.getElementById('naheepun');
    addrow.parentNode.removeChild(addrow);
}

function addrow() {
    timer.push({ time: null, message: null});
    let table = document.getElementById('info');
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    td1.innerHTML = `<input type="time" id="time${timer.length - 1}" value="">`;
    td2.innerHTML = `<input type="text" id="message${timer.length - 1}" value="">`;
    td3.innerHTML = `<button onclick="remove(${timer.length - 1})">Remove</button>`;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    table.appendChild(tr);
}

function headerText() {
    let table = document.getElementById('info');
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    td1.innerHTML = 'Time';
    td2.innerHTML = 'Alert Word';
    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
}
