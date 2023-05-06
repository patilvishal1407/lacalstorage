console.log("hello")

function submitForm(event){
    event.preventDefault(); 

    var firstName = document.getElementById("enterFName").value ;
    var lastName = document.getElementById("enterLName").value ;
    var mobile = document.getElementById("enterMnum").value ;
    var email = document.getElementById("enterMail").value ;

    let formData = {
        firstName: firstName,
        lastName: lastName,
        mobile: mobile,
        email: email
    };    
    
    const dataArray = JSON.parse(localStorage.getItem('signUpData')) || [];
    dataArray.push(formData);
    localStorage.setItem('signUpData', JSON.stringify(dataArray));

    console.log("current entered User Data")
    console.log(formData) 

    document.getElementById("newSignUp").innerHTML="wel Come "+ formData.firstName +" "+ formData.lastName;
  
    console.log("Data of all User")
    console.log(dataArray);
    // document.getElementById("firstNameid").innerHTML=firstName;
    // document.getElementById("lastNameid").innerHTML=lastName;
    // document.getElementById("mobileid").innerHTML =mobile;
    // document.getElementById("mailid").innerHTML =email;

    // localStorage.setItem('enterFName', firstName);
    // localStorage.setItem('enterLName', lastName);
    // localStorage.setItem('enterMnum', mobile);
    // localStorage.setItem('email',email);
}