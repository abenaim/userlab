
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#rightContent').addClass('sticky');
            $('#rightContent').fadeIn();
        } else {
            $('#rightContent').fadeOut();
            $('#rightContent').hide();
        }
    });

    $('#switch1').click(function(){
        
    });

    $('input[type="file"]').change(function(e){
        var fileName = e.target.files[0].name;
        //alert('The file "' + fileName +  '" has been selected.');
        $('#uploadedFile').html(fileName);
        $('#showFileName').removeClass('hide').addClass('show-name');
        $('#fileUpload').addClass('hide');
        $('.existing-resume').addClass('hide');
        //$('.upload-resume').addClass('hide');
    });
    
    $("#cLettercheckbox").click(function () {
        $('#createCoverLetter').toggleClass('hide show');
    });
    $("#clearCV").click(function () {
        event.preventDefault();
        $('#fileUpload').removeClass('hide');
        $('#showFileName').addClass('hide');
    });
    $("#searchEmpty").click(function () {
        event.preventDefault();
        $(".search-form").removeClass("hide");
        //$(".search-empty").addClass("hide");
    });
    $("#backIcon").click(function () {
        event.preventDefault();
        $(".search-form").addClass("hide");
        //$(".backIcon").addClass("hide");
    });


    $("#btnLoginApply").click(function () {
        event.preventDefault();
        $(".upload-form").removeClass("hide");
        $('.action').hide();
    });

    $("#btnContinueProfile").click(function () {
        event.preventDefault();
        $("li:nth-of-type(1n)").removeClass("active");
        $("li:nth-of-type(2n)").addClass("active");
        $("#panel1").removeClass("active");
        $("#panel2").addClass("active");
        //$(".backIcon").addClass("hide");
    });
    $("#btnContinueNewsletter").click(function () {
        event.preventDefault();
        $("li:nth-of-type(2n)").removeClass("active");
        $("li:nth-of-type(3n)").addClass("active");
        $("#panel2").removeClass("active");
        $("#panel3").addClass("active");
        //$(".backIcon").addClass("hide");
    });

    $("#applyRegister").click(function () {
        $("#panel2").removeClass('active').addClass("hide");
        $('#panel3').removeClass('hide').addClass('active');
        

        //$('#tab1').removeClass('active');
        $('#tab2').addClass('active');
        event.preventDefault();
    });
    $("#btnSendApplication").click(function () {
        $("#panel2").removeClass('active').addClass("hide");
        $('#panel3').removeClass('active').addClass('hide');
        $('#panel4').removeClass('hide').addClass('active');
        

        //$('#tab1').removeClass('active');
        $('#tab3').addClass('active');
        event.preventDefault();
    });
});