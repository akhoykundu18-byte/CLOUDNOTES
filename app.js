const KEY = "cloudnotes_notes_v1";
const titleInput = document.getElementById("title");
const bodyInput = document.getElementById("body");
const notesEl = document.getElementById("notes");
const countEl = document.getElementById("count");
const statusEl = document.getElementById("status");

function readNotes() {
  try { return JSON.parse(localStorage.getItem(KEY) || "[]"); }
  catch { return []; }
}
function writeNotes(notes) {
  localStorage.setItem(KEY, JSON.stringify(notes));
}
function render() {
  const notes = readNotes();
  countEl.textContent = `${notes.length} note${notes.length === 1 ? "" : "s"}`;
  notesEl.innerHTML = "";
  if (!notes.length) {
    notesEl.innerHTML = '<div class="empty">No notes yet. Write your first note above.</div>';
    return;
  }
  notes.slice().reverse().forEach(note => {
    const card = document.createElement("article");
    card.className = "note";
    const heading = document.createElement("h3");
    heading.textContent = note.title || "Untitled";
    const content = document.createElement("p");
    content.textContent = note.body;
    const date = document.createElement("small");
    date.textContent = new Date(note.createdAt).toLocaleString();
    const del = document.createElement("button");
    del.textContent = "Delete";
    del.addEventListener("click", () => {
      writeNotes(readNotes().filter(item => item.id !== note.id));
      render();
      statusEl.textContent = "Note deleted.";
    });
    card.append(heading, content, date, del);
    notesEl.append(card);
  });
}
document.getElementById("save").addEventListener("click", () => {
  const title = titleInput.value.trim();
  const body = bodyInput.value.trim();
  if (!title && !body) {
    statusEl.textContent = "Please write a title or note first.";
    return;
  }
  const notes = readNotes();
  notes.push({ id: crypto.randomUUID(), title, body, createdAt: new Date().toISOString() });
  writeNotes(notes);
  titleInput.value = "";
  bodyInput.value = "";
  statusEl.textContent = "Saved in this browser.";
  render();
});
render();
