var display = document.getElementById('display');

var buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = "";
                break;
            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
                case '=':
                    try{
                        display.innerText = eval(display.innerText);
                    } catch{
                        display.innerText = 'Error!';
                    }
                    break;
            default:
                display.innerText += e.target.innerText
        }
    });
});


var typed = new Typed(".auto-type", {
    strings: ["Add", "Subtract", "Multiply", "Divide"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})