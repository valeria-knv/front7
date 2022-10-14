function GetRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.onload = function(){
    let inputText = document.createElement("input" );
    inputText.setAttribute("type","text");
    inputText.classList.add('InputType');
    inputText.setAttribute("id","str");
    inputText.setAttribute("pattern", "^[A-Za-z0-9 +_.-]+[?]$");
    inputText.setAttribute("placeholder","Enter the question");
    document.body.appendChild(inputText);

    let div = document.createElement('div');
    div.classList.add('container');
    document.body.appendChild(div);

    let img = document.createElement('img');
    img.src="https://i.gifer.com/origin/38/3813ab93c31fc754a2342fd3ae436c4b_w200.gif"
    img.setAttribute("class","img");
    img.classList.add('img', 'scale');
    div.prepend(img);

    let div2 = document.createElement('div');
    div2.classList.add('centered');
    div.append(div2);

    const array = Array("Yes", "No", "Maybe", "Most likely", "Unlikely", "No answer", "Absolutely", "Partialy");

    inputText.addEventListener('keypress', e =>{
        if(e.key === 'Enter'){
            div2.innerHTML = array[GetRandom(0, 7)];
        }
    })
}