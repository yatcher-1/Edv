// scroll animation

// const navEl = document.querySelector(".navbar");
// window.addEventListener("scroll", () => {
//   if (window.scrollY >= 56) {
//     navEl.classList.add("fixed-top");
//   } else if (window.screenY < 56) {
//     navEl.classList.remove("fixed-top");
//   }
// });
// navbar hover not hover


  const loader = document.getElementById("preloader");
  window.addEventListener("load", function (){
    loader.style.display = "none";
    loader.style.zIndex = -100;
  });



const classList = document.querySelectorAll(".dropdown");
    
window.addEventListener("resize", window.onload=function () {

    if(window.innerWidth < 1080) {   
        classList.forEach( item => {
        item.classList.remove("dropdown-hover", "position-static")});
    } 
 
    else{
        classList.forEach( item => {
        item.classList.add("dropdown-hover", "position-static")});
      }
}); 

function offset(el) {
  var rect = el.getBoundingClientRect(),
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

// animate counter
let timerInterval = null;
const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 200;

counterNum.forEach((curElem)=>{

  timerInterval = setInterval(()=>{

    const updateNumber = ()=>{
        const targetNumber = parseInt(curElem.dataset.number);
        const initialNum = parseInt(curElem.innerText);

        const incrementNumber = Math.trunc((targetNumber/speed));
    
        if(initialNum < targetNumber){
            curElem.innerText = `${initialNum + incrementNumber} +`;
            setTimeout(updateNumber, 70);
        }
    };
        updateNumber();
  },5000);
});

// horizontal scroll

(function(){
  init();

  var g_containerInViewport;
  function init(){
      setStickyContainersSize();
      bindEvents();
  }

  function bindEvents(){
      window.addEventListener("wheel", wheelHandler);        
  }

  function setStickyContainersSize(){
      document.querySelectorAll('.sticky-container-for-hori').forEach(function(container){
          const stikyContainerHeight = container.querySelector('.main-hori').scrollWidth;
          container.setAttribute('style', 'height: ' + stikyContainerHeight + 'px');
      });
  }

  function isElementInViewport (el) {
      const rect = el.getBoundingClientRect();
      return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
  }

  function wheelHandler(evt){
      
      const containerInViewPort = Array.from(document.querySelectorAll('.sticky-container-for-hori')).filter(function(container){
          return isElementInViewport(container);
      })[0];

      if(!containerInViewPort){
          return;
      }

      var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
      var isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
      let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

      if(g_canScrollHorizontally){
          containerInViewPort.querySelector('.main-hori').scrollLeft += evt.deltaY;
      }
  }
})();


let items = document.querySelectorAll('#blogs .carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4;
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
});


// let itemsMarquee = document.querySelectorAll('.marquee-list')

// itemsMarquee.forEach((el) => {
//     const minPerSlide = 4;
//     let next = el.nextElementSibling
//     for (var i=1; i<minPerSlide; i++) {
//         if (!next) {
//             // wrap carousel by using first child
//         	next = itemsMarquee[0]
//       	}
//         let cloneChild = next.cloneNode(true)
//         el.appendChild(cloneChild.children[0])
//         next = next.nextElementSibling
//     }
// });

