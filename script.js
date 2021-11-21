document.getElementById("submit").onclick = function passwordfunc()
{
  var myInput = document.getElementById("psw").value;
  var password = "password";
  if (myInput == password)
  {
    location.replace("dflkgjdfjgmjkdfngmldfknmhlkdfmngolsfjoamflsemegolsmgksdmgmdfkgmnsdjkvkfbnsdjgklndjkgndrkgnkds")
  }
  else 
  {
    random = Math.floor(Math.random() * 2);
    if(random == 1) {window.open("https://www.youtube.com/watch?v=9K2Y-rfUy_4");}
    else if(random == 0) {document.getElementById("demo").innerHTML = "טעות"}
  }
}