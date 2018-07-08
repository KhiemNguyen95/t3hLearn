<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>demo Ajax</title>
	<script type="text/javascript" src="../../../jq-3.2/jquery-3.2.0.js"></script>
</head>
<body>
	<input type="text" id='ip_search'> <button type="button" id='btn_search'>search</button>
	<div id="data"></div>

   <script type="text/javascript">
        $(function(){
            // bat su kien nguoi dung bam nut search
            $('#btn_search').click(function(){
                let keyword = $('#ip_search').val().trim();
                // alert(keyword);

                if (keyword != '') {
                	// ajax
                	$.ajax({
                		url: "chiahetcho5.php",
                		type: "POST",
                		data: {key: keyword},
                		beforeSend: function(){
                			$('#btn_search').text("Loading");
                		},
                		success: function(res){
                			// cho lay ket qua
                			// let obj = $.parseJSON(res);
                			// let  = obj.keyw;
                			$("#data").html(res);
                			$('#btn_search').text("Search");
                		}
                	});
                }
            });
        });
    </script>
</body>
</html>