 <div class="card card-container">            
    <h3>Register</h3>
    <form class="form-regis">
        <span id="reauth-email" class="reauth-email"></span>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
        <button type = "button" class="btn btn-lg btn-primary btn-block btn-regis">Register</button>
    </form>
    <!-- /form -->
</div>
<!-- /card-container -->
<script>
    $('.btn-regis').click(function(){
        let dataRegis = dataRegis();
        if (dataRegis != false) {
            $.ajax({
                url: 'server/addUser.php',
                type: 'POST',
                data: dataRegis,
                success: function(res){
                    $(".container").html(res)
                }
            });
        } else {
            alert('ban da nhap thieu thong tin');
        }
    });

    //get data Register
    function dataRegis(){
        let email = $(".form-regis #inputEmail").val();
        let pass = $(".form-regis #inputPassword").val();
        if(email != '' && pass != ''){
            return {
                user :email,
                password: pass,
            }
        } else{
            return false
        }
    }
</script>