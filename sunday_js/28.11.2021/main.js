const sml = document.getElementById("small")
const mdm = document.getElementById("medium")
const big = document.getElementById("big")

function onClickHandler(e) {
    //e.stopPropagation() //ostanovitj rasprostronenie, dast toljko odin vizov, vizivaetsja bez parametrov
    e.preventDefault()   //otmenitj defaultnoe dejstvie, obi4no, kogda rabotem s formami i ssilkami
    console.dir(e.currentTarget.id) // e- object, wich creates browser
}

/*
sml.onclick = onClickHandler small->medium->big
mdm.onclick = onClickHandler
big.onclick = onClickHandler
*/

sml.addEventListener("click", onClickHandler, true) //big->medium->small
mdm.addEventListener("click", onClickHandler, true)
//big.addEventListener("click", onClickHandler, true)
big.addEventListener("click", onClickHandler)
big.removeEventListener("click", onClickHandler)