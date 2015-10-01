

var preMonitorCompletion=0;
var preMonitorCounter=parseInt(localStorage.getItem("localPreMonitorCounter"));
var preMonitorTotal=35;
var preMonitorPercentage=parseInt(localStorage.getItem("localPreMonitorPercentage"));


$(document).ready(function(){
	
			$("#txtPreMonitorCounter").text(preMonitorCounter);
			$("#txtPreMonitorTotal").text(preMonitorTotal);
			$("#txtPreMonitorPercentage").text(preMonitorPercentage);
			$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Ready");
			$('#preMonitorMeter').val(preMonitorCounter);
//checking if the checkbox is checked

for(var aCounter=0;aCounter<3;aCounter++){
	var aName='preMonitor-a-';
	var aNodeName='#preMonitor-a-';
	if(localStorage.getItem(aName+aCounter)<1){
			$(aNodeName+aCounter).prop('checked',false);
			var alocalHidden = '#hidden'+aName+aCounter;
			$(alocalHidden).val(localStorage.getItem(aName+aCounter));
		}
	else{
			$(aNodeName+aCounter).prop('checked',true);
			var alocalHidden = '#hidden'+aName+aCounter;
			$(alocalHidden).val(localStorage.getItem(aName+aCounter));
		}
}

for(var bCounter=0;bCounter<17;bCounter++){
	var bName='preMonitor-b-';
	var bNodeName='#preMonitor-b-';
	if(localStorage.getItem(bName+bCounter)<1){
			$(bNodeName+bCounter).prop('checked',false);
			var blocalHidden = '#hidden'+bName+bCounter;
			$(blocalHidden).val(localStorage.getItem(bName+bCounter));
		}
		else{
			$(bNodeName+bCounter).prop('checked',true);
			var blocalHidden = '#hidden'+bName+bCounter;
			$(blocalHidden).val(localStorage.getItem(bName+bCounter));
		}
}

for(var cCounter=0;cCounter<7;cCounter++){
	var cName='preMonitor-c-';
	var cNodeName='#preMonitor-c-';
	if(localStorage.getItem(cName+cCounter)<1){
			$(cNodeName+cCounter).prop('checked',false);
			var clocalHidden = '#hidden'+cName+cCounter;
			$(clocalHidden).val(localStorage.getItem(cName+cCounter));
		}
		else{
			$(cNodeName+cCounter).prop('checked',true);
			var clocalHidden = '#hidden'+cName+cCounter;
			$(clocalHidden).val(localStorage.getItem(cName+cCounter));
		}
}

for(var dCounter=0;dCounter<12;dCounter++){
	var dName='preMonitor-d-';
	var dNodeName='#preMonitor-d-';
	if(localStorage.getItem(dName+dCounter)<1){
			$(dNodeName+dCounter).prop('checked',false);
			var dlocalHidden = '#hidden'+dName+dCounter;
			$(dlocalHidden).val(localStorage.getItem(dName+dCounter));
		}
		else{
			$(dNodeName+dCounter).prop('checked',true);
			var dlocalHidden = '#hidden'+dName+dCounter;
			$(dlocalHidden).val(localStorage.getItem(dName+dCounter));
		}
}





			

//saving stuff to localStorage			
			$('#preMonitor-a-1').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});

			$('#preMonitor-a-2').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			
			//end PreMonitor A
			
			$('#preMonitor-b-1').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-b-2').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-b-3').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-b-4').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-b-5').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-b-6').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-b-7').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-b-8').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-b-9').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-b-10').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-b-11').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-b-12').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-b-13').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-b-14').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-b-15').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-b-16').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			//end of B Monitor
			
			$('#preMonitor-c-1').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-c-2').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-c-3').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-c-4').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-c-5').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-c-6').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			
			
			//end of C
			
			$('#preMonitor-d-1').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-d-2').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-d-3').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-d-4').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-d-5').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-d-6').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-d-7').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-d-8').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-d-9').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-d-10').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-d-11').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			
			
			function preMonitorAdd(checkPropertyIdTest){
				localStorage.setItem(checkPropertyIdTest,1);
				var localHidden = '#hidden'+checkPropertyIdTest;
				$(localHidden).val(localStorage.getItem(checkPropertyIdTest));
				preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Ready");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					intPreMonitorCounter = parseInt(preMonitorCounter);
					localStorage.setItem('localPreMonitorCounter', intPreMonitorCounter);
					intPreMonitorPercentage = parseInt(preMonitorPercentage);
					localStorage.setItem('localPreMonitorPercentage', intPreMonitorPercentage);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
			}
			
			function preMonitorSub(checkPropertyIdTest){
				localStorage.setItem(checkPropertyIdTest,0);
				var localHidden = '#hidden'+checkPropertyIdTest;
				$(localHidden).val(localStorage.getItem(checkPropertyIdTest));
				preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Ready");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					intPreMonitorCounter = parseInt(preMonitorCounter);
					localStorage.setItem('localPreMonitorCounter', intPreMonitorCounter);
					intPreMonitorPercentage = parseInt(preMonitorPercentage);
					localStorage.setItem('localPreMonitorPercentage', intPreMonitorPercentage);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
			}
			

			$('#btnLogout').click(function(){
				$.mobile.loading("show");
				localStorage.setItem('datausername','');
				localStorage.setItem('datapassword','');
				localStorage.setItem('dataregion', '');
				localStorage.setItem('dataprovince', '');
				localStorage.setItem('datacity', '');
				$("#popuptextLogout").html("<strong>Thank you for using LISTO.</strong>");	
					$( "#popupAfterLogout" ).popup();
					$( "#popupAfterLogout" ).popup( "open", { 
					positionTo: "window",
					transition: "slidedown" });
					$.mobile.loading("hide");
				location.href="loginpage.html";
				
			});
			
			$('#btnSubmitPreMonitor').click(function(){
				var frmHiddenPreMonitor = $("#frmLGUActions");
				var preMonitorTyphoon = "Dodong";
					$('#hiddenPreMonitorTyphoon').val(preMonitorTyphoon);
				var preMonitorRegion = localStorage.getItem('dataregion');
					$('#hiddenPreMonitorRegion').val(preMonitorRegion);
				var preMonitorProvince = localStorage.getItem('dataprovince');
					$('#hiddenPreMonitorProvince').val(preMonitorProvince);
				var preMonitorCity = localStorage.getItem('datacity');
					$('#hiddenPreMonitorCity').val(preMonitorCity);
				finalPreMonitorPercentage=$('#txtPreMonitorPercentage').text();
					$('#hiddenPreMonitorPercentage').val(finalPreMonitorPercentage);
				finalPreMonitorCounter=$('#txtPreMonitorCounter').text();
					$('#hiddenPreMonitorCounter').val(finalPreMonitorCounter);
				console.log(preMonitorTyphoon);
				console.log(preMonitorRegion);
				console.log(preMonitorProvince);
				console.log(preMonitorCity);
				console.log(finalPreMonitorPercentage);
				console.log(finalPreMonitorCounter);
				$.mobile.loading("show");
				$.ajax({
					url: 'http://iligtas.ph/listo/mobile/add_premonitor2.php',						
					type: 'POST',
					
					data: frmHiddenPreMonitor.serialize(),
					success: function (data) {
						$.mobile.loading("hide");
						$("#popuptextDataSubmit").html("<strong>"+data+"<strong>");	
						$( "#popupAfterDataSubmit" ).popup();
						$( "#popupAfterDataSubmit" ).popup( "open", { 
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
});