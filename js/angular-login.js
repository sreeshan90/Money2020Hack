var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$http) {
	$scope.gifyhide=false;
	$scope.openModal=function(){
		$('#myModal').modal('show');
	}
	$scope.phoneNumber='';
	var sent=false;
	$scope.sendSms=function(){
		var phoneno = /^\d{10}$/;  
		if($scope.phoneNumber.match(phoneno))  
		{  
			$http.get('http://localhost:1337/sendSms?number='+$scope.phoneNumber)
			.success(function(req,res){
				alertify.success('SMS Sent Successfully');
				sent=true;
				$scope.gifyhide=true;
			});
		}  
		else  
		{  
			alertify.error('Invalid Phone Number');
		}  
	}
	var count=0;

	setInterval(function(){ 
		if(sent){
			$http.get('http://localhost:1337/checkPayment')
			.success(function(req,res){
				console.log(res);
				count++;
				if(count==10){
					if(res=='1')
						swal("Good job!", "Your payment is successful!", "success");
					else
						swal("Oops!", "You payment failed!", "error");
					sent=false;
					$scope.gifyhide=false;
				}
			})
		}
	}, 1000);




});