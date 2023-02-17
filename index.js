const textareaEl = document.getElementById("text-area");
const totalCharacterEl = document.getElementById("total-characters");

const remainingCharacterEl = document.getElementById("remaining-characters");

textareaEl.addEventListener("keyup", ()=>{
    updateCounter();
});


function updateCounter(){
    totalCharacterEl.innerText = textareaEl.value.length;
    remainingCharacterEl.innerText = 150 - textareaEl.value.length;
}