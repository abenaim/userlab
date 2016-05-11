$( window ).load(function() {
  $('#phide').hide();
  $('#upostResumeComplete').hide();
  $('#preloader').hide();

});

$(document).ready(function() {
    $('input[type="file"]').change(function(e){
        var fileName = e.target.files[0].name;
        $('#uploadedFile').html(fileName);
        $('#showFileName').removeClass('hide').addClass('show-name');
        $('#fileUpload').addClass('hide').removeClass('show');
        $('.existing-resume').addClass('hide');
    });

    //Password SHOW
    $('#pshow').click(function(){
        $(this).hide();
        $('#phide').show();
        $('#upassword').attr('type', 'text'); 
    });

    //Passwor HIDE
    $('#phide').click(function(){
        $(this).hide();
        $('#pshow').show();
        $('#upassword').attr('type', 'password'); 
    });


    //Click on Post My Resume Button
    $('#upostResume button').click(function(){
        $('#uResumeUpload').fadeOut(function(){
            $('#genProfile').fadeIn(function(){
                $('html, body').animate({
                    scrollTop: $('#genProfile').offset().top-60
                }, 'slow');
            });
            $('#genProfile').show();
            $('#upostResumeComplete').show();
            $('#upostResume').hide();


        });
    });

    //Retour
    $('#uResumeBack').click(function(){
        $('#genProfile').fadeOut(function(){
            $('#uResumeUpload').fadeIn(function(){
                $('#upostResume').show();
                $('html, body').animate({
                    scrollTop: $('#uResumeUpload').offset().top-60
                }, 'slow');
            });
        });
    });


});