function start() {
    let table = document.getElementById('originalTable')
    let tr = table.getElementsByTagName('tr')
    var data = {}
    var header = []
    var body = []
    var footer = []
    var footerData = {
        "value": "",
        "colspan": 0
    }

    for (var i = 0; i < tr.length; i++) {
        var th = table.getElementsByTagName('th')
        var td = tr[i].getElementsByTagName('td')
        if (i == 0) {
            for (var j = 0; j < th.length; j++) {
                header.push(th[j].innerHTML)
            }
        } else if (i == tr.length - 1) {
            for (var j = 0; j < td.length; j++) {
                if (td[j].hasAttribute("colspan")) {
                    footerData["value"] = 'Total'
                    footerData["colspan"] = parseInt(td[j].getAttribute("colspan"));
                }
            }
            footer.push(footerData);

            var totalValue = {
                "Value": 3000
            }
            footer.push(totalValue);
        } else {
            var bodyObject = {
                "Number": td[0].textContent,
                "Item": td[1].textContent,
                "Quantity": td[2].textContent,
                "Price": td[3].textContent,
                "Amount": td[4].textContent
            }

            if (td[0].hasAttribute("colspan")) {
                bodyObject["Colspan"] = parseInt(td[0].getAttribute("colspan"));
            }

            body.push(bodyObject)
        }
    }

    data = {
        "header": header,
        "body": body,
        "footer": footer
    }

    let text = document.getElementById('displayTextarea')
    text.value = JSON.stringify(data, null, 2)
}

function convert() {
    var textarea = document.getElementById('displayTextarea')
    var jsonData = JSON.parse(textarea.value)
    console.log(jsonData)
    var table = document.createElement("table");
    table.style.margin = '0 auto'
    table.setAttribute('border', '1')
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    var tfoot = document.createElement("tfoot");

    var headerRow = document.createElement("tr");
    jsonData.header.forEach(function (headerText) {
        var th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    jsonData.body.forEach(function (rowData) {
        var row = document.createElement("tr");
        for (var key in rowData) {
            var cell = document.createElement("td");
            cell.textContent = rowData[key];
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    });

    var footerRow = document.createElement("tr");
    jsonData.footer.forEach(function (footerData) {
        if ("value" in footerData) {
            var cell = document.createElement("td");
            cell.textContent = footerData["value"];

            if ("colspan" in footerData) {
                cell.colSpan = footerData["colspan"];
            }

            footerRow.appendChild(cell);
        } else if ("Value" in footerData) {
            var cell = document.createElement("td");
            cell.textContent = footerData["Value"];
            footerRow.appendChild(cell);
        }
    });
    tfoot.appendChild(footerRow);

    table.appendChild(thead);
    table.appendChild(tbody);
    table.appendChild(tfoot);

    document.body.appendChild(table);

}

function run() {
    start()
}

run()
