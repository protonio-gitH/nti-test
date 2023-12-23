const basket = document.querySelector('.basket');
const basketMenu = document.querySelector('.header-basket');

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }


basket.addEventListener('mouseover', function(){
    basketMenu.classList.add('header-basket--active');
})

basketMenu.addEventListener('mouseover', function(){
    basketMenu.classList.add('header-basket--active');
})

basketMenu.addEventListener('mouseout', function(){
    basketMenu.classList.remove('header-basket--active');
})

basket.addEventListener('mouseout', function(){
    sleep(500);
    basketMenu.classList.remove('header-basket--active');
    
})


new Swiper('.slider-container ', {
    loop: true,
    spaceBetween:1,

    navigation: {
        nextEl: '.arrow-next',
        prevEl: '.swiper-button-prev',
      },
    
});

new Swiper('.popular-bottom__inner', {
    // loop: true,
    spaceBetween:20,
    slidesPerView: '3.5',

    navigation: {
        nextEl: '.arrow-next',
        prevEl: '.swiper-button-prev',
      },
    
});


new Swiper('.popular-middle__inner', {
    // loop: true,
    spaceBetween:15,
    slidesPerView: 'auto',

    // navigation: {
    //     nextEl: '.arrow-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    
});


new Swiper('.discount__bottom', {
    // loop: true,
    spaceBetween:20,
    slidesPerView: 'auto',

    navigation: {
        nextEl: '.arrow-next',
        prevEl: '.swiper-button-prev',
      },
    
});

new Swiper('.header-mobile__bottom-inner', {
    // loop: true,
    spaceBetween:12,
    slidesPerView: 'auto',

    
    
});

new Swiper('.top-mobile__container', {
    loop: true,
    spaceBetween:5,
    // slidesPerView: 'auto',

    
    
});

new Swiper('.popular-mobile__middle-inner', {
    // loop: true,
    spaceBetween:12,
    slidesPerView: 'auto',

    
    
});

new Swiper('.popular-mobile__bottom-wrapper', {
    // loop: true,
    // spaceBetween:12,
    slidesPerView: 'auto',

    pagination: {
        el: '.swiper-pagination',
      },
    
});

new Swiper('.discount-mobile__middle', {
    // loop: true,
    spaceBetween:10,
    slidesPerView: 'auto',

    
});


const modalClose = document.querySelector('.modal-close');
const modal = document.querySelector('.modal');
const modalBox = document.querySelector('.modal__box');
const modalActive = document.querySelector('.modal--active');

modalClose.addEventListener('click', () =>{
    modal.classList.remove('modal--active');
})


// document.addEventListener('click', (e) => {
    
//     if ( !e.composedPath().includes(modalBox)){
//         modal.classList.remove('modal--active');
//     }
// })



const regPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
const inpPhone = document.querySelector('#phone');
const regName = /^[A-Za-zА-Яа-яЁё]*$/;
const inpName = document.querySelector('#name');
const form = document.querySelector('.form');
const invName = document.querySelector('.invalid-name');
const invPhone = document.querySelector('.invalid-phone');

document.querySelector('.button__box-btn').addEventListener('click', (e) => {
    e.preventDefault();
    let resOne;
    let resTwo;

    if (!validate(regPhone,inpPhone.value)){
        invPhone.classList.add('invalid--active');
        resOne = false;
    }
    else{
        invPhone.classList.remove('invalid--active');
        resOne = true;
    }

    if (!validate(regName,inpName.value) || (inpName.value.length == 0)){
        invName.classList.add('invalid--active');
        resTwo = false;
    }
    else{
        invName.classList.remove('invalid--active');
        resTwo = true;
    }

    console.log(resOne,resTwo)
    
    if (resOne == true && resTwo == true ){
        console.log(true);
        modal.classList.add('modal--active');
    }
    else{
        console.log(false);
    }
    
})

function validate(reg,input){
    return reg.test(input);
}

// function notValid(input,el,mess){
//     return reg.test(input);
// }

// function valid(input,el,mess){
//     return reg.test(input);
// }


const burgerButton = document.querySelector('.header-mobile-burger');
const burgerMenu = document.querySelector('.header-mobile__menu-wrapper');
const burgerClose = document.querySelector('.header-mobile__menu-close');

burgerButton.addEventListener('click', () =>{

    burgerMenu.classList.add('header-mobile__menu-wrapper--active');
})

burgerClose.addEventListener('click', () =>{
    burgerMenu.classList.remove('header-mobile__menu-wrapper--active');
})
