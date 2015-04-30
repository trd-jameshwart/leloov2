$(document).ready(function(){


    $(document).on('click',"#btn_login",function(){
        var email = $("#txt_email").val();
        var password = $("#txt_password").val();

    });

    $(".logout").click(function(){
        alert(1);
        window.location.href="public/userAction/logout.php";
    });
    $(document).on('click','.add_review',function(){
        $("#txt_place_id").val($(this).attr('data-place_id'));
    });

    $("#frm_add_reviews").submit(function(e){
        var rating = $('#rating-input').val();
        var text= $("#message-text").val();
        var placeid= $("#txt_place_id").val();
        alert(text  +'-------------'+rating +'-------------'+ placeid);
        e.preventDefault();
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
                }else{
                    $("#reg_error").html("").prepend("<div class='alert alert-success alert-dismissable'> <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button> <strong>Registration Successful</strong></div>");
                    $("#frm_regiters input[name='username'] ").val("");
                    $("#frm_regiters input[name='useremail']").val("");
                    $("#frm_regiters input[name='userpassword']").val("");

                    setTimeout(function(){
                        $('#registerModal').fadeOut('slow');
                    },1000)

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

                if(data=='0'){
                    alert("empty user name and password");
                }else if(data=='1'){
                    alert("user successfully login");
                    $("#txt_email").val("");
                    $("#txt_password").val("");
                   location.reload();
                   // $(".login_wrapper").html("");
                }else{
                    alert(data);
                }
            });
        }

        e.preventDefault();
    });

});