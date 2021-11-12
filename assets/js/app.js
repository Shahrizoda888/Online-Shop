// login
let login = document.querySelector('.header .myProfile ')
let loginBox = document.querySelector('.signIn')
let exitLogin = document.querySelector('.signIn .exit')
if(login){
  login.addEventListener('click',()=>{
    loginBox.classList.toggle('active')
    body.classList.toggle('noscroll')
  
  })}
 if(exitLogin){
  exitLogin.addEventListener('click',()=>{
    loginBox.classList.toggle('active')
    body.classList.toggle('noscroll')
  
  })
 }


/// registreation

let registerBtn = document.querySelector('.registration__item .btn')
let register2 = document.querySelector('.registration__item2 ')
let registration2 = document.querySelector('.registration__item.informations.registrations')
let register3 = document.querySelector('.signIn__item .register2')
let register4 = document.querySelector('.signIn__item .register')
let registerT = document.querySelector('.signIn__item .register')
let signInItems = document.querySelector('.signIn__items.informations.sign-In')
let signIn2 = document.querySelector('.signIn .sign-in')
if(registerBtn){
  registerBtn.addEventListener('click', ()=>{
    registration2.classList.remove('isShow')
    register2.classList.add('isShow')
    signInItems.classList.remove('isShow')
    register3.classList.add('isActive')
    registerT.classList.toggle('isActive')
  })
}
if(register4){
  register4.addEventListener('click',()=>{
    register4.classList.toggle('active')
    signIn2.classList.toggle('active')
    registration2.classList.add('isShow')
    signInItems.classList.remove('isShow')
  })
}
if(signIn2){
  signIn2.addEventListener('click',()=>{
    // registration2.classList.toggle('isShow')
    register2.classList.remove('isShow')
    signIn2.classList.toggle('active')
    register4.classList.toggle('active')
    register3.classList.remove('isActive')
    registerT.classList.remove('isActive')
    signInItems.classList.add('isShow')
  })
}

// operation 
var operatsion = document.querySelectorAll('.operatsion .item .title')
operatsion.forEach(element => {
  element.addEventListener('click',function(){
    var id = this.getAttribute('data-id')
    inf = document.querySelectorAll('.operatsion .item .title.active')
    inf.forEach(item =>{
      item.classList.remove('active')
    })

    mitemss = document.querySelectorAll('.operatsion .product.isActive')
    mitemss.forEach(item =>{
      item.classList.remove('isActive')
    })
    var mitems = document.querySelector('.operatsion .product.'+id)
    element.classList.add('active')
    mitems.classList.add('isActive')
    
  })
}) 


//input mask
if (document.querySelector(`input[type="tel"]`)){
  var selector = document.querySelector(`input[type="tel"]`);

var im = new Inputmask("99-999-99-99");
im.mask(selector);
}

// favorites
var operatsion = document.querySelectorAll('.favorites__title  .title')
operatsion.forEach(element => {
  element.addEventListener('click',function(){
    var id = this.getAttribute('data-id')
    inf = document.querySelectorAll('.favorites__title .title.active')
    inf.forEach(item =>{
      item.classList.remove('active')
    })

    mitemss = document.querySelectorAll('.favorites__product.isActive')
    mitemss.forEach(item =>{
      item.classList.remove('isActive')
    })
    var mitems = document.querySelector('.favorites__product.'+id)
    element.classList.add('active')
    mitems.classList.add('isActive')
    
  })
})
// account
var account = document.querySelectorAll('.account .account__item .menus ul li')
account.forEach(element => {
  element.addEventListener('click',function(){
    var id = this.getAttribute('data-id')
    inf = document.querySelectorAll('.account .account__item .menus ul li.active')
    inf.forEach(item =>{
      item.classList.remove('active')
    })

    mitemss = document.querySelectorAll('.account .items.isShow')
    mitemss.forEach(item =>{
      item.classList.remove('isShow')
    })
    var mitems = document.querySelector('.account .items.'+id)
    element.classList.add('active')
    mitems.classList.add('isShow')
    
  })
})
// settings
var settings = document.querySelectorAll('.settings .pageLink')
settings.forEach(element => {
  element.addEventListener('click',function(){
    var id = this.getAttribute('data-id')
    inf = document.querySelectorAll('.settings .pageLink.active')
    inf.forEach(item =>{
      item.classList.remove('active')
    })

    mitemss = document.querySelectorAll('.settings .items.isShow')
    mitemss.forEach(item =>{
      item.classList.remove('isShow')
    })
    var mitems = document.querySelector('.settings .items.'+id)
    element.classList.add('active')
    mitems.classList.add('isShow')
    
  })
})

  
  let set = false
  function toggle(){
    console.log('salom');
    if(set){
       document.getElementById('parol').setAttribute("type","password")
      
      set = false
    }
    else{
       document.getElementById('parol').setAttribute("type","text")
       
      set = true
    }
  }
  function logInToggle(){
    console.log('salom');
    if(set){
       document.getElementById('logInParol').setAttribute("type","password")
      
      set = false
    }
    else{
       document.getElementById('logInParol').setAttribute("type","text")
       
      set = true
    }
  }
  function newToggle(){
    console.log('salom');
    if(set){
      
       document.getElementById('newParol').setAttribute("type","password")
      set = false
    }
    else{
      
       document.getElementById('newParol').setAttribute("type","text")
      set = true
    }
  }
 

