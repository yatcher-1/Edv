// scroll animation

const navEl = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 56) {
    navEl.classList.add("navbar-scrolled", "fixed-top");
  } else if (window.screenY < 56) {
    navEl.classList.remove("navbar-scrolled", "fixed-top");
  }
});
// navbar hover not hover

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

// particlejs

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 355,
        "density": {
          "enable": true,
          "value_area": 789.1476416322727
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.48927153781200905,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 0.2,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.2,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 83.91608391608392,
          "size": 1,
          "duration": 3,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
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


