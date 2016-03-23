
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
    $('input[type="file"]').change(function(e){
        var fileName = e.target.files[0].name;
        //alert('The file "' + fileName +  '" has been selected.');
        $('#uploadedFile').html(fileName);
        $('#showFileName').removeClass('hide').addClass('show-name');
        $('#fileUpload').addClass('hide');
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


    $("#btnApply").click(function () {
        event.preventDefault();
        $(".upload-form").removeClass("hide");
        $(this).hide();
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

});