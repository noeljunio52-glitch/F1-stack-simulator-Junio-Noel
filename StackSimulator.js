class StackSimulator {
  constructor() { this.items = []; }
  push(value) { this.items.push(value); }
  pop()   { return this.items.pop(); }
  peek()  { return this.items[this.items.length - 1]; }
  clear() { this.items = []; }
}

const stack = new StackSimulator();
const input = document.getElementById("valueInput");
const stackEl = document.getElementById("stack");
const deletedEl = document.getElementById("deleted");
const msg = document.getElementById("message");

function render(highlightTop = false) {
  stackEl.innerHTML = "";
  stack.items.forEach((v, i) => {
    const block = document.createElement("div");
    block.className = "block";
    block.textContent = v;
    if (highlightTop && i === stack.items.length - 1) block.classList.add("highlight");
    stackEl.prepend(block);
  });
}

function pushValue() {
  const v = input.value.trim();
  if (v === "") { msg.textContent = "Please enter a value."; return; }
  stack.push(v);
  input.value = "";
  msg.textContent = `Pushed ${v}.`;
  render();
}

function popValue() {
  if (stack.items.length === 0) { msg.textContent = "Stack is empty."; return; }
  const v = stack.pop();
  deletedEl.innerHTML = <div class="block">${v}</div>;
  msg.textContent = `Popped ${v}.`;
  render();
}

function peekValue() {
  if (stack.items.length === 0) { msg.textContent = "Stack is empty."; return; }
  msg.textContent = `Top is ${stack.peek()}.`;
  render(true);
}

function clearStack() {
  stack.clear();
  deletedEl.innerHTML = "";
  msg.textContent = "Stack cleared.";
  render();
}