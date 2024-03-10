function login(){
    document.addEventListener("DOMContentLoaded", function() {
        const currentUser = localStorage.getItem("username");
    
        if (currentUser)
        {
            document.querySelectorAll(".login").forEach(button => {
                button.style.display = 'none';
            });
    
            document.querySelectorAll(".profileName").forEach(profileNameDiv =>{
                profileNameDiv.textContent = `${currentUser}`;
                profileNameDiv.style.display = 'flex';
            });

            document.querySelector("#logout_collapse h6").style.display="block";
        }
    });
    
}

function profileLogout() {
    const logout = document.querySelector("#logout_main h6");

    if (window.getComputedStyle(logout).display === "none") {
        logout.style.display = "block";
    } else {
        logout.style.display = "none";
    }
}



function logoutCurr()
{
    document.querySelectorAll(".login").forEach(button => {
        button.style.display = 'flex';
    });
    document.querySelectorAll(".profileName").forEach(profileNameDiv =>{
        profileNameDiv.style.display = 'none';
    });
    localStorage.removeItem("username");
    document.querySelector("#logout_collapse h6").style.display="none";
    window.location.href="index.html";
}



function hamburgerMenu()
{
    var menu = document.querySelector("#nav-part2");

    if(menu.style.display=== "flex")
    {
        menu.style.display="none";
    }
    else
    {
        menu.style.display="flex";
        gsap.from("#nav-part2",{
            y:-100,
            duration:0.7,
            
        });
    }
   
}

function redirect(){
    window.location.href = "signup.html";
}


function LocomotiveScrollTrigger() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".smooth-scroll"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".smooth-scroll", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }

        // follwoing line is not required to work pinning on touch screen

        /* pinType: document.querySelector(".smooth-scroll").style.transform
          ? "transform"
          : "fixed"*/
    });
}

function LocomotiveAnimation()
{
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
}


function cart()
{
    let iconCart = document.querySelectorAll(".ri-shopping-cart-2-line");
    let closeBtn = document.querySelector(".cartTab .close");
    let body = document.querySelector("body");

    iconCart.forEach(iconCart=>{
        iconCart.addEventListener("click",()=>{
            body.classList.toggle("activeTabCart");
        });
    });
    
    closeBtn.addEventListener("click",()=>{
        body.classList.toggle("activeTabCart");
    })
}


function getData()
{
    

}




// Function Calls


login();
LocomotiveAnimation();
cart();
getData();  








