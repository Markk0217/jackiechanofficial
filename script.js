//index2
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container-custom');

left.addEventListener('mouseenter', () => {
  container.classList.add('hover-left');
});

left.addEventListener('mouseleave', () => {
  container.classList.remove('hover-left');
});

right.addEventListener('mouseenter', () => {
  container.classList.add('hover-right');
});

right.addEventListener('mouseleave', () => {
  container.classList.remove('hover-right');
});


//index5
var heading = $('h1');
heading.attr('data-content', heading.html());
  
