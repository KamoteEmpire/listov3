$(document).ready(function(){
	$('#txtSelectRegion').change(function(){
		var selectedRegion = $('#txtSelectRegion').val();
		$.ajax({
          type:'GET',
          url: 'view_abc_status_json.php',
          dataType:'JSON',
          data:{
			  selectedRegions : selectedRegion 
          },
          success: function(data){
					$.each(data, function(key, value) {
						$("#displayCPAAlert").append('<p>'+value['lgu']+'</p>'+'<p>'+value['alertlevel']+'</p>'+'<hr/>');					
					});		
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
          url: 'http://iligtas.ph/listo/add_cpaalert.php',
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