// announcements
var announcements= document.querySelectorAll('.myAnnouncements .pageLink')
announcements.forEach(element => {
  element.addEventListener('click',function(){
    var id = this.getAttribute('data-id')
    inf = document.querySelectorAll('.myAnnouncements .pageLink.active')
    inf.forEach(item =>{
      item.classList.remove('active')
    })

    mitemss = document.querySelectorAll('.myAnnouncements .items.isShow')
    mitemss.forEach(item =>{
      item.classList.remove('isShow')
    })
    var mitems = document.querySelector('.myAnnouncements .items.'+id)
    element.classList.add('active')
    mitems.classList.add('isShow')
    
  })
})

// ProductFilter 
var filter = document.querySelectorAll('.product__filter  .link')
filter.forEach(element => {
  element.addEventListener('click',function(){
    var id = this.getAttribute('data-id')
    // inf = document.querySelectorAll('.product__filter .link')
    // inf.forEach(item =>{
    //   item.classList.add('active')
    // })

   var img = document.querySelectorAll('.product__filter .link .img.'+id)
   img.forEach(item=>{
     item.classList.toggle('active')
   })
    var mitems = document.querySelector('.state__item.'+id)
   

    element.classList.toggle('active')
    mitems.classList.toggle('isShow')
    
  })
})

var filte = document.querySelectorAll('.filtre  .link')
filte.forEach(element => {
  element.addEventListener('click',function(){
    var id = this.getAttribute('data-id')
    // inf = document.querySelectorAll('.product__filter .link')
    // inf.forEach(item =>{
    //   item.classList.add('active')
    // })

   var img = document.querySelectorAll('.filtre__state  .link .img.'+id)
   img.forEach(item=>{
     item.classList.toggle('active')
   })
    var mitems = document.querySelector('.filtre__state__item.'+id)
   

    element.classList.toggle('active')
    mitems.classList.toggle('isShow')
    
  })
})

if (document.querySelector('.sliderProduct.splide')){
  new Splide('.sliderProduct.splide',{
    // rewind:true,
    type: 'loop',
    perPage:4,
    perMove:1,
    arrows:true,
    clone:false,
    pagination:false,
    breakpoints:{
      1024:{
        perPage:3,
        type:'loop',
        pagination:true
      },
      500:{
        perPage:2,
        type:'loop',
        pagination:true,
        arrows:false,
      },
      768:{
        perPage:2,
        type:'loop',
        pagination:true,
        arrows:false,
      },
     
    }

  }).mount()
}
// sliderBanner
if (document.querySelector('.sliderBanner.splide')){
  new Splide('.sliderBanner.splide',{
    // rewind:true,
    type: 'loop',
    perPage:1,
    perMove:1,
    arrows:true,
    clone:false,
    pagination:true,
    autoplay:true,
    breakpoints:{
      500:{
        perPage:1,
        type:'loop',
        pagination:true,
        arrows:false,
      },
    }

  }).mount()
}
if (document.querySelector('.sliderCategory.splide')){
  new Splide('.sliderCategory.splide',{
    // rewind:true,
    type: 'loop',
    perPage:10,
    perMove:1,
    arrows:true,
    clone:false,
    pagination:false,
    breakpoints:{
      1396:{
        perPage:8,
        type:'loop',
        pagination:true
      },
      1024:{
        perPage:6,
        type:'loop',
        pagination:true
      },
      768:{
        perPage:4,
        type:'loop',
        pagination:false,
        arrows:false,
      },
      500:{
        perPage:4,
        type:'loop',
        pagination:false,
        arrows:false,
      },
    }

  }).mount()

}

