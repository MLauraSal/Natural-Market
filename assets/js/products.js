/*
 * FUNCTION LOGIN
*/
const shoppingCart = document.querySelector('.cart');

document.querySelector('#shop-btn').onclick = () =>
{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');

}


const swiper = new Swiper ('.product-slider', {

    
    
    loop: true,
    spaceBetween: 20,
    autoplay: {

        delay: 7500,
        disableOnInteraction: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    }, 
});

//COMENZAR CUANDO EL DOCUMENTO ESTE LISTO

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
}else {
    ready();
}

//COMENZAR

function ready() {
    addEventListener();
}

//ACTUALIZAR Y VOLVER A PRESENTAR

function updated() {
    addEventListener();
    updatedTotal();
}

//EVENTOS 

function addEvants() {
    //QUITAR ARTICULOS DEL CART

    let cartRemove_btn = document.querySelectorAll('#cart-remove');

    console.log(cartRemove_btn);
    cartRemove_btn.forEach((btn) => {
        btn.addEventListener('click', handle_removeCartItem)
    });

    //CAMBIAR CANTIDAD DE ARTICULOS

    let cartQuantity_inputs = document.querySelectorAll('.cart-quantity');

    cartQuantity_inputs.forEach((input) => {
        input.addEventListener('change', handle_changeItemQuantity);
    });

    //AÑADIR ARTICULOS AL CARRITO
    
}