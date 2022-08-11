let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let close1  = document.getElementById('close')
let catalogBtn = document.getElementById('catalog_btn');
let addMore  = document.getElementById('add_more')
let logo = document.getElementById('logo')

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
});


const swiper = new Swiper('.swiper', {
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerView:1
  
});

const swiper1 = new Swiper('.swiper', {
  loop: true,
  // Navigation arrows  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

catalogBtn.onclick=()=>{
  window.location.assign('../catalog/index.html')
}

addMore.onclick=()=>{
  window.location.assign('../catalog/index.html')
}


let catalogItem = document.querySelectorAll('.catalog_item')

for(let i =0;i<catalogItem.length;i++){
  catalogItem[i].onclick=()=>{
    window.location.assign('../cart/index.html')

    sessionStorage.setItem('img',catalogItem[i].children[0].src)
    sessionStorage.setItem('name',catalogItem[i].children[1].innerHTML)
    sessionStorage.setItem('value',catalogItem[i].children[2].innerHTML)
  } 
}


let corzina = document.querySelector('.magaz')
corzina.onclick=()=>{
    window.location.assign('../corzina/index.html')
}
let corzinmMobile = document.querySelector('.magazin')
corzinmMobile.onclick=()=>{
  window.location.assign('../corzina/index.html')
}





