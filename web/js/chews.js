$(document).ready(function(){
	$('#btnSubmitReport').click(function(){
		$('#btnSubmitReport').hide();
		$('#btnSubmitting').fadeIn();
		var frmSubmitReport = $("#frmSubmitReport");
		$.ajax({
					url: 'http://iligtas.ph/chews/add_report.php',						
					type: 'POST',
					
					data: frmSubmitReport.serialize(),
					success: function (data) {
						$('#btnSubmitting').hide();
						$('#btnSubmitReport').fadeIn();
					},
					error: function(data){
						$.mobile.loading("hide");
						alert(data);
					}
		});	
	});





});