var preMonitorCompletion=0;
var preMonitorCounter=0;
var preMonitorTotal=149;
var preMonitorPercentage=0;
var pma1=0;

$(document).ready(function(){
			$("#txtPreMonitorCounter").text(preMonitorCounter);
			$("#txtPreMonitorTotal").text(preMonitorTotal);
			$("#txtPreMonitorPercentage").text(preMonitorPercentage);
			//start preMonitor A
			$('#preMonitor-a-1').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});

			$('#preMonitor-a-2').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});
			
			$('#preMonitor-a-3').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});
			
			$('#preMonitor-a-4').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});
			//end PreMonitor A
			
			//start preMonitor B
			$('#preMonitor-b-1').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});

			$('#preMonitor-b-2').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});
			
			$('#preMonitor-b-3').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});
			
			$('#preMonitor-b-4').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});
			
			$('#preMonitor-b-5').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});
			
			$('#preMonitor-b-6').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});
			
			$('#preMonitor-b-7').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});
			
			$('#preMonitor-b-8').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});
			
			$('#preMonitor-b-9').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});
			
			$('#preMonitor-b-10').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});
			//end PreMonitor B
			
			//start preMonitor C
			$('#preMonitor-c-1').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});

			$('#preMonitor-c-2').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});
			
			$('#preMonitor-c-3').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});
			
			$('#preMonitor-c-4').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});
			
			$('#preMonitor-c-5').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});
			
			$('#preMonitor-c-6').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});
			
			$('#preMonitor-c-7').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});
			
			$('#preMonitor-c-8').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});
			
			$('#preMonitor-c-9').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});
			
			$('#preMonitor-c-10').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});
			
			$('#preMonitor-c-11').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});

			$('#preMonitor-c-12').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});
			
			$('#preMonitor-c-13').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});
			
			$('#preMonitor-c-14').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});
			
			$('#preMonitor-c-15').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});
			
			$('#preMonitor-c-16').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});
			
			$('#preMonitor-c-17').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});
			
			$('#preMonitor-c-18').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});
			
			$('#preMonitor-c-19').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});
			
			$('#preMonitor-c-20').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});
			
			$('#preMonitor-c-21').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});
			
			$('#preMonitor-c-22').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});
			
			$('#preMonitor-c-23').change(function(){
				if($(this).prop('checked')){
					preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Readiness");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
				}
				else{
					preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
				}
			});

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
				var frmHiddenPreMonitor = $("#frmPreMonitorHidden");
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
					url: 'add_premonitor.php',						
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