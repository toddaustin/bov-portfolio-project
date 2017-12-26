function ready(a){"loading"!=document.readyState?a():document.addEventListener("DOMContentLoaded",a)}
var nav;
ready(function(){
    var about = document.querySelector('.one');
    var projects = document.querySelector('.two');
    var skill = document.querySelector('.three');
    var contact = document.querySelector('.four');

     nav = document.querySelectorAll('nav ul li a');

     showProject();
    
    for (var i = nav.length - 1; i >= 0; i--) {
     
        nav[i].addEventListener("click",function(){
          hideAll();
           if(this.classList.contains('about')){https://smile.amazon.com/Barbell-Deluxe-Power-Rack-FM-CB8000F/dp/B00I04Z52G/ref=lp_17372558011_1_5?s=sports-and-fitness&ie=UTF8&qid=1512353539&sr=1-5#
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

function showProject() {
    var projectContainer = document.querySelectorAll('.project-tabs li');

    var proj = document.querySelectorAll('.proj');
    for (var i = projectContainer.length - 1; i >= 0; i--) {
        projectContainer[i].addEventListener("click",function(){ 
            var curClass = this.className;   
            var currentProj = document.querySelector('.' + curClass + '-content');
            currentProj.classList.remove('hidden');
        });
    }
}