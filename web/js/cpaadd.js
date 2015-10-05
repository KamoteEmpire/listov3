$(document).ready(function(){
	$('#btnSubmitReport').click(function(){
		var cities =[];
        jQuery.each($('input:checkbox:checked'), function(index, item){
          cities.push(item.value);
        });
		
		$('#btnSubmitReport').hide();
		$('#btnSubmitting').fadeIn();
		var frmSubmitReport = $("#frmSubmitReport");
		$.ajax({
					url: 'http://iligtas.ph/chews/add_report.php',						
					type: 'POST',
					
					dataType:'html',
						data:{
						studidnum : studid,
						cities : cities,
						length : cities.length
					},
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