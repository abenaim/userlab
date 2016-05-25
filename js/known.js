$(document).ready(function() {
	$('input[type="file"]').change(function(e){
        var fileName = e.target.files[0].name;
        $('#uploadedFile').html(fileName);
        $('#showFileName').removeClass('hide').addClass('show-name');
        $('#fileUpload').hide();
        $('.existing-resume').hide();
        $('.ou').hide();
    });

    //Clear uploaded CV
    $("#clearCV").click(function () {
        $('#showFileName').fadeOut();
        $('#fileUpload').fadeIn();
        $('.existing-resume').fadeIn();
        $('.ou').fadeIn();
    });

    $('#uploadForm_known').hide();

    //Click on Top Apply Button
    $('#btnLoginApply_known').click(function(){
        $('#uploadForm_known').fadeIn();
        $('html, body').animate({
            scrollTop: $('#uploadForm_known').offset().top-25
        }, 'slow');
        $(this).hide();
        $('#bottombtnLoginApply_known').hide();
    });

    //Adding Steps Count
    $('#progress').addClass('step3');

    $('#knownApplyStart').fadeOut().css('display','none');

    //Add Cover Letter
    $('#add_cl input').change(function(){
        if($(this).is(':checked')){
            //alert('step3');
            $('#progress').addClass('step3').removeClass('step2');
            $('#tab1').css('left','0%');
            $('#tab2').css('left','65%').fadeIn().show();
            $('#tab3').css('left','97%');
            $('#tab3 .small-circle').text('3');
            $('#knownApplyStart').fadeOut().css('display','none');
            $('#knownContinue').fadeIn().removeAttr('style');
        }else{
            //alert('step2');
            $('#progress').removeClass('step3').addClass('step2');
            $('#tab1').css('left','0%');
            $('#tab2').fadeOut().hide();
            $('#tab3').css('left','97%');
            $('#tab3 .small-circle').text('2');
            $('#knownApplyStart').fadeIn().removeAttr('style');
            $('#knownContinue').fadeOut().css('display','none');
        }
    });

    //STEP 1
    //Click on Continue for step 3
    $('#knownContinue').click(function(){
        $('#panel1').fadeOut(function(){
            $('#panel2').fadeIn();
            $('#tab2').fadeIn().addClass('active').find('.small-circle').addClass('success');
            //$('#progress').addClass('step3');
            $('.meter').css('width', '55%');
        });
    });

    //Click on Send for step 2
    $('#knownApplyStart').click(function(){
        $('#panel1').fadeOut(function(){
            $('#panel3').fadeIn();
            $('#tab3').fadeIn().addClass('active').find('.small-circle').addClass('success');
            //$('#progress').addClass('step3');
            $('.meter').css('width', '100%');
        });
    });



    //Edit Cover Letter
    $('#coverl1').click(function(){
        $('#editCL').removeClass('hide').addClass('show');
        $('#editCL input').val('Cover_letter_1');
        $('#editCL textarea').text("(Madame, Monsieur), \nEtant actuellement Ã  la recherche dâ€™un emploi, je me permets de vous proposer ma candidature au poste de (emploi). \nEn effet, mon profil correspond Ã  la description recherchÃ©e sur lâ€™offre dâ€™emploi (prÃ©ciser oÃ¹ lâ€™annonce a Ã©tÃ© vue). \n(Si le candidat possÃ¨de peu dâ€™expÃ©rience professionnelle) Ma formation en (prÃ©ciser la formation) m'a permis d'acquÃ©rir de nombreuses compÃ©tences parmi celles que vous recherchez. \nJe possÃ¨de tous les atouts qui me permettront de rÃ©ussir dans le rÃ´le que vous voudrez bien me confier. Motivation, rigueur et Ã©coute sont les maÃ®tres mots de mon comportement professionnel. \n(Si le candidat possÃ¨de une expÃ©rience significative dans le poste Ã  pourvoir) Mon expÃ©rience en tant que (emploi) mâ€™a permis dâ€™acquÃ©rir toutes les connaissances nÃ©cessaires Ã  la bonne exÃ©cution des tÃ¢ches du poste Ã  pourvoir. RÃ©guliÃ¨rement confrontÃ© aux alÃ©as du mÃ©tier, je suis capable de rÃ©pondre aux imprÃ©vus en toute autonomie.")
    });
    $('#coverl2').click(function(){
         $('#editCL').removeClass('hide').addClass('show');
        $('#editCL input').val('Cover_letter_2');
        $('#editCL textarea').text("(Madame, Monsieur), \nEtant actuellement Ã  la recherche dâ€™un emploi, je me permets de vous proposer ma candidature au poste de (emploi). \nEn effet, mon profil correspond Ã  la description recherchÃ©e sur lâ€™offre dâ€™emploi (prÃ©ciser oÃ¹ lâ€™annonce a Ã©tÃ© vue). \n(Si le candidat possÃ¨de peu dâ€™expÃ©rience professionnelle) Ma formation en (prÃ©ciser la formation) m'a permis d'acquÃ©rir de nombreuses compÃ©tences parmi celles que vous recherchez. \nJe possÃ¨de tous les atouts qui me permettront de rÃ©ussir dans le rÃ´le que vous voudrez bien me confier. Motivation, rigueur et Ã©coute sont les maÃ®tres mots de mon comportement professionnel. \n(Si le candidat possÃ¨de une expÃ©rience significative dans le poste Ã  pourvoir) Mon expÃ©rience en tant que (emploi) mâ€™a permis dâ€™acquÃ©rir toutes les connaissances nÃ©cessaires Ã  la bonne exÃ©cution des tÃ¢ches du poste Ã  pourvoir. RÃ©guliÃ¨rement confrontÃ© aux alÃ©as du mÃ©tier, je suis capable de rÃ©pondre aux imprÃ©vus en toute autonomie.")
    });


    //Create New Cover Letter
    // $('#creatNewCL').click(function(){
    //     $('#editCL').removeClass('hide');
    //     $('#editCL input').val('');
    //     $('#editCL textarea').text('');
    // });

    //Retour
    $('#btnRetour').click(function(){
        $('#panel2').fadeOut(function(){
            $('#panel1').fadeIn();
            $('#tab2').removeClass('active');
            $('#tab2 .small-circle').removeClass('success');
            $('.meter').css('width', '0%');
        });

        //positioning for each click
        $('html, body').animate({
            scrollTop: $('#uploadForm_known').offset().top-15
        }, 'slow');
    });

    //Cancel Apply
    $('#knownCancelApply').click(function(){
        $('#uploadForm_known').fadeOut(function(){
            $('#btnLoginApply_known').show();
            $('#bottombtnLoginApply_known').show();
            location.reload();

            $('html, body').animate({
                scrollTop: $('#uploadForm_known').offset()
            }, 'slow');
        });
    });


    //STEP 2
    $('#btnSendApplication_known').click(function(){
        $('#panel2').fadeOut(function(){
            $('#panel3').fadeIn();
            $('#tab3').fadeIn().addClass('active').find('.small-circle').addClass('success');
            //$('#progress').addClass('step3');
            $('.meter').css('width', '100%');
        });
    });

    
});