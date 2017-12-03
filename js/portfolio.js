function ready(a){"loading"!=document.readyState?a():document.addEventListener("DOMContentLoaded",a)}
var nav;
ready(function(){
    var about = document.querySelector('.one');
    var projects = document.querySelector('.two');
    var skill = document.querySelector('.three');
    var contact = document.querySelector('.four');

     nav = document.querySelectorAll('nav ul li a');
    
    for (var i = nav.length - 1; i >= 0; i--) {
     
        nav[i].addEventListener("click",function(){
          hideAll();

           if(this.classList.contains('about')){
                about.classList.remove('hidden');
                this.classList.add('active');
           } else if(this.classList.contains('projects')){
                projects.classList.remove('hidden');
                this.classList.add('active');
           }
        });
    }

});

function removeActive() {
    for (var i = nav.length - 1; i >= 0; i--) {
        nav[i].classList.remove('active');
    }
}

function hideAll() {
   
    var sections = document.querySelectorAll('section');
    for (var i = sections.length - 1; i >= 0; i--) {
        sections[i].classList.add('hidden');
    }
    removeActive();
}