var i = 0;
var j = 0;
const head1 = 'Hi, I\'m a Software Developer.';
const head2 = 'I like writing code in JavaScript and Golang.';
const speed = 50;

function typeWriter() {
  if (i < head1.length) {
    document.getElementById("head-1").innerHTML += head1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else if(j < head2.length) {
    document.getElementById("head-2").innerHTML += head2.charAt(j);
    j++;
    setTimeout(typeWriter, speed);
  }
}
window.onload = typeWriter;