let btn = document.getElementById('btn');
let input = document.getElementById('input');
let main = document.getElementById('main');

btn.onclick = ()=>{
    
    if(input.value == ''){ 
        alert('O campo está vazio')
    }
    
    else{
        //create the element
        let paragraph = input.value;
        let p = document.createElement('p');
        p.innerHTML = paragraph;
        main.appendChild(p);
        input.value = '';
        
        //decoration
        p.onclick = () => {p.style.textDecoration = 'line-through'}
        p.ondblclick = () => {p.style.textDecoration = 'none'}
        p.oncontextmenu = () => {main.removeChild(p)};
        
    }
}
