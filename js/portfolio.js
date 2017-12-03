function ready(a){"loading"!=document.readyState?a():document.addEventListener("DOMContentLoaded",a)}

ready(function(){
    var about = document.querySelector('.one');
    var projects = document.querySelector('.two');
    var skill = document.querySelector('.three');
    var contact = document.querySelector('.four');

    var nav = document.querySelectorAll('nav ul li a');
    
    for (var i = nav.length - 1; i >= 0; i--) {
        console.log(nav[i].className);
        // nav[i].addEventListener("click",function(){
        //     console.log(nav[i]);
        //    currentNav = this.className;
        //    console.log(className);
        // });
    }

});


