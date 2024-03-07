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
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var psw = document.getElementById("psw").value;
    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) || [];

    if(user_records.some((v)=>{return v.email ===email}))
    {
        alert("Duplicate Data");
    }
    else
    {
        user_records.push({
            "username":username,
            "email":email,
            "psw":psw
        })
    }


   

    localStorage.setItem("users",JSON.stringify(user_records));
}

