
from js import document
from pyodide import create_proxy

class Calculator():
    def __init__(self, element_id):
        self.element_id = element_id
        self._element = None
    
    @property
    def element(self):
        if not self._element:
            self._element = document.querySelector(f"#{self.element_id}")
        return self._element

    def on_click(self, event):
        if self.element.innerHTML == "Infinity":
            self.element.innerHTML = "0"

        if event.target.id == "c":
            self.element.innerHTML = "0"
        elif event.target.id == "Backspace":
            self.element.innerHTML = self.element.innerHTML[:-1]
        elif event.target.id == "Enter":
            if "/0" in self.element.innerHTML:
                self.element.innerHTML = "Infinity"
            else:
                self.element.innerHTML = str(eval(self.element.innerHTML))
        else:
            if self.element.innerHTML == "0":
                self.element.innerHTML = event.target.id
            else:
                self.element.innerHTML += event.target.id
    
    def on_event(self, event):
        if self.element.innerHTML == "Infinity":
            self.element.innerHTML = "0"

        if event.keyCode == 8:
            self.element.innerHTML = self.element.innerHTML[:-1]
        elif event.keyCode == 13:
            if "/0" in self.element.innerHTML:
                self.element.innerHTML = "Infinity"
            else:
                self.element.innerHTML = str(eval(self.element.innerHTML))
        elif event.keyCode == 67:
            self.element.innerHTML = "0"
        elif str(event.key) == "*":
            self.element.innerHTML += "*"
        elif str(event.key) == "+":
            self.element.innerHTML += "+"
        elif str(event.key) == "-":
            self.element.innerHTML += "-"
        elif str(event.key) == "/":
            self.element.innerHTML += "/"
        elif str(event.key) == ".":
            self.element.innerHTML += "."
        elif str(event.key) == "Enter":
            self.element.innerHTML = str(eval(self.element.innerHTML))
        elif event.keyCode >= 48 and event.keyCode <= 57:
            if self.element.innerHTML == "0":
                self.element.innerHTML = chr(event.keyCode)
            else:
                self.element.innerHTML += chr(event.keyCode)
        else:
            pass
        
output = Calculator("result")

event_proxy = create_proxy(output.on_event)
click_proxy = create_proxy(output.on_click)

document.addEventListener("click", click_proxy)
document.addEventListener("keydown", event_proxy)
