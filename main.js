const inputBox = document.querySelector('#input');
const outputBox = document.querySelector('#output');
const btn = document.querySelector('button');

btn.addEventListener('click', () =>{
  
  btn.style.color = "red";
  const inputValue = inputBox.value;
  
  outputBox.innerText = inputValue;
  
  let apiLink = `https:api.mymemory.translated.net/get?q=${inputValue}&langpair=eng|ben`;
  fetch(apiLink).then(res => res.json()).then(data =>{
    outputBox.inerText += data; 
    const finalData = data.responseData.translatedText;
    outputBox.innerText += finalData;
  })
  
})
