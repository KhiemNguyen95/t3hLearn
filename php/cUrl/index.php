<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<!-- <link rel="stylesheet" href="<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B" crossorigin="anonymous"> -->

	<script type="text/javascript" src="public/js/jquery-3.2.0.min.js"></script>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h2 class="text-center">Weather City</h2>
			</div>
			
			<div class="col-md-10">
				<input type="text" id="city" placeholder="city name">
			</div>
			<div class="col-md-2">
				<button type="button" class = "btn btn-primary" id ="send" >get data</button>
			</div>

		</div>
		<div class="row text-center" id="result">
			
		</div>
	</div>
	<script type="text/javascript">
		$(function(){
			$("#send").click(function(){
				let cityName = $('#city').val().trim();
				if(cityName != ''){
					$.ajax({
						url: "controller/weather.php",
						type: 'POST',
						data: {
							city: cityName
						},
						beforeSend: function(){

						},
						success: function(res){
							$('#result').html(res);
						}
					});
				} else {
					alert('nhap thanh pho');
				}
			});
		});
	</script>
</body>
</html>