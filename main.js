let formControl = document.querySelectorAll(".form-control");
let Submit = document.querySelector(".submit-btn");
let Error = document.querySelectorAll(".error");
Submit.addEventListener("click",(e)=>{
      e.preventDefault();
     formControl.forEach((input,index) =>{
        Validation(input,index);
    })
})

function Validation(input,index){
//  check input filed emity or not
        if(input.value.trim() != ""){
            Error[index].textContent = "";
            //  email or a enter is a valid or not 
            let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
            if(emailPattern.test(input.value.toLowerCase())){
                document.querySelector("#email-error").textContent = "";
            }
            else{
                document.querySelector("#email-error").innerHTML =  `<ul>
                  <li>Email Lowercase</li>
                  <li>Email Start A - Z</li>
                  <li>Email formate your@xyz.com</Li>
                <ul>`;
            }
        }
        else{
           Error[index].textContent = "This field is required.";
        }
}