const grid = document.querySelector('.grid');
const myInput = document.getElementById('myInput');
const mySubmit = document.getElementById('mySubmit');
const parentGrid = document.querySelector('.parentGrid')
const divs = document.getElementsByClassName('genDiv');
const myColor = document.getElementById('myColor');

var numri;
console.log(myColor.value);

mySubmit.addEventListener('click', ()=> {

    if(myInput.value>64||myInput.value<1) {
        alert("Please select a number between 1 and 64")
    } else {
        numri = myInput.value;
    }

    for(let i=divs.length-1; i>=0; i--) {
            divs[i].parentElement.removeChild(divs[i]);
    }

    for(let j=1; j<=numri*numri; j++) {
        const genDiv = document.createElement('div');
        genDiv.id = 'genDiv'+j;
        genDiv.className = 'genDiv newDiv';
        grid.appendChild(genDiv);

        genDiv.addEventListener('mousemove', (e)=> {
            if (e.buttons == 1) {
            genDiv.style.backgroundColor=myColor.value;
            console.log(e);
            } 
        });
    }

    grid.style.setProperty('grid-template-columns', 'repeat('+numri+', 1fr)');

});

