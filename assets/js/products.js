/*
 * FUNCTION LOGIN
*/
const shoppingCart = document.querySelector('.shopping-cart');

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