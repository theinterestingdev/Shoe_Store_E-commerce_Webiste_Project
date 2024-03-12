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
    let email = document.getElementById("email").value;
    let psw = document.getElementById("psw").value;
    let output = document.getElementById("output_message");
    user_records = JSON.parse(localStorage.getItem("users")) || [];

    if(user_records.find((chk)=>{return chk.email ===email || chk.username===username}))
    {
        output.style.color = "red"; 
        output.innerHTML = "User Already Exists";
        
        setTimeout(()=>
        {
            output.innerHTML = "";    
        },2000);
        
        
    }
    else
    {
        user_records.push({
            "username":username,
            "email":email,
            "psw":psw
        })
        localStorage.setItem("users",JSON.stringify(user_records));
        output.style.color = "greenyellow"; 
        output.innerHTML = "Signup Successful Redirecting...";
        setTimeout(()=>
        {
            window.location.href="login.html";
        },3000)
    }
}

