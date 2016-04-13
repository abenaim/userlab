$(document).ready(function() {
	$('input[type="file"]').change(function(e){
        var fileName = e.target.files[0].name;
        $('#uploadedFile').html(fileName);
        $('#showFileName').removeClass('hide').addClass('show-name');
        $('#fileUpload').addClass('hide').removeClass('show');
        $('.existing-resume').addClass('hide');
    });

    

    $('.tgl input').change(function(){
        if($(this).is(':checked')){
            $('#progress1').addClass('step4');
            $('#pb-4').show();
        }else{
            $('#progress1').removeClass('step4');
            $('#pb-4').hide();
        }
    })

});