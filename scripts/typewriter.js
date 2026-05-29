const txt = document.querySelector("h1").textContent; /* The text */
const speed = 550; /* The speed/duration of the effect in milliseconds */
let i = 0;

$("h1").text("");

function typeWriter() {


  if (i < txt.length) {
      document.querySelector("h1").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
      console.log(i);
    }

}

typeWriter();