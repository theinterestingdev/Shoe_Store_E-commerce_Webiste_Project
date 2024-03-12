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

function SaveData()
{
    let username = document.getElementById("username").value;
    let psw = document.getElementById("psw").value;
    let output = document.getElementById("output_message");
    user_records = JSON.parse(localStorage.getItem("users")) || [];


    const check = user_records.find((chk)=>{return chk.username === username && chk.psw === psw});

    if(check)
    {
        output.style.color = "greenyellow";
        output.innerHTML = "Login Successful Redirecting...";
        localStorage.setItem("username",check.username); 
        
        setTimeout(()=>{
            window.location.href="index.html";
        },2000);

    }
    else
    {
        output.style.color = "red";
        output.innerHTML = "Invalid Login Details";

        setTimeout(()=>{
            output.innerHTML = "";
        },2000);
    }

   

    localStorage.setItem("users",JSON.stringify(user_records));
}




