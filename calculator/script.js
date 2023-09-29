let output = document.getElementById('output');
let buttons = Array.from(document.querySelectorAll('button'));
buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'Clear':
                output.value = '';
                break;
            case '=':
                try{
                    output.value = eval(output.value);
                } catch {
                    output.value = "Error"
                }
                break;
            default:
                output.value += e.target.innerText;
        }
    })
});
