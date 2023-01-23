/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-num")

let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204


convertBtn.addEventListener("click", function() {
    let baseValue =  inputEl.value
    if(baseValue < 1) return alert('Please pick a positive number')
    
    lengthEl.textContent = `
    ${baseValue}  meter  =   ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meter
    `
    volumeEl.textContent = `
    ${baseValue}  liter  =   ${(baseValue * literToGallon).toFixed(3)} gallon | ${baseValue} gallon = ${(baseValue / literToGallon).toFixed(3)} liter
    `
    massEl.textContent = `
    ${baseValue}  kilogram  =   ${(baseValue * kilogramToPound).toFixed(3)} pound | ${baseValue} pound  = ${(baseValue / kilogramToPound).toFixed(3)} kilogram
    `
    inputEl.value = 0
})