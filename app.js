let inp = document.querySelector('#inp');


function allButtons(a){
    console.log(a);
    inp.value += a

}

function equal(){
    inp.value = eval(inp.value)
}

function clearall(){
    inp.value = ''
}

function clearone(){
    let currentValue = inp.value;
    inp.value = currentValue.slice(0, -1) 
}

