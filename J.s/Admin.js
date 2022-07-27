let email = document.getElementById("email")
let password = document.getElementById("password")
let message2 = document.getElementById("message2")


 function SignIn ()  {


    if(email.value === ""){
        message2.innerHTML ="Type your Email"
        message2.style.color="red";
    }
    else if(password.value === ""){
        message2.innerHTML ="Type your Password"
        message2.style.color="red";
    }
    else{
       

       let userObj = {
        email: email.value,
        password: password.value
       }
       if(email.value === "dharamdan@gmail.com"){


        firebase.auth().signInWithEmailAndPassword(userObj.email,userObj.password)
        .then((userCredential) => {
            var user = userCredential.user;
           message2.innerHTML ="Succesfully"
           message2.style.color ="green"
          
           setTimeout(() => {
               message2.style.display = "none"
               window.location.href = "./Pages/HomePage2.html"
         }, 2000);

          
         
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            message2.innerHTML = errorMessage
            message2.style.color="red";
          });
        
    }
    }
}