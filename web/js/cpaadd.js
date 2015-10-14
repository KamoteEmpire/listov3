$(document).ready(function(){
	$('#txtSelectRegion').change(function(){
		var selectedRegion = $('#txtSelectRegion').val();
		$.ajax({
          type:'GET',
          url: 'view_abc_status_a.php',
          dataType:'html',
          data:{
			  selectedRegions : selectedRegion 
          },
          success: function(data){
					$('#displayCPAAlertAlpha').fadeIn();
					$('#displayCPAAlertAlpha').html(data);
				}
			
        });
		
		$.ajax({
          type:'GET',
          url: 'view_abc_status_b.php',
          dataType:'html',
          data:{
			  selectedRegions : selectedRegion 
          },
          success: function(data){
					$('#displayCPAAlertBravo').html(data);
				}
			
        });
		
		$.ajax({
          type:'GET',
          url: 'view_abc_status_c.php',
          dataType:'html',
          data:{
			  selectedRegions : selectedRegion 
          },
          success: function(data){
					$('#displayCPAAlertCharlie').html(data);
				}
			
        });
		
		
		
		
		
		
	});
	
	
	
	
	$('#btnSubmitReport').click(function(){
		var typhoonStatus = $('#txtTyphoonStatus').val();
		var alertLevel = $('#txtAlertLevel').val();
		var region = $('#txtRegion').val();
		var province = $('#txtProvince').val();
		var txtLGUS =[];
        jQuery.each($('input:checkbox:checked'), function(index, item){
          txtLGUS.push(item.value);
        });
		
		alert(typhoonStatus);
		alert(alertLevel);
		alert(region);
		alert(province);
		alert(txtLGUS);
		
		$.ajax({
          type:'GET',
          url: 'add_cpaalert.php',
          dataType:'html',
          data:{
			txtTyphoonStatus: typhoonStatus,
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