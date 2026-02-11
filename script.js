//Create the button fot the user
const btn = document.createElement("button");
btn.classList.add("sizeBtn");
btn.textContent = "CLICK HERE!"
btn.style.cssText = "width: 100px; height: 50px"
document.body.appendChild(btn);

btn.addEventListener("click", () => {
    const container = document.querySelector('.container');
    //It clears the container every time the button is clicked
    container.innerHTML = ''; 
    
    let correctInput = false;
    let rows = 0;
    let columns = 0;

    //Set a while conditional state until the user enters the correct input
    while (!correctInput) {
        rows = Number(prompt("Enter the number of Rows (maximum 100): "))
        columns = rows;
        if (((rows <= 100) && (rows > 0))) {
            correctInput = true;
        } else {
            alert("Incorrect input. Try again")
        }
    }

    //Save rows and columns in Str format
    btn.dataset.rows = rows;
    btn.dataset.columns = columns;
    
    //Fills the container with square divs
    for (let i = 0; i < Number(btn.dataset.rows); i++) {
        for (let j = 0; j < Number(btn.dataset.columns); j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.cssText = `flex-basis: calc(100% / ${btn.dataset.columns}); height: calc(100% / ${btn.dataset.rows})`
            container.appendChild(square);
        }
    }

    //Adds an event for when hovering the mouse over squares to change color
    container.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('square')) {
            e.target.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
        }
    });
    
    //Returns a RGB color number
    function randomColor() {
        return Math.floor(Math.random() * 256)
    }
})

