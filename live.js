//variables
const btnEl = document.getElementById("btn-el")
const numberEl = document.getElementById("number-el")
const mercuryEl = document.getElementById("mercury-el")
const marsEl = document.getElementById("mars-el")
const jupiterEl = document.getElementById("jupiter-el")
const saturnEl = document.getElementById("saturn-el")
const neptuneEl = document.getElementById("neptune-el")
const uranusEl = document.getElementById("uranus-el")
const plutoEl = document.getElementById("pluto-el")
const moonEl = document.getElementById("moon-el")

//convert button function
  btnEl.addEventListener("click", function(){

//variable input value  
  const count = numberEl.value ;
//calculations
  mercuryEl.textContent= `${(count * 0.38).toFixed(3)} kg`
  marsEl.textContent= `${(count * 0.38).toFixed(3)} kg`
  jupiterEl.textContent= `${(count * 2.34).toFixed(3)} kg`
  saturnEl.textContent= `${(count * 1.06).toFixed(3)} kg`
  neptuneEl.textContent= `${(count * 1.19).toFixed(3)} kg`
  uranusEl.textContent= `${(count * 0.92).toFixed(3)} kg`
  plutoEl.textContent= `${(count * 0.06).toFixed(3)} kg`
  moonEl.textContent= `${(count * 0.166).toFixed(3)} kg`  
}

)

//dblclick function reset input
  numberEl.addEventListener("dblclick", function() {
  numberEl.value = ""
})