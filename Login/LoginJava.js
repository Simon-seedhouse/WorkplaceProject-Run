
document.getElementById("WindowsButton").onclick = login();
document.getElementById("LoginButton").onclick = login();
function login()
{
	autoLogIn("user13@test.com", "password");
}


function autoLogIn(un, pw) {
	var form = document.createElement("form");
	var element1 = document.createElement("input");
	var element2 = document.createElement("input");

	form.method = "POST";
	form.action = "http://axfonath.000webhostapp.com/action_loginwebpage.php";

	element1.value = un;
	element1.name = "email";
	form.appendChild(element1);

	element2.value = pw;
	element2.name = "password";
	form.appendChild(element2);

	document.body.appendChild(form);

	form.submit();
}