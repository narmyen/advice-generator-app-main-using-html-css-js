function outPut(){
  fetch('https://api.adviceslip.com/advice')
  .then((response) => response.json())
  .then((json) => {
    document.getElementById('id-slip').innerHTML = json.slip.id
    document.getElementById('result-advice').innerHTML = json.slip.advice

  });

}

let btnOn = document.querySelector('.container .box-container .random-btn')
btnOn.addEventListener('click', outPut)
