function validate()
{
	var username, password;
	username=document.login.username.value;
	password=document.login.password.value;


	
	if(username=='' && password=='')
	{
		document.getElementById('errormsg').innerHTML="All fields are Required";
		return false;
	}
	else if(username=='')
	{
		document.getElementById('errormsg').innerHTML="Username is Required";
		return false;

	}

	else if(password=='')
	{
		document.getElementById('errormsg').innerHTML="Password is Required";
		return false;
	}

	else if(username.length<6 || password.length<6)
	{
		document.getElementById('errormsg').innerHTML="Username or Password length should be min 6";
		return false;
	}

	else if(username=='dipesh' && password=='shrestha')
	{
        document.getElementById('errormsg').innerHTML="Valid username and password";
        window.location="home.html";
		return false;
	}
	else
	{
		document.getElementById('errormsg').innerHTML="Invalid username and password";
		return false;

	}
	
	return true;

	
}