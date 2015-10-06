$(document).ready(function(){
	$('#txtSelectRegion').change(function(){
		var selectedRegion = $('#txtSelectRegion').val();
		$.ajax({
          type:'GET',
          url: 'view_abc_status.php',
          dataType:'html',
          data:{
			  selectedRegions : selectedRegion 
          },
          success: function(data){
			$('#displayCPAAlert').html(data);
          }
        }); 
	
		
		
		
	});
	
	
	
	
	$('#btnSubmitReport').click(function(){
		var alertLevel = $('#txtAlertLevel').val();
		var region = $('#txtRegion').val();
		var province = $('#txtProvince').val();
		var txtLGUS =[];
        jQuery.each($('input:checkbox:checked'), function(index, item){
          txtLGUS.push(item.value);
        });
		
		alert(alertLevel);
		alert(region);
		alert(province);
		alert(txtLGUS);
		
		$.ajax({
          type:'GET',
          url: 'add_cpaalert.php',
          dataType:'html',
          data:{
            txtAlertLevel : alertLevel,
			txtRegion : region,
			txtProvince : province,
            myLGUS : txtLGUS,
            length : txtLGUS.length
          },
          success: function(data){
           alert(data);
          }
        }); 
		
	});

	



});