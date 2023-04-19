const toggleBtn = document.querySelector('.right i');

const slidebar = document.querySelector('.left');

toggleBtn.addEventListener('click', ()=>{

 // toggle function if else methodd

 // if(slidebar.classList.contains('translateSlideBar')) {
 //  slidebar.remove("translateSlideBar");
 // } else {
 //  slidebar.classList.add("translateSlideBar");
 // }

 //default toggle method

 slidebar.classList.toggle("translateSlideBar");

})