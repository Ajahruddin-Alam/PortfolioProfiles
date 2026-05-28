/* =========================================
MENU TOGGLE
========================================= */

const toggle =
document.querySelector(".menu-toggle");

const menu =
document.querySelector(".menu");

if(toggle && menu){

    toggle.addEventListener("click",()=>{

        menu.classList.toggle("active");

    });

}

/* =========================================
TYPED TEXT
========================================= */

var typed =
new Typed(".auto", {

    strings:[

        "Full Stack Developer",

        "Automation Engineer",

        "Dashboard Developer",

        "System Administrator"

    ],

    typeSpeed:120,

    backSpeed:120,

    loop:true

});

var typed2 =
new Typed(".auto1", {

    strings:[

        "Full Stack Developer",

        "Automation Engineer",

        "System Administrator"

    ],

    typeSpeed:120,

    backSpeed:120,

    loop:true

});

/* =========================================
RIPPLE EFFECT
========================================= */

if(window.innerWidth > 768){

    jQuery(document).ready(function () {

        $('header').ripples({

            dropRadius:20,

            perturbance:0.03,

        });

    });

}

/* =========================================
SKILL ANIMATION
========================================= */

document.addEventListener("DOMContentLoaded",()=>{

    const skillBars =
    document.querySelectorAll(".skill-progress");

    let animated = false;

    const observer =
    new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting && !animated){

                animated = true;

                skillBars.forEach((bar,index)=>{

                    const width =
                    bar.getAttribute("data-width");

                    setTimeout(()=>{

                        bar.style.width = width;

                        const percentText =
                        bar.parentElement.previousElementSibling
                        .querySelector(".percent");

                        let count = 0;

                        const target =
                        parseInt(width);

                        const counter =
                        setInterval(()=>{

                            if(count >= target){

                                clearInterval(counter);

                            }else{

                                count++;

                                percentText.innerHTML =
                                count + "%";

                            }

                        },15);

                    },index * 150);

                });

                observer.disconnect();

            }

        });

    },{
        threshold:0.4
    });

    const skillsSection =
    document.querySelector(".progress-div");

    if(skillsSection){

        observer.observe(skillsSection);

    }

});

/* =========================================
SERVICES AUTO LOOP
========================================= */

const track =
document.querySelector(".services-track");

if(track){

    track.innerHTML += track.innerHTML;

}

/* =========================================
REVEAL ANIMATION
========================================= */

function revealOnScroll(){

    const reveals =
    document.querySelectorAll(

        ".project-card,.services-box,.skill-card"

    );

    reveals.forEach((element)=>{

        const windowHeight =
        window.innerHeight;

        const revealTop =
        element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            element.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

/* =========================================
EXPLORE MORE
========================================= */

function toggleSkills(){

    const content =
    document.getElementById("fullContent");

    const btn =
    document.getElementById("readMoreBtn");

    content.classList.toggle("show-content");

    if(content.classList.contains("show-content")){

        btn.innerHTML = "Show Less";

    }else{

        btn.innerHTML = "Explore More";

    }

}

/* =========================================
HIRE BUTTON
========================================= */

function openModal(){

    alert(

        "Thank you for your interest! Please contact me through WhatsApp or Contact Form."

    );

}

/* =========================================
LOADER
========================================= */

window.onload = function(){

    const loader =
    document.getElementById("loader");

    if(loader){

        loader.style.display = "none";

    }

};