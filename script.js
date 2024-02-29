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


function ShopNow(){
    gsap.from("#text-content button",{
        opacity:0,
        y:200,
        delay:3, 
    })

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

function gsapAnimation()
{
    
    var tl = gsap.timeline();
    tl.from("#nav h2",{
        y:-20,
        opacity:0,
        delay:0,
        duration:1,
        stagger:0.2,
    })
    
   

  
    
    
    
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
    
    gsap.from("#page4 h1",{
        x:-300,
        opacity:0,

        scrollTrigger:{
            trigger:"#page4 h1",
            scroller:"#main",
            start:"top 0",
            end:"top 100%",
            scrub:3,
            
        },
    })
    
    gsap.from("#page4 img",{
        x:100,
        rotate:45,
        opacity:0,
        duration:0.3,
        stagger:0.4,
        
        scrollTrigger:{
            trigger:"#page4",
            scroller:"#main",
            start:"top 0%",
            end:"top -110%",
            scrub:2,
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



LocomotiveAnimation();
ShopNow();
horizontalScroll()
scrollTriggerImg();
customTextAnimatiion();



