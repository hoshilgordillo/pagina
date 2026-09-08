// ===============================
// MENU MOBILE
// ===============================


const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector(".nav-menu");



menuToggle.addEventListener("click",()=>{


    navMenu.classList.toggle("active");


});




// cerrar menu al seleccionar opcion

const links = document.querySelectorAll(".nav-menu a");


links.forEach(link=>{


    link.addEventListener("click",()=>{


        navMenu.classList.remove("active");


    });


});
// ===============================
// AOS ANIMATIONS
// ===============================


AOS.init({

    duration:1000,

    once:true,

});
// ===============================
// NAVBAR SCROLL EFFECT
// ===============================


const header = document.querySelector(".header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){


        header.classList.add("scroll");


    }else{


        header.classList.remove("scroll");


    }


});