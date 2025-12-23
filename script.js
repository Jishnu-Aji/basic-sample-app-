const display = document.getElementById("display");
const sound = document.getElementById("clickSound");

function press() {
  sound.currentTime = 0;
  sound.play();
}

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
