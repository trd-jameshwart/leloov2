$(document).ready(function(){


    $(document).on('click',"#btn_login",function(){
        var email = $("#txt_email").val();
        var password = $("#txt_password").val();

    });

    $(document).on('click',"#btn_register",function(){
        var email = $("#txt_email").val();
        var password = $("#txt_password").val();

    });

    $("#frm_regiters").submit(function(e){
        var user_name = $("#frm_regiters input[name='username'] ").val();
        var user_email = $("#frm_regiters input[name='useremail']").val();
        var password  = $("#frm_regiters input[name='userpassword']").val();
        if(user_name =='' || user_email =='' || password ==''){

            $("#reg_error").html("").prepend("<div class='alert alert-danger alert-dismissable'> <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button> <strong>Please fill up empty fields</strong></div>");
        }else{
            $.post("public/userAction/register.php",{name:user_name,email:user_email,password:password},function(data){
              if(data=='0'){
                  $("#reg_error").html("").fadeIn("<div class='alert alert-danger alert-dismissable'> <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button> <strong>Please fill up empty fields</strong></div>");
              }
            })

        }

        e.preventDefault();
    });

    $("#user_login").submit(function(e){
            var user_email = $("#txt_email").val();
            var password   = $("#txt_password").val();

            if(user_email =='' || password ==''){

            }else {
                $.post("public/userAction/login.php",{email:user_email,password:password},function(data){
                    alert(data);
                });
            }

        e.preventDefault();
    });

});