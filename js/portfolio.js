function ready(a){"loading"!=document.readyState?a():document.addEventListener("DOMContentLoaded",a)}
var nav;
ready(function(){
    // var about = document.querySelector('.one');
    // var projects = document.querySelector('.two');
    // var skills = document.querySelector('.three');
    // var contact = document.querySelector('.four');

    nav = document.querySelectorAll('nav ul li a');

    showProject();
    
    for (var i = nav.length - 1; i >= 0; i--) {
        nav[i].addEventListener("click",function(){
            hideAll();
            var current = this.textContent.toLowerCase();
            if(this.classList.contains(current)){
                this.classList.add('active');
                document.querySelector("#" + current).classList.remove('hidden');
           } 
        });
    }
    var years = document.querySelector('.years');
    years.textContent = calculateYears();
});

function removeActive() {
    for (var i = nav.length - 1; i >= 0; i--) {
        nav[i].classList.remove('active');
    }
}

function hideAll() {
    var sections = document.querySelectorAll('section');
    for (var i = 0; i <sections.length;i++) {
        sections[i].classList.add('hidden');
    }
    removeActive();
}

function showProject() {
    var projectContainer = document.querySelectorAll('.project-tabs li');
    var proj = document.querySelectorAll('.proj');
    for (var i = projectContainer.length - 1; i >= 0; i--) {
    
        projectContainer[i].addEventListener("click",function(){ 
            for (var j = proj.length - 1; j >= 0; j--) {
                proj[j].classList.add('hidden');
            }
            [].forEach.call(projectContainer, function(e) {
                e.classList.remove("active-tab");
            });
            var curClass = this.className;   
            var currentProj = document.querySelector('.' + curClass + '-content');
            this.classList.add('active-tab');
            currentProj.classList.remove('hidden');
        });
    }
}


    function calculateYears() { // birthday is a date
        var started= new Date(1998, 1, 10);
       var ageDifMs = Date.now() - started.getTime();
       var ageDate = new Date(ageDifMs); // miliseconds from epoch
       return Math.abs(ageDate.getUTCFullYear() - 1970);
     }