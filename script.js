const generate_button = document.querySelector('#generate');
const change_color = document.querySelector('#change-color');
const masa_de_lucru = document.querySelector('.patrat');

generate_button.addEventListener('click', () => {
    masa_de_lucru.classList.add("patrat-generat")
})

const change_color2 = () =>{
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    masa_de_lucru.style.backgroundColor = `#${randomColor}`;
    // color.innerHTML = `#${randomColor}`
}


change_color.addEventListener('click', change_color2)
change_color2()



