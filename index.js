let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener('click', function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    save()
}
)

function save() {
    listitems = ""
    for(let i = 0; i < myLeads.length; i++) {
        listitems += `
        <a href="${myLeads[i]}" target = '_blank'>
        <li>"${myLeads[i]}"</li></a>`
    }
    ulEl.innerHTML = listitems
}