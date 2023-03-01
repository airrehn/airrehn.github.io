// template_z6ksw5x
// service_vsi9dki
// 1JAOCUiPRg6rj1jqf
let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1/20;


function contact(event) {
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading') //target first element with this class, returns an array of these elements
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"

    emailjs.sendForm('service_vsi9dki', 'template_z6ksw5x',
    event.target, '1JAOCUiPRg6rj1jqf'
    ).then(()=>{
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service is temporarily unavailable. Please contact me directly at ashwinaaron@gmail.com"
        );
    })
}

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    //target ALL element (those "img" html with the shapes svgs in this case) with this class, 
    // returns an array of these elements
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
   
    for (let i= 0; i<shapes.length; i++) {
        let j = 1;
        if (i%2 == 0) {
            j = 1
        } else {
            j = -1
        }
        shapes[i].style.transform = `translate(${x * j}px, ${y * j}px) rotate(${x * j * 10}deg)`
        // target the CSS transform property of these imgs
    }

}

function toggleContrast() {
    contrastToggle = !contrastToggle
    if(contrastToggle) {
        return document.body.classList += " dark-theme"
    } else {
        return document.body.classList.remove("dark-theme")
    }
}



function toggleModal() {
    isModalOpen = !isModalOpen;
    if (isModalOpen) {
        return document.body.classList += " modal--open"
    } else {
       return document.body.classList.remove("modal--open")
    }
}