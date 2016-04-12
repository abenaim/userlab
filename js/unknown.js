$(document).ready(function() {
	$('input[type="file"]').change(function(e){
        var fileName = e.target.files[0].name;
        $('#uploadedFile').html(fileName);
        $('#showFileName').removeClass('hide').addClass('show-name');
        $('#fileUpload').hide();
        $('.existing-resume').hide();
    });

    $("#clearCV").click(function () {
        $('#showFileName').fadeOut();
        $('#fileUpload').fadeIn();
    });

    $("#cLettercheckbox").click(function () {
        $('#createCoverLetter').toggleClass('hide show');
    });


    $('#accountRegister input').change(function(){
        if($(this).is(':checked')){
            $('#progress').addClass('step4').removeClass('step3');
            $('#tab1').css('left','0%');
            $('#tab2').css('left','28%');
            $('#tab3').css('left','65%');
            $('#tab4').css('left','95%').show();
        }else{
            $('#progress').removeClass('step4').addClass('step3');
            $('#tab1').css('left','0%');
            $('#tab2').css('left','45%');
            $('#tab3').css('left','96%');
            $('#tab4').hide();
        }
    });
    

    //Adding "step4" class
    $('#progress').addClass('step4');
    $('#confirmDetails').addClass('hide');
    $('#uploadForm').addClass('hide');

    
    //Click on Top Apply Button
    $('#btnLoginApply').click(function(){
        $('#uploadForm').fadeIn();
        $('html, body').animate({
            scrollTop: $('#uploadForm').offset().top-98
        }, 'slow');
        $(this).hide();
        $('#bottombtnLoginApply').hide();
    });

    //Click on Bottom Apply Button
    $('#bottombtnLoginApply').click(function(){
        $('#uploadForm').fadeIn();
        $('html, body').animate({
            scrollTop: $('#uploadForm').offset().top-98
        }, 'slow');
        $(this).hide();
        $('#btnLoginApply').hide();
    });

    //STEP 1
    $('#applyRegister').click(function(){
        $('#panel1').fadeOut(function(){
            $('#panel2').fadeIn();
            $('#tab2').fadeIn().find('.small-circle').addClass('success');
        });
        if ($('#accountRegister span').css('background') == "rgb(51, 122, 183) none repeat scroll 0% 0% / auto padding-box border-box"){
            $('#progress').addClass('step4');
            $('.meter').css('width', '36%');
            //alert('step4 meter');
        }else{
            $('.meter').css('width', '54%');
            //alert('step3 meter');
        }

        //positioning for each click
        $('html, body').animate({
            scrollTop: $('#uploadForm').offset().top-15
        }, 'slow');
    });

    //Cancel Apply
    $('#cancelApply').click(function(){
        $('#uploadForm').fadeOut(function(){
            $('#btnLoginApply').show();
            $('#bottombtnLoginApply').show();
            location.reload();

            $('html, body').animate({
                scrollTop: $('#uploadForm').offset()
            }, 'slow');
        });
    });

    //Register Later
    $('#registerLater').click(function(){
        $('#uploadForm').fadeOut(function(){
            $('#btnLoginApply').show();
            $('#bottombtnLoginApply').show();
            
            location.reload();

            $('html, body').animate({
                scrollTop: $('#uploadForm').offset()
            }, 'slow');
        });
    });

    //STEP 2
    $('#btnSendApplication').click(function(){
        $('#panel2').fadeOut(function(){
            $('#panel3').fadeIn();
            $('#tab3 .small-circle').addClass('success');
        });
        if ($('#accountRegister span').css('background') == "rgb(51, 122, 183) none repeat scroll 0% 0% / auto padding-box border-box"){
            $('.meter').css('width', '68%');
        }else{
            $('#panel3 form').hide();
            $('#confirmDetails').show();
            $('#panel4').hide();
            $('.meter').css('width', '100%');
        }

        //positioning for each click
        $('html, body').animate({
            scrollTop: $('#uploadForm').offset().top-15
        }, 'slow');
    });

    //Retour
    $('#btnRetour').click(function(){
        $('#panel2').fadeOut(function(){
            $('#panel1').fadeIn();
            $('#tab2 .small-circle').removeClass('success');
            $('.meter').css('width', '0%');
        });

        //positioning for each click
        $('html, body').animate({
            scrollTop: $('#uploadForm').offset().top-15
        }, 'slow');
    });



   //STEP 3
   $('#register').click(function(){
        $('#panel3').fadeOut(function(){
            $('#panel4').fadeIn();
            $('#tab4 .small-circle').addClass('success');
            $('.meter').css('width', '100%');
        });

        //positioning for each click
        $('html, body').animate({
            scrollTop: $('#uploadForm').offset().top-15
        }, 'slow');
    }); 

   //Apply Complete
   $('#applyComplete3').click(function(){
        $('#uploadForm').fadeOut();
        $('#bottombtnLoginApply').show();
        $('#btnLoginApply').show();

        location.reload();

        $('html, body').animate({
            scrollTop: $('#uploadForm').offset()
        }, 'slow');
    }); 
   $('#applyComplete4').click(function(){
        $('#uploadForm').fadeOut();
        $('#bottombtnLoginApply').show();
        $('#btnLoginApply').show();

        location.reload();

        $('html, body').animate({
            scrollTop: $('#uploadForm').offset()
        }, 'slow');
    }); 


});