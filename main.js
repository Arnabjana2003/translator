const inputBox = document.querySelector('#input');
const outputBox = document.querySelector('#output');
const btn = document.querySelector('button');

btn.addEventListener('click', () =>{
  
  const inputValue = inputBox.value;
  
  let apiLink = `https:api.mymemory.translated.net/get?q=${inputValue}&langpair=eng|ben`;
  fetch(apiLink).then(res => res.json()).then(data =>{
     const finalData = data.responseData.translatedText;
    outputBox.innerText = finalData;
  })
  
})
