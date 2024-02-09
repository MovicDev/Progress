const inputText = document.getElementById('inp')
inputText.addEventListener('keyup', (e) =>{
      const display = document.getElementById('show')
      display.innerHTML = e.target.value
})
const colorChange = document.getElementById('btn')
colorChange.addEventListener('click', (e) =>{

      document.body.style.backgroundColor =`rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)} )`
      
})




const progressAction = (e) => {
      const proceed = e.target.checked
  const progressFull = document.getElementsByClassName('progress-fill')
   const load = progressFull[0].style.width
   const calculate = Number(load.substring(0,load.length-1))
   if (proceed) {
    progressFull[0].style.width = `${calculate+25}%`
   } else{
    progressFull[0].style.width = `${calculate-25}%`
   }
}
const checkbox1 = document.getElementById('checkbox1')
const checkbox2 = document.getElementById('checkbox2')
const checkbox3 = document.getElementById('checkbox3')
const checkbox4 = document.getElementById('checkbox4')

checkbox1.addEventListener('click', progressAction)
checkbox2.addEventListener('click', progressAction)
checkbox3.addEventListener('click', progressAction)
checkbox4.addEventListener('click', progressAction)

