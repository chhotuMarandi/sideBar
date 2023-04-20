const toggleBtn = document.querySelector('.right i');

const slidebar = document.querySelector('.left');

const closeBtn = document.querySelector(".heading i");

const toggleFunction = () => {
  // toggle function if else methodd

  // if(slidebar.classList.contains('translateSlideBar')) {
  //  slidebar.remove("translateSlideBar");
  // } else {
  //  slidebar.classList.add("translateSlideBar");
  // }

  //default toggle method

  slidebar.classList.toggle("translateSlideBar");
}

const closeFunction = () => {
 slidebar.classList.toggle("translateSlideBar");
}

toggleBtn.addEventListener("click", toggleFunction);
closeBtn.addEventListener("click", closeFunction);