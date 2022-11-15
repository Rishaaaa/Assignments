console.clear()
    //9.DOM METHODS_______________________
document.getElementById('click').click()
document.getElementById('click').style.border = 'green'
document.getElementById('click').style.border = '4px solid green'

let ele1 = document.getElementById('click');
console.log(ele1)

//10.Events
function clicked() {
    console.log('The button is clicked')
}