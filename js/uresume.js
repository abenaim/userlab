$(document).ready(function() {
	$('input[type="file"]').change(function(e){
        var fileName = e.target.files[0].name;
        $('#uploadedFile').html(fileName);
        $('#showFileName').removeClass('hide').addClass('show-name');
        $('#fileUpload').hide();
        $('.existing-resume').hide();
    });

});