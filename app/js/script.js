const btnHamburger = document.querySelector("#btnHamburger");
const overlay = document.querySelector(".overlay");
const header = document.querySelector(".header");
btnHamburger.addEventListener("click", function () {
  console.log("hi");
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
  } else {
    header.classList.add("open");
    overlay.classList.remove("fade-out");

    overlay.classList.add("fade-in");
  }
});

//bubbles
// JavaScript Variables.
let numBubbles = 5,
  minSize = 8,
  maxSize = 79,
  container = document.getElementById("container-bubble");

// Get the size of a bubble.
// Randomized between minSize and maxSize.
function bubbleSize() {
  return Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
}

// Get the location of a bubble.
// Between left=2% and left=98%.
function bubbleLocation() {
  return Math.floor(Math.random() * 96) + 2;
}

// Create a bubble using the
// previous two functions.
function createBubble() {
  let size = bubbleSize(),
    location = bubbleLocation(), el= document.createElement("div");
    el.classList.add("bubbles");
    

  el.setAttribute(
    "style",
    "width: " + size + "px; height: " + size + "px; left: " + location + "%;"
  );
  // el.classList.add('bubbles');
  container.appendChild(el);
}

// Start adding bubbles.
(function startBubbles() {
  let i = 0;

  function addBubble() {
    if (i < numBubbles) {
      createBubble();
      i++;
    } else {
      clearInterval(inter);
    }
  }

  // Add a bubble every 50000ms.
  // But we don't want too many bubbles...
  let inter = setInterval(addBubble, 700);
})();


//floating icons
$(document).ready(function() {

  var html = '';
  for (var i = 1; i <= 50; i ++) {
      html += '<div class="shape-container--'+i+' shape-animation"><div class="random-shape"></div></div>';
  }
    
  document.querySelector('.shape').innerHTML += html;
  
  var $allShapes = $("[class*='shape-container--']");
  });