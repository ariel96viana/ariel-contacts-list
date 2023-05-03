const form = document.getElementById("form-container");

const contactsNames = [];
const contactsNumbers = [];

let contacts = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addContact();
  atualizarContactList();
});

function addContact() {
  const inputName = document.getElementById("inputName");
  const inputNumber = document.getElementById("inputNumber");
  const color = document.getElementById("input-color");
  if (contactsNames.includes(inputName.value)) {
    alert(`O contato ${inputName.value} já existe.`);
  } else {
    contactsNames.push(inputName.value);
    contactsNumbers.push(inputNumber.value);

    let contact = `<tr><td id='contact-photo'  style='background-color: ${color.value}'><img src='./images/person.png' alt='contact icon' /></td><td id='contact-name'><ul><li>Nome do contato</li>`;
    contact += `<li id='personal-contact-name' >${inputName.value}</li>`;
    contact += "</ul></td>";
    contact += "<td id='contact-number'><ul><li>Número do contato</li>";
    contact += `<li id="personal-contact-number">${inputNumber.value}</li>`;
    contact += "</ul></td></tr>";
    contacts += contact;

    console.log(contacts);
    console.log(color.value);
  }
  inputName.value = "";
  inputNumber.value = "";
}

function atualizarContactList() {
  const contactList = document.querySelector("tbody");
  contactList.innerHTML = contacts;
  console.log(contactList.value);
}
