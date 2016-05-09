$( window ).load(function() {
  $('#phide').hide();
});

$(document).ready(function() {
    $('input[type="file"]').change(function(e){
        var fileName = e.target.files[0].name;
        $('#uploadedFile').html(fileName);
        $('#showFileName').removeClass('hide').addClass('show-name');
        $('#fileUpload').addClass('hide').removeClass('show');
        $('.existing-resume').addClass('hide');
    });

    
    $('#pshow').click(function(){
        $(this).hide();
        $('#phide').show();
        $('#upassword').attr('type', 'text'); 
    });

    $('#phide').click(function(){
        $(this).hide();
        $('#pshow').show();
        $('#upassword').attr('type', 'password'); 
    });

});