// loing 
var login_attempts=3;
function check_form() {
    var name=document.getElementById("user_email").value;
    var pass=document.getElementById("user_pass").value;
    if(name=="gic@gmail.com" && pass=="Gic123") {
        alert("SuccessFully Logged In");
        window.location.href = "home.html"; // Redirecting to other page.
        document.getElementById("name").value="";
        document.getElementBy("pass").value="";
    } else {
        if(login_attempts==0) {
            alert("No Login Attempts Available");
        }else {
            login_attempts=login_attempts-1;
            alert("Login Failed Now Only "+login_attempts+" Login Attempts Available");
            if(login_attempts==0) {
                document.getElementById("name").disabled=true;
                document.getElementById("pass").disabled=true;
                document.getElementById("login").disabled=true;
            }
        }
    }
 return false;
}

function logout_page() {
    window.location.href= "Ex2.html";
}


//Cookie 
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

setCookie("user_email","gic@gmail.com",5); //set "user_email" cookie, expires in 30 days
var userEmail=getCookie("user_email");