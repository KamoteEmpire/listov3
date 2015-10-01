$(document).ready(function(){
	$('#btnSubmitInitialDisasterIncident').click(function(){
			var preMonitorCity = localStorage.getItem('datausername');
					$('#txt_initd_city').val(preMonitorCity);
			var frmInitialDisasterIncident= $("#frmInitialDisasterIncident");
			$.mobile.loading("show");
				$.ajax({
					url: 'add_initialdisaster.php',						
					type: 'POST',
					data: frmInitialDisasterIncident.serialize(),
					success: function (data) {
						$.mobile.loading("hide");
						$("#popuptextReportDataSubmit").html("<strong>"+data+"<strong>");	
						$( "#popupAfterReportDataSubmit" ).popup();
						$( "#popupAfterReportDataSubmit" ).popup( "open", { 
						positionTo: "window",
						transition: "slidedown" });
						$.mobile.loading("hide");
					},
					error: function(data){
						$.mobile.loading("hide");
						alert(data);
					}
				});	
	});
	
	$.getJSON("display_initialdisaster_progress.php", function(data)
         		{
			 $.each(data, function(key, value) {
			$("#divrptInitialDisasterProgress").append('<h1>'+value['name']+'</h1>'+'<h1>'+value['prelim']+'</h1>'+'<hr/>');					
			});		
	});
});