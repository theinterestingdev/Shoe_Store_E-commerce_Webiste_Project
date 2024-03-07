function loadingAnimation(){
    var tl = gsap.timeline()

tl.from(".line h1,.line h3", {
    y: 350,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
})


tl.from(".line h5,h6",{
    opacity: 0,
    onStart: function () {
        var h5timer = document.querySelector("#line-part1 h5")
        var grow = 0;

        setInterval(function () {

            if (grow < 100) {

                h5timer.innerHTML = grow++;
            }
            else {
                
                h5timer.innerHTML = grow;
            }
        }, 30)
    }
})


tl.to(".line h2",{
    animationName:"anime",
    opacity:1,

})

tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 4,
});

tl.from("#page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    ease:Power4,
})
tl.to("#loader", {
    display:"none",
});

}



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

function customTextAnimatiion()
{
    
    var h1TextAll = document.querySelectorAll("#page2 h1");
    
    
    h1TextAll.forEach(function(elem){
        var clutter = "";
        var h1Text = elem.textContent;
        var splittedText = h1Text.split("");
        splittedText.forEach(function(ele){
            
            clutter += `<span>${ele}</span>`;
        });
        elem.innerHTML = clutter;
    })
    gsap.to("#page2 h1 span",{
        color:"#E3E3C4",
        stagger:0.5,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"top 60%",
            end:"top -10%",
            scrub:5,

        }  
    })
}

function horizontalScroll()
{
    gsap.to("#page3 h1",{
        transform:"translateX(-100%)",
        scrollTrigger:{
            trigger:"#page3-new",
            scroller:"#main",
            scrub:2,

            top:"top 0",
            end:"top -100%",
            pin:true,
        }  
    })
} 

function scrollTriggerImg()
{
    
    
    gsap.from("#page4 img",{
        x:100,
        rotate:45,
        opacity:0,
        duration:0.5,
        
        scrollTrigger:{
            trigger:"#page4",
            scroller:"#main",
            top:"top 0",
            end:"top -120%",
            scrub:3,
            pin:true,
        },
    })
    



    // tl.from("#main h1",{
        
    
    // })
    
    // tl.from("#main img",{
    //     x:100,
    //     rotate:45,
    //     opacity:0,
    //     duration:0.3,
    //     stagger:0.4,
    // })
    
    
    // tl.from("#main h5",{
    
    //     x:-100,
    //     opacity:0,
    //     duration:1,
    // })
    // tl.from("#main h6",{
    
    //     x:100,
    //     opacity:0,
    //     duration:0.5,
    // })
    
    
    // tl.from("#main h4",{
    
    //     x:-100,
    //     opacity:0,
    //     duration:1,
    // })
    
}




// Function Calls


loadingAnimation();
login();
LocomotiveAnimation();
horizontalScroll()
scrollTriggerImg();
customTextAnimatiion();



