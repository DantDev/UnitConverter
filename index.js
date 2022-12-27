/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let num = []
const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

btnEl.addEventListener("click", function () {
    num = []
    
    num.push(inputEl.value)
    
    lengthEl.innerHTML = `${num} meters = ${(num * meterToFeet).toFixed(3)} feet | ${num} feet = ${(num / meterToFeet).toFixed(3)} meters`
    
    volumeEl.innerHTML = `${num} liters = ${(num * literToGallon).toFixed(3)} gallons | ${num} gallons = ${(num / literToGallon).toFixed(3)} liters `
    
    massEl.innerHTML = `${num} kilos = ${(num * kiloToPound).toFixed(3)} pounds | ${num} pounds = ${(num / kiloToPound).toFixed(3)} kilos `
    
    inputEl.value = ""
     
})