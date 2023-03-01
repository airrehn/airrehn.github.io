// template_z6ksw5x
// service_vsi9dki
// 1JAOCUiPRg6rj1jqf
let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle
    if(contrastToggle) {
        return document.body.classList += " dark-theme"
    } else {
        return document.body.classList.remove("dark-theme")
    }
}


function contact(event) {
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading')
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



function toggleModal() {
    isModalOpen = !isModalOpen;
    if (isModalOpen) {
        return document.body.classList += " modal--open"
    } else {
       return document.body.classList.remove("modal--open")
    }
}