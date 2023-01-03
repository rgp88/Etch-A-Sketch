const divs = document.createElement('div');
const grid = document.querySelector('.grid');
const myInput = document.getElementById('myInput');
const mySubmit = document.getElementById('mySubmit');

const oldDivs = document.getElementsByClassName('genDiv');

var numri;


mySubmit.addEventListener('click', ()=> {

    if(myInput.value>64||myInput.value<1) {
        alert("Please select a number from 1 to 64")
    } else {
        numri = myInput.value;
    }
    
    for(let i=oldDivs.length-1; i>=0; i--) {
            oldDivs[i].parentElement.removeChild(oldDivs[i]);
    }

    for(let j=1; j<=numri*numri; j++) {
        const genDiv = document.createElement('div');
        genDiv.id = 'genDiv'+j;
        genDiv.className = 'genDiv';
        // ragip.textContent = j;
        grid.appendChild(genDiv);
    }



    grid.style.setProperty('grid-template-columns', 'repeat('+numri+', 1fr)');


});

  
