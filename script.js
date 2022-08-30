const kilogram = document.getElementById('kilogram');
const ounce = document.getElementById('ounce');
const stone = document.getElementById('stone');
const tonne = document.getElementById('tonne');
const instruction = document.getElementById('instruction');
const form = document.getElementById('form');

const convert = document.getElementById('convert');
const output = document.getElementById('output');

let convertType

// instructions on click
kilogram.addEventListener('click', function() {
    convertType = 'kilogram'
    instruction.innerHTML= 'Enter number of kilogram'
});

stone.onclick = function(){
    convertType = 'stone'
    instruction.innerHTML= 'Enter number of stone'
};

 ounce.addEventListener('click', function() {
   convertType = 'ounce'
   instruction.innerHTML= 'Enter number of ounce'
});

tonne.addEventListener('click', function() {
  convertType = 'tonne'
  instruction.innerHTML= 'Enter number of tonne'
});


// form submission
form.onsubmit =function(event){
    event.preventDefault()
    const number = document.getElementById('number').value;
     
    if (number) {
        if (convertType == 'kilogram') {
            let result = (number / 6.350);
            output.innerHTML = `${number} kg = ${result} st` 
        }
        else if (convertType == 'stone') {
            let result = (number * 6.350).toFixed(2);
            output.innerHTML = `${number} st = ${result} kg` 
        
        }
        else if (convertType == 'ounce'){
            let result = (number /35273.962) ;
            output.innerHTML = `${number} oz = ${result} t`
        }
        else if(convertType == 'tonne') {
            let result = (number *35273.962).toFixed(2) ;
            output.innerHTML = `${number} t = ${result} oz`
        } 
    }
    else{
        output.innerHTML = 'Please enter a value!'
    }
}

 
