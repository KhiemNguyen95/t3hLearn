<div class="row">
	<h3>weather: <?= $pronvive; ?></h3>
	<?php foreach($data as $key => $item):?>
	<div class="col-md-12">
		<p>- date/time <?= $item['dt_txt']; ?></p>
		<p>- Temp <?= $item['main']['temp']; ?>c</p>
		<p>- humidity <?= $item['main']['humidity']; ?> %</p>
		<p>- Sea <?= $item['main']['sea_level']; ?> </p>
		<p>- Wind <?= $item['wind']['speed']; ?> </p>
		<div class="main">
			<p>- Weather <?= $item['weather'][0]['main']; ?> </p>
			<p>- Des <?= $item['weather'][0]['description']; ?> </p>
			<p>
				<img src='<?php echo"http://openweathermap.org/img/w/{$item['weather'][0]['icon']}.png" ?>' alt="">
			</p>
		</div>
	</div>
	<hr>
	<?php endforeach; ?>
</div>