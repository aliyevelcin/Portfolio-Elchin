/*!
=========================================================
* Creative Studio Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/ 

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
}); 



const body = document.querySelector("body"),
  toggle = document.querySelector(".toggle");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
    body.classList.add("dark");
    toggle.classList.add("active");
  }

  toggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    if(!body.classList.contains("dark")) {
        return localStorage.setItem("mode","light");
    }
    localStorage.setItem("mode", "dark");
});


toggle.addEventListener("click", () => toggle.classList.toggle("active"));
