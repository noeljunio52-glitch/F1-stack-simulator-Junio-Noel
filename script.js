class QueueSimulator {
  constructor() { this.items = []; }
  enqueue(value) { this.items.push(value); }
  dequeue() { return this.items.shift(); }
  peek() { return this.items[0]; }
  clear() { this.items = []; }
}

const queue = new QueueSimulator();
const input = document.getElementById("valueInput");
const queueEl = document.getElementById("queue");
const deletedEl = document.getElementById("deleted");
const msg = document.getElementById("message");

function render(highlightFront = false) {
  queueEl.innerHTML = "";
  queue.items.forEach((v, i) => {
    const block = document.createElement("div");
    block.className = "block";
    let label = "";
    if (i === 0) label += "FRONT ";
    if (i === queue.items.length - 1) label += "REAR";
    block.innerHTML = `${v}<small>${label}</small>`;
    if (highlightFront && i === 0) block.classList.add("highlight");
    queueEl.appendChild(block);
  });
}

function enqueueValue() {
  const v = input.value.trim();
  if (v === "") { msg.textContent = "Please enter a value."; return; }
  queue.enqueue(v);
  input.value = "";
  msg.textContent = `Enqueued ${v}.`;
  render();
}

function dequeueValue() {
  if (queue.items.length === 0) { msg.textContent = "Queue is empty."; return; }
  const v = queue.dequeue();
  deletedEl.innerHTML = `<div class="block">${v}</div>`;
  msg.textContent = `Dequeued ${v}.`;
  render();
}

function peekValue() {
  if (queue.items.length === 0) { msg.textContent = "Queue is empty."; return; }
  msg.textContent = `Front is ${queue.peek()}.`;
  render(true);
}

function clearQueue() {
  queue.clear();
  deletedEl.innerHTML = "";
  msg.textContent = "Queue cleared.";
  render();
}