// help 
var help = document.querySelectorAll('.infoHelp .infoHelp__show')
help.forEach(element => {
  element.addEventListener('click',function(){
    var id = this.getAttribute('data-id')
    // inf = document.querySelectorAll('.product__filter .link')
    // inf.forEach(item =>{
    //   item.classList.add('active')
    // })

   var img = document.querySelectorAll('.infoHelp  .infoHelp__show .img.'+id)
   img.forEach(item=>{
     item.classList.toggle('active')
   })
    var mitems = document.querySelector('.infoHelp .infoHelp__items.'+id)
   

    element.classList.toggle('active')
    mitems.classList.toggle('isShow')
    
  })
})

// location
var body = document.querySelector('body')
let locat = document.querySelector('.header .location')
let searchLocat = document.querySelector('.searchLocation')
if(locat){
  locat.addEventListener('click', ()=>{
    searchLocat.classList.toggle('isActive')
    body.classList.toggle('noscroll')
  })
}
 let searchLocatExit = document.querySelector('.searchLocation .exit')
 if(searchLocatExit){
  searchLocatExit.addEventListener('click', ()=>{
    searchLocat.classList.toggle('isActive')
    body.classList.toggle('noscroll')
    
  })
 }
// category button

let btn = document.querySelector('.header button.category')
let burgerBtn = document.querySelector('.header button.category .btn')
let category = document.querySelector('.categories')
if(btn){
  btn.addEventListener('click', ()=>{
    burgerBtn.classList.toggle('active')
    category.classList.toggle('active')
    filtre.classList.remove('active')
  })
}
 // filter button 
let Fbtn = document.querySelector('.header .item .filter')
let filtre = document.querySelector('.filtre')
if(Fbtn){
  Fbtn.addEventListener('click', ()=>{
    Fbtn.classList.toggle('active')
    filtre.classList.toggle('active')
    burgerBtn.classList.remove('active')
    category.classList.remove('active')
  })
}
let exitFbtn = document.querySelector('.filtre .exit')
if(exitFbtn){
  exitFbtn.addEventListener('click', ()=>{
    Fbtn.classList.toggle('active')
    filtre.classList.toggle('active')
  })
}
// category button col 
var nav = document.querySelectorAll('.categories__menu ul li')
nav.forEach(element => {
  element.addEventListener('click',function(){
    var id = this.getAttribute('data-id')
    inf = document.querySelectorAll('.categories__menu  li.active')
    inf.forEach(item =>{
      item.classList.remove('active')
      
    })
    mitemss = document.querySelectorAll('.categories .boxes.isShow')
    mitemss.forEach(item =>{
      item.classList.remove('isShow')
    })
    var mitems = document.querySelector('.categories .boxes.'+id)
    element.classList.add('active')
    
    mitems.classList.add('isShow')
    
  })
})
let feedBack = document.querySelectorAll('.feedinfo .form')
let feedBtn = document.querySelector('.feedinfo .btn')
function stateHandle6() {
  for (var i=0;i<feedBack.length;i++){
    
    if(feedBack[i].value ===''){
      feedBtn.disabled=true
      feedBtn.style.background  = '#EAEDEE'
      
    }
     
    else {
        
      feedBtn.disabled = false;
      feedBtn.style.background  = '#1F41F7'
      feedBtn.style.color  = '#fff'
    }
    
    
  }
}
feedBack.forEach(item=>{
  item.addEventListener("input", stateHandle6);
 
})
   
 // register button disable 
let input = document.querySelectorAll('.signIn .form input')
let btn2 = document.querySelector('.signIn .btn2')

function stateHandle() {
  console.log('salom');
  for (var i=0;i<input.length;i++){
    
    if(input[i].value ===''){
      btn2.disabled=true
      btn2.style.background  = '#EAEDEE'
      
    }
     
    else {
        
      btn2.disabled = false;
      btn2.style.background  = '#1F41F7'
      btn2.style.color  = '#fff'
    }
    
    
  }
    
}
input.forEach(item=>{
  item.addEventListener("input", stateHandle);
 
})
let registers = document.querySelector('.registration__item input')
let registerBtns = document.querySelector('.registration__item .btn')
let inptCh = document.querySelector('.registration__item #rem')

function stateHandle2() {
  console.log('salom');
  
    if(inptCh.checked == true){
      registerBtns.disabled = false;
      registerBtns.style.background  = '#1F41F7'
      registerBtns.style.color  = '#fff'
     
    }
    else{
      registerBtns.disabled=true
      registerBtns.style.background  = '#EAEDEE' 
    }
    
    
  
    
}
if(inptCh){
  inptCh.addEventListener('click',stateHandle2)
}


let registers3 = document.querySelectorAll('.registration__item2 input')
let registersBtn = document.querySelector('.registration__item2 .btn3')


function stateHandle3(){
  for (var i=0;i<registers3.length;i++){
    if(registers3[i].value ===''){
      registersBtn.disabled=true
      registersBtn.style.background  = '#EAEDEE'
    }
     
    else {
        
      registersBtn.disabled = false;
      registersBtn.style.background  = '#1F41F7'
      registersBtn.style.color  = '#fff'
    }
    
    
  }
}
registers3.forEach(item=>{
  item.addEventListener("input", stateHandle3);
 
})

// chat
let chatBtn = document.querySelector('.chats .items .name .bar')
let chatMenu = document.querySelector('.chats .items .bar__menu')
if(chatBtn){
  chatBtn.addEventListener('click',()=>{
    chatMenu.classList.toggle('isShow')
    chatBtn.classList.toggle('active')
  })
}

let chatInput = document.querySelector('.chats .col-lg-8 .chats__write input')
let chatBtns =document.querySelector('.chats .col-lg-8 .btn')
function stateHandleChat() {
  console.log('salom');
  
    if(chatInput.value===''){
      chatBtns.disabled = false;
      chatBtns.style.background  = '#EAEDEE' 
      chatBtns.style.color  = ' #B4B4B4'
     
    }
    else{
      chatBtns.disabled=true
      chatBtns.style.background  = '#1F41F7'
      chatBtns.style.color  = '#fff'
      
    }
    
    
  
    
}
if(chatInput){
  chatInput.addEventListener('input',stateHandleChat)
}

 // addPage slider
 document.addEventListener( 'DOMContentLoaded', function () {
  if (document.getElementById('topsli')){
      new Splide( '#topsli',{
          rewind: true,
          type   : 'loop',
          perPage: 11,
          perMove:1,
      } ).mount();
  }

  if (document.getElementById('slider')){
      new Splide( '#slider',{
          rewind: true,
          type   : 'loop',
          perPage: 7,
          perMove:1,
      } ).mount();

  }

  if (document.getElementById('v-slider')){
      var secondarySlider = new Splide( '#v-slider', {
          rewind      : true,
          fixedWidth  : 122,
          fixedHeight : 86,
          isNavigation: true,
          gap         : 10,
          focus       : 'center',
          pagination  : false,
          cover       : true,
          breakpoints : {
              '600': {
                  fixedWidth  : 66,
                  fixedHeight : 40,
              }
          }
      } ).mount();
  }

  if (document.getElementById('b-slider')){
      var primarySlider = new Splide( '#b-slider', {
          type       : 'fade',
          heightRatio: 0.5,
          pagination : false,
          arrows     : false,
          cover      : true,
      } ); // do not call mount() here.
      
      primarySlider.sync( secondarySlider ).mount();
  }
  
} );
///
let writeBtn = document.querySelector('.operatsion .call__btn .writeBtn')
let charExit = document.querySelector('chat__box .chatExit')
chatWrite =document.querySelector('.chats')
if(writeBtn){
  writeBtn.addEventListener('click',()=>{
    chatWrite.classList.toggle('isShow')
  })
}
if(charExit){
  charExit.addEventListener('click',()=>{
    chatWrite.classList.toggle('isShow')
  })
}
//payment card 
let paymentBtn = document.querySelector('.create__btn .btn')
let payment = document.querySelector('.choosePayment')
let paymentExit = document.querySelector('.choosePayment__box .paymentExit')
chatWrite =document.querySelector('.chats')
if(paymentBtn){
  paymentBtn.addEventListener('click',()=>{
    payment.classList.toggle('isShow')
  })
}
if(paymentExit){
  paymentExit.addEventListener('click',()=>{
    payment.classList.toggle('isShow')
  })
}
 

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtns')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}