$(document).ready(function(){
	$('#btnSubmitReport').click(function(){
		var txtLGUS =[];
        jQuery.each($('input:checkbox:checked'), function(index, item){
          txtLGUS.push(item.value);
        });
		
		$('#btnSubmitReport').hide();
		$('#btnSubmitting').fadeIn();
		var frmSubmitReport = $("#frmSubmitReport");
		$.ajax({
					url: 'add_cpaalert.php',						
					type: 'POST',
					
					dataType:'html',
						data:{
						studidnum : studid,
						cities : txtLGUS,
						length : txtLGUS.length
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