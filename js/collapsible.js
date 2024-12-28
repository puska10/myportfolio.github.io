const coll1 = document.querySelector('#btn-1');
const content1 = document.querySelector('#par-1');

coll1.addEventListener('click',(e)=>{
  content1.classList.toggle('active');
  coll1.classList.toggle('change');
})

const coll2 = document.querySelector('#btn-2');
const content2 = document.querySelector('#par-2');

coll2.addEventListener('click',(e)=>{
  content2.classList.toggle('active');
  coll2.classList.toggle('change');
})

const coll3 = document.querySelector('#btn-3');
const content3 = document.querySelector('#par-3');

coll3.addEventListener('click',(e)=>{
  content3.classList.toggle('active');
  coll3.classList.toggle('change');
})

const coll4 = document.querySelector('#btn-4');
const content4 = document.querySelector('#par-4');

coll4.addEventListener('click',(e)=>{
  content4.classList.toggle('active');
  coll4.classList.toggle('change');
})




/*window.addEventListener("DOMContentLoaded",()=>{
  var coll = document.querySelectorAll(".collapsible");
  var content = document.querySelectorAll(".content");
  var i;
  
  for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
          this.classList.toggle("change");
          content.classList.toggle("active");
               
      });
  } 
});*/

/*const content = document.querySelectorAll('.content');
const coll = document.querySelectorAll('.collapsible');
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", (e)=>{
content.forEach(n=>n.classList.toggle("active")); 
})
}
/*function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}*/