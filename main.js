const nameInput = document.getElementById("nameInput");
const numberInput = document.getElementById("numberInput");
const addBtn = document.getElementById("addBtn");
const contactList = document.getElementById("contactList");

let editTarget = null;

addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const number = numberInput.value.trim() || "number/username";

  if (!name) return;

  if (editTarget) {
    
    editTarget.querySelector("strong").textContent = name;
    editTarget.querySelector("small").textContent = number;
    editTarget = null;
    addBtn.textContent = "Add Contact";
  } else {
    
    const li = document.createElement("li");
    li.className = "contact-item";
    li.innerHTML = `
      <div class="contact-info">
        <strong>${name}</strong>
        <small>${number}</small>
      </div>
      <div class="contact-actions">
        <button class="edit">✏️</button>
        <button class="delete">🗑️</button>
      </div>
    `;
    contactList.appendChild(li);
  }

  nameInput.value = "";
  numberInput.value = "";
});

contactList.addEventListener("click", (e) => {
  const btn = e.target;
  const item = btn.closest(".contact-item");

  if (btn.classList.contains("delete")) {
    item.remove();
  }

  if (btn.classList.contains("edit")) {
    const name = item.querySelector("strong").textContent;
    const number = item.querySelector("small").textContent;
    nameInput.value = name;
    numberInput.value = number === "number/username" ? "" : number;
    editTarget = item;
    addBtn.textContent = "Save";
  }
});
