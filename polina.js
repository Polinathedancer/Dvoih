/*
Мы создали проект который умеет считать цифры.


*/
let knopka = document.querySelector(".button")
knopka.addEventListener(`click`, () => {
    let text = document.querySelector(".vvod").value
    let otvet = document.querySelector(".otvet")
    otvet.textContent = eval(text)
})
