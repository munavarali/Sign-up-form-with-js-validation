

function validatename(x,y)
{
	var uname_len = document.signup.name.value.length;
	if (uname_len == 0 || uname_len >= y || uname_len < x) {
		document.getElementById("user_name").style.color ="red";
		var image = new Image();
		image.src = "file:///Users/munavar/Desktop/My%20Task/red.png";
		image.height = "18";
		image.width = "18";
		image.id = "wrongid";
		document.getElementById("user_name").innerHTML="Please enter the name between 5 to 12 character";
		if(!document.getElementById("wrongid"))
		{
			document.getElementById("user_name").before(image);	
		}	
		
	}else{
		var r = new Image();
		r.src = "file:///Users/munavar/Desktop/My%20Task/green.png";
		r.height = "18";
		r.width = "18";
		r.id = "correctid";
		if(!document.getElementById("correctid"))
		{
			document.getElementById("user_name").before(r);	
		}
		document.getElementById("wrongid").remove();
		
		document.getElementById("user_name").style.color =" #00cc00";
		document.getElementById("user_name").innerHTML="Looks Great";	
		
	}
}

//This function will validate useremail
function validateemail(){
	var uemail = document.signup.email;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(uemail.value) == false) {
    	document.getElementById("user_email").style.color ="red";
		var image = new Image();
		image.src = "file:///Users/munavar/Desktop/My%20Task/red.png";
		image.height = "18";
		image.width = "18";
		image.id = "wrongid_email";
		if(!document.getElementById("wrongid_email"))
		{
			document.getElementById("user_email").before(image);	
		}
    document.getElementById("user_email").innerHTML="Please enter a valid email";
    
	}else{
		var r = new Image();
		r.src = "file:///Users/munavar/Desktop/My%20Task/green.png";
		r.height = "18";
		r.width = "18";
		r.id = "correctid_email";
		if(!document.getElementById("correctid_email"))
		{
			document.getElementById("user_email").before(r);	
		}
		document.getElementById("wrongid_email").remove();
		document.getElementById("user_email").style.color ="#00cc00";
		document.getElementById("user_email").innerHTML="Looks Great";	
		
 	}
}

//This function will validate user password
function validatepwd(){
	// alert("TestingThis is calling");
	var upwd = document.signup.pwd.value.length;
	if (upwd == 0 ) {
		var image = new Image();
		image.src = "file:///Users/munavar/Desktop/My%20Task/red.png";
		image.height = "18";
		image.width = "18";
		image.id = "wrongid_pwd";
		if(!document.getElementById("wrongid_pwd"))
		{
			document.getElementById("user_pwd").before(image);	
		}
		document.getElementById("user_pwd").style.color ="red";
		document.getElementById("user_pwd").innerHTML="Please enter the password";
	
	}else{
		var r = new Image();
		r.src = "file:///Users/munavar/Desktop/My%20Task/green.png";
		r.height = "18";
		r.width = "18";
		r.id = "correctid_pwd";
		if(!document.getElementById("correctid_pwd"))
		{
			document.getElementById("user_pwd").before(r);	
		}
		document.getElementById("wrongid_pwd").remove();
		document.getElementById("user_pwd").style.color =" #00cc00";
		document.getElementById("user_pwd").innerHTML="Looks Great";	
	}

}

//This function validate the confirm password
function validatepwd1(){
	 // alert("TestingThis is calling");
	 var upwd = document.signup.confirmpwd.value.length;
	if (upwd == 0 ) {
		var image = new Image();
		image.src = "file:///Users/munavar/Desktop/My%20Task/red.png";
		image.height = "18";
		image.width = "18";
		image.id = "wrongid_cpwd";
		document.getElementById("usercp_pwd").innerHTML="Please enter the password";
		if(!document.getElementById("wrongid_cpwd"))
		{
			document.getElementById("usercp_pwd").before(image);	
		}
	}
	else if(document.getElementById('pw').value === document.getElementById('cpw').value) {
		var r = new Image();
		r.src = "file:///Users/munavar/Desktop/My%20Task/green.png";
		r.height = "18";
		r.width = "18";
		r.id = "correctid_cpwd";
		if(!document.getElementById("correctid_cpwd"))
		{
			document.getElementById("usercp_pwd").before(r);	
		}
		document.getElementById("wrongid_cpwd").remove();
		document.getElementById("usercp_pwd").style.color ="#00cc00";
        document.getElementById('usercp_pwd').innerHTML = "Password matched";
     } else {
     	var image = new Image();
		image.src = "file:///Users/munavar/Desktop/My%20Task/red.png";
		image.height = "18";
		image.width = "18";
		image.id = "wrongid_cpwd";
		if(!document.getElementById("wrongid_cpwd"))
		{
			document.getElementById("usercp_pwd").before(image);	
		}
		document.getElementById("correctid_cpwd").remove();
     	document.getElementById("usercp_pwd").style.color ="red";
         document.getElementById('usercp_pwd').innerHTML = "Incorrect password";
     }
	
}

function mysubmit(){
	if (document.signup.name.value.length==0) {

		alert("Please enter the name");
		document.signup.name.focus();
	}else if (document.signup.email.value.length==0) {
		alert("Please enter the email");
		document.signup.emial.focus();
	}if (document.signup.pwd.value.length==0) {
		alert("Please enter the Password");
		document.signup.pwd.focus();
	}if (document.signup.confirmpwd.value.length==0) {
		alert("Please enter the confirm Password");
		document.signup.confirmpwd.focus();
	}else{
    window.location.assign("file:///Users/munavar/Desktop/My%20Task/result.html")
	}

}
