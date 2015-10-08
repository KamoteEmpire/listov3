<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel='stylesheet prefetch' href="css/bootstrap.min.css">
<style class="cp-pen-styles">
h1{
	display:none;
	
}
body {
 background: #eee !important;
}
.wrapper {
  margin-top: 80px;
  margin-bottom: 80px;
}

.form-signin {
  max-width: 380px;
  padding: 15px 35px 45px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 30px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  font-size: 16px;
  height: auto;
  padding: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="text"] {
  margin-bottom: -1px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 20px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
  
  <script src="../js/jquery.min.js"></script> 
  <script src="../js/jquery.mobile-1.4.5.min.js"></script>
  <script src="../js/jquery-ui.min.js"></script>
  <script>
	$(document).ready(function(){
			$('#btnLogin').click(function(){
			
			if (navigator.onLine) {
				console.log("user is online");

				var formLogin = $("#frmLogin");
				$.getJSON("http://iligtas.ph/listo/mobile/login.php?callback=?", formLogin.serialize(),function(data)
				{
					if (data.verified == "yes")
					{
					localStorage.setItem("datausername", data.username);
					localStorage.setItem("datapassword", data.password);
					localStorage.setItem("dataregion", data.region);
					localStorage.setItem("dataprovince", data.province);
					localStorage.setItem("datacity", data.city);
					localStorage.setItem("localPreMonitorCounter", 0);
					localStorage.setItem("localPreMonitorPercentage", 0);
					localStorage.setItem("preMonitor-a-1", 0);
					localStorage.setItem("preMonitor-a-2", 0);
					
					
					$("#popuptextWelcome").html("<strong>Welcome to Listo "+data.city+"</strong>");	
					$( "#popupAfterWelcome" ).popup();
					$( "#popupAfterWelcome" ).popup( "open", { 
					positionTo: "window",
					transition: "slidedown" });
					location.href="home.html";
					}
					else{
					$("#popuptext").html("<strong>Please check your username or password.</strong>");	
					$( "#popupAfter" ).popup();
					$( "#popupAfter" ).popup( "open", { 
					positionTo: "window",
					transition: "slidedown" });
					$( "#txtUsername" ).effect( "shake" );
					$( "#txtPassword" ).effect( "shake" );
					}
				}).fail(function(data){
					$("#popuptext").html("<strong>Error, Please contact administrator</strong>");	
					$( "#popupAfter" ).popup();
					$( "#popupAfter" ).popup( "open", { 
					positionTo: "window",
					transition: "pop" });
				});
				
		}
		else{
					$("#popuptext").html("<strong>Error, Please check your connection</strong>");	
					$( "#popupAfter" ).popup();
					$( "#popupAfter" ).popup( "open", { 
					positionTo: "window",
					transition: "pop" });
		}
			});
	});
  </script>

</head>
<body>
  <div class="wrapper">
			<img src="../images/listo-icon.png" style="width:15%;margin-left:auto;margin-right:auto;display:block">
			<form id="frmLogin" class="form-signin">
			<h3 class="form-signin-heading">LOGIN</h3>
			<input class="form-control"  id="txtUsername" name="txtUsername" type="text" placeholder="Enter Username" />
			<input class="form-control"  id="txtPassword" name="txtPassword" type="password" placeholder="Enter Password" />
			<button  class="btn btn-lg btn-primary btn-block" class="ui-btn" id="btnLogin">SUBMIT</button>
			<a href="#" ><p style="text-align: center; ">Forgot Password?</p></a>			
			</form>
</div>
</body>
</html>
