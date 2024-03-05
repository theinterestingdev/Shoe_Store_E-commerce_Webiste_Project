function home()
{
    window.location.href = "index.html";
}

var tl = gsap.timeline();

tl.from("#form",{
    opacity:0,
    x:100,
    duration:0.5,
    delay:0.2,
})


tl.from("#form h2",{
    opacity:0,
    x:100,
    duration:0.5,
    delay:0.2,
})



