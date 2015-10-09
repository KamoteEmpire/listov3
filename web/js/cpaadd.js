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
					
					$("#displayCPAAlert").html('<table class="table table-striped "/>');
						$("#displayCPAAlert table").append('<tr>'+'<th>'+'Alpha'+'</th>'+'<th>'+'Bravo'+'</th>'+'<th>'+'Charlie'+'</th>'+'</tr>');
					
					$.each(data, function(key, value) {
						if(value['alertlevel']=='alpha'){
							$("#displayCPAAlert table").append('<tr>'+'<td>'+value['lgu']+'</td>');
						}
						else if(value['alertlevel']=='bravo'){
							$("#displayCPAAlert table").append('<td>'+value['lgu']+'</td>');
						}
						else if(value['alertlevel']=='charlie'){
							$("#displayCPAAlert table").append('<td>'+value['lgu']+'</td>'+'</tr>');
						}
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