var prevScrollpos = window.pageYOffset;
var brand = document.getElementsByClassName('brand-name')[0];
var navItem = document.getElementsByClassName('nav-list')[0]; window.
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    brand.style.display = "none";
  }
   else {
    brand.style.display = "flex";
  }
  prevScrollpos = currentScrollPos;
}


var btn1 = document.getElementsByClassName('btn1')[0];
var btn2 = document.getElementsByClassName('btn2')[0];
var img1 = document.getElementsByClassName('img1')[0];
var img2 = document.getElementsByClassName('img2')[0];
var text = document.getElementsByClassName('img1-text')[0]
var text2 = document.getElementsByClassName('img2-text')[0]

btn1.addEventListener('click', ()=>{
img2.style.width = "0%";
img2.style.display = "none"
img1.style.display = "grid"
img1.style.width = "100%";
img1.style.transition = "10ms";
img1.style.animation = "none";
img2.style.animation = "none";
text.style.animation = "none";
text.style.width = "100%"
text2.style.animation = "none";
text2.style.width = "0%"
})

btn2.addEventListener('click', ()=>{
  img1.style.width = "0%";
  img1.style.display = "none"
  img2.style.display = "grid"
  img2.style.width = "100%";
  img2.style.transition = "10ms"
  img1.style.animation = "none";
  img2.style.animation = "none";
  text.style.animation = "none";
  text.style.width = "0%"
  text2.style.animation = "none";
  text2.style.width = "100%"
})

var standardBtn = document.getElementsByClassName('standard')[0];
var advancedBtn = document.getElementsByClassName('advanced')[0];
var NFTBtn = document.getElementsByClassName('NFT')[0];
var BTCBtn = document.getElementsByClassName('BTC')[0];
var standard = document.getElementsByClassName('standardBody')[0];
var advanced = document.getElementsByClassName('advancedBody')[0];
var NFT = document.getElementsByClassName('NFTBody')[0];
var BTC = document.getElementsByClassName('BTCBody')[0];

standardBtn.addEventListener('click', ()=>{
  standard.style.display = "grid";
  standard.style.transition = "ease 350ms"
  advanced.style.display = "none";
  NFT.style.display = "none";
  BTC.style.display = "none";

})

advancedBtn.addEventListener('click', ()=>{
  standard.style.display = "none";
  advanced.style.display = "grid";
  NFT.style.display = "none";
  BTC.style.display = "none";
})

NFTBtn.addEventListener('click', ()=>{
  standard.style.display = "none";
  advanced.style.display = "none";
  NFT.style.display = "grid";
  BTC.style.display = "none";
})

BTCBtn.addEventListener('click', ()=>{
  standard.style.display = "none";
  advanced.style.display = "none";
  NFT.style.display = "none";
  BTC.style.display = "grid";
})

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
  let items = document.querySelectorAll('.items')
  document.querySelector('.slide').appendChild(items [0])
})

prev.addEventListener('click', function(){
  let items = document.querySelectorAll('.items')
  document.querySelector('.slide').prepend(items[items.length - 1])
})

console.log(prev)