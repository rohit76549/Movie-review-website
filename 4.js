function openForm() {
  document.getElementById("popupForm").style.display = "block";
}
function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}
function checkPassword(str)
  {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[&$#@]).{6,}$/;
    return re.test(str);
  }
  function checkemail(str)
    {
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      return reg.test(str);
    }
    function checkphno(str)
      {
        var regx = /^[6-9]\d{9}$/ ;
        return regx.test(str);
      }
function validateForm(myForm)
{

  if(myForm.name.value == "") {
    alert("Error: Username cannot be blank!");
    myForm.name.focus();
    return false;
  }
  if(myForm.psw.value == "") {
    alert("Error: password cannot be blank!");
    myForm.psw.focus();
    return false;
  }
  if(myForm.cpsw.value == "") {
    alert("Error: Confirm password cannot be blank!");
    myForm.cpsw.focus();
    return false;
  }
  if(myForm.psw.value != myForm.cpsw.value) {
    alert("Error: password does not match");
    myForm.cpsw.focus();
    return false;
  }
  if(myForm.psw.value != "" && myForm.psw.value == myForm.cpsw.value)
  {
    if(!checkPassword(myForm.psw.value))
     {
    alert("The password you have entered is not valid!");
    myForm.psw.focus();
    return false;
    }

 }

 if(!checkemail(myForm.email.value))
  {
 alert("The email ID you have entered is not valid!");
 myForm.email.focus();
 return false;
 }
 if(!checkphno(myForm.phno.value))
  {
 alert("The phno you have entered is not valid!");
 myForm.phno.focus();
 return false;
}
}

function openForm2() {
document.getElementById("popupForm2").style.display = "block";
}
function closeForm2() {
document.getElementById("popupForm2").style.display = "none";
}
function validateForm2(myForm2)
{

if(myForm2.psw.value == "") {
  alert("Error: password cannot be blank!");
  myForm2.psw.focus();
  return false;
}

if(myForm2.psw.value != "" )
{
  if(!checkPassword(myForm2.psw.value))
   {
  alert("The password you have entered is not valid!");
  myForm2.psw.focus();
  return false;
  }

}

if(!checkemail(myForm2.email.value))
{
alert("The email ID you have entered is not valid!");
myForm2.email.focus();
return false;
}
}
$('.movie-slider').slick({
dots: true,
infinite: false,
speed: 300,
slidesToShow: 2,
slidesToScroll: 2,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 2,
slidesToScroll: 2,
infinite: true,
dots: true
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 2
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
]
});
