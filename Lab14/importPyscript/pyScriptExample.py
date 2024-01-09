import js
from pyodide import create_proxy
from datetime import datetime

container = Element("container") # create a div element from js
botton = js.document.querySelector("#btn1")

def on_click(event):
    now = datetime.now()
    temp = now.strftime("%m/%d/%Y, %H:%M:%S")
    container.write("<label>Clicked at " + temp + "</label>" )

click_proxy = create_proxy(on_click) # create a proxy function to call python function from js

botton.addEventListener("click", click_proxy)
print(botton)
print(js.document.title)

