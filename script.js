
var myform=document.getElementById("myForm")

myform.addEventListener("submit",function(event){
    event.preventDefault()

    const username = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    //validate username
    if(username==='')
    {
        alert("name is required")
        return
    }

    //validate email address
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(!emailRegex.test(email))
    {
     alert("enter a valid email")
     return
    }
    //validate password
    if(password.length<6)
    {
        alert("password must be 6 characters long")
        return
    }
    alert("form submitted")

})




 
