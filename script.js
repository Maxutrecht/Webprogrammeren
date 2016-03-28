//Max Tjebbes - D01
//login en registreren
$(document).ready(function(){
  $('.loginhide').hide();
  $("#loginknop").click(function(){
          $(".signinhide").hide(0);
          $(".loginhide").show(0);
          $('#wachtwoordleeg').hide();
          $('#inlogfout').hide();
          $('.inlogtevaak').hide();
          $('#gebruikersnaamleeg').hide();
      });
  $("#signinknop").click(function(){
          $(".signinhide").show(0);
          $(".loginhide").hide(0);
          $('#wachtwoordleeg').hide();
          $('#gebruikersnaamleeg').hide();
          $('#inlogfout').hide();
          $("form input").css("border-color", "");
          $('#fout1').hide();
          $('#fout2').hide();
          $('#fout3').hide();
          $('#fout4').hide();
          $('#fout5').hide();
          $('#fout6').hide();
          $('#fout7').hide();
          $('#password_nummer').hide();
          $('#username_bestaat').hide();
          $('#password_hetzelfde').hide();
          $('.inlogtevaak').hide();
      });
});
jQuery(document).ready(function(){
   $('#wachtwoordleeg').hide();
   $('#inlogfout').hide();
   $('.inlogtevaak').hide();
   $('#gebruikersnaamleeg').hide();
   var aantal_fout = 0;
  $("#loginknop2").click(function(){
      var gebruikersnaam = $("#gebruikersnaam").val();
      var wachtwoord = $("#wachtwoord").val();  
      if(gebruikersnaam == "max" && wachtwoord !== "1234"){
        $('#wachtwoordleeg').hide();
        $('#gebruikersnaamleeg').hide();
        $('#inlogfout').show();
        aantal_fout = 0;
        $("form input").css("border-color", "red");
      }
      if(gebruikersnaam !== "max" && wachtwoord == "1234"){
        $('#wachtwoordleeg').hide();
        $('#gebruikersnaamleeg').hide();
        $('#inlogfout').show();
        aantal_fout++;
        $("form input").css("border-color", "red"); //bordercolor = F 1.6
      }
      if(gebruikersnaam !== "max" && wachtwoord !== "1234"){
        $('#wachtwoordleeg').hide();
        $('#gebruikersnaamleeg').hide();
        $('#inlogfout').show();
        aantal_fout++;
        $("form input").css("border-color", "red");
      }
      if(gebruikersnaam == "" && wachtwoord !== "1234"){
        $('#wachtwoordleeg').hide();
        $('#gebruikersnaamleeg').show();
        $('#inlogfout').hide();
        $("form input").css("border-color", "red");
      }
      if(gebruikersnaam !== "max" && wachtwoord == ""){
        $('#wachtwoordleeg').show();
        $('#gebruikersnaamleeg').hide();
        $('#inlogfout').hide();
        $("form input").css("border-color", "red");
      }
      if(gebruikersnaam == "" && wachtwoord == ""){
        $('#wachtwoordleeg').show();
        $('#gebruikersnaamleeg').show();
        $('#inlogfout').hide();
        $("form input").css("border-color", "red");
      }
      if(gebruikersnaam == "" && wachtwoord == "1234"){
        $('#wachtwoordleeg').hide();
        $('#gebruikersnaamleeg').show();
        $('#inlogfout').hide();
        $("form input").css("border-color", "red");
      }
      if(gebruikersnaam == "max" && wachtwoord == ""){
        $('#wachtwoordleeg').show();
        $('#gebruikersnaamleeg').hide();
        $('#inlogfout').hide();
        $("form input").css("border-color", "red");
      }
      if(aantal_fout > 2){//f1.3
        $('.inlogtevaak').show();
        $('#wachtwoordleeg').hide();
        $('#gebruikersnaamleeg').hide();
        $('#inlogfout').hide();
        $('loginknop2').attr('disabled', true);
        $("form input").css("border-color", "FireBrick");
      }
      else{
        $('#inlogtevaak').hide();
        if(gebruikersnaam == "max" && wachtwoord == 1234){
          window.open("profiel.html", "_self"); //F1.4
        }
      }
      return false;
      //F1.1 / F1.2 / F 1.3 / F 1.4 / f1.5 
  });
});
jQuery(document).ready(function(){
   $('#fout1').hide();
   $('#fout2').hide();
   $('#fout3').hide();
   $('#fout4').hide();
   $('#fout5').hide();
   $('#fout6').hide();
   $('#fout7').hide();
   $('#password_nummer').hide();
   $('#username_bestaat').hide();
   $('#password_hetzelfde').hide();
  $("#signinknop2").click(function(){
    var firstname = $(".first_name").val();
    var lastname = $(".last_name").val();
    var username = $(".user_name").val();
    var password = $(".pass_word").val();
    var secPassword = $(".sec_pass_word").val();
    var email = $(".e_mail").val();
    
    if(firstname == ""){ //F2.1 / 2.2 
      $('#fout1').show();
      $('#fout2').show();
    }
    else{
      $('#fout2').hide();
    }
    if(lastname == ""){
      $('#fout1').show();
      $('#fout3').show();
    }
    else{
      $('#fout3').hide();
    }
    if(username == ""){
      $('#fout1').show();
      $('#fout4').show();
    }
    else{
      $('#fout4').hide();
    }
    if(password == ""){
      $('#fout1').show();
      $('#fout5').show();
    }
    else{
      $('#fout5').hide();
    }
    if(secPassword == ""){
      $('#fout1').show();
      $('#fout6').show();
    }
    else{
      $('#fout6').hide();
    }
    if(email == ""){
      $('#fout1').show();
      $('#fout7').show();
    }
    else{
      $('#fout7').hide();
    }
    $(".pass_word").each(function () {
      if(!/\d/.test(this.value)){ //f2.5
        $('#password_nummer').show();
      }
      else{
        $('#password_nummer').hide();
      }
    });
    if(firstname != "" && lastname != "" && username != "" && password != "" && secPassword != "" && email != ""){
      $('#fout1').hide();
    }
    if(username == "Hekman" || username == "Koning" || username == "ErikHekman" || username == "ThijsWaardenburg" || username == "Ronald" || username == "RonaldVanEssen"){
      $('#username_bestaat').show();//f2.2
    }
    else{
      $('#username_bestaat').hide();
    }
    if(password != secPassword){
      $('#password_hetzelfde').show(); //f2.3
    }
    else{
      $('#password_hetzelfde').hide();
    }
    if($("#fout1").is(':hidden') && $("#fout2").is(':hidden') && $("#fout3").is(':hidden') && $("#fout4").is(':hidden') && $("#fout5").is(':hidden') && $("#fout6").is(':hidden') && $("#fout7").is(':hidden') && $("#password_nummer").is(':hidden') && $("#username_bestaat").is(':hidden') && $("#password_hetzelfde").is(':hidden')){
      window.open("profiel.html", "_self"); //f2.6
    }
    return false;
  });
});

//berichten posten systeem, reacties, likes en verwijderen van berichten
function react(){ //F3.4
  $('.react').off("click").on("click", function(e){
      $(this).parent().find(".reactie_verdwijn").toggle();
  });
    $('.reactieKnop').on("click", function(e){
     var reactie_inhoud = $(this).parent().find('.reactieVeld').val();
     $(this).parent().prepend('<p class="reactie_verdwijn">' + reactie_inhoud + '</p>');
     $(this).parent().prepend('<p class="reactie_verdwijn reactie_user">Martijn Garritsen:</p>');
     $(this).parent().find('.reactieVeld').val("");
    });
    $('.reactieVeld').on("keypress", function(e) {
        if (e.keyCode == 13) {
          e.preventDefault();
          var reactie_inhoud = $(this).parent().find('.reactieVeld').val();
          $(this).parent().prepend('<p class="reactie_verdwijn">' + reactie_inhoud + '</p>');
          $(this).parent().prepend('<p class="reactie_verdwijn reactie_user">Martijn Garritsen:</p>');
          $(this).parent().find('.reactieVeld').val("");
        }
    });
    $('.give_love').on("click", function(e) {//F3.2
    var love_givin = parseInt($(this).parent().find('.love_nummer').text());
    $(this).parent().find('.love_nummer').text(love_givin + 1);
  }); // F3.4 eind ^
    $('.foto_popup').magnificPopup({type: 'image'});
} 
$(function(){
  react();
  $('.reactie_verdwijn').hide();
  var pushNummer = 0;
  $('.verborgen_file3').hide();
  $('#verdwijn_leeg3').hide();
  $('#verdwijn_leeg2').hide();
  $('#verdwijn_leeg').hide();
  var push_structure;
    $('.delete').on("click", function(e){
      $(this).closest('.push').remove();
    });
    $('#pushKnop').on("click", function(e){
      if($('#pushTextVeld').val() == ""){
        $('#verdwijn_leeg').show();
      }
      if($('#pushTextVeld').val() != ""){
        e.preventDefault();
        pushNummer++;
        $('#verdwijn_leeg').hide();
        var push_structure = $('<br><div class="push"><a href="profiel.html"><div id="pushPersoon"><img src="img/pf.jpg"/><h1>Martijn Garritsen:</h1><a class="delete"><h2>DELETE</h2></a></div></a><div class="pushTextStuk pushNummer"><p class="pushNummer'+pushNummer+'"></p><br><h3 class="react">REACT</h3><h3 class="give_love">&nbspLOVE</h3><h3 class="love_nummer">0</h3><div class="reactie"><input name="reactie_veld" class="reactieVeld reactie_verdwijn" type="text" size="40" placeholder="Wat vind jij hiervan?" /><button class="reactieKnop reactie_verdwijn" type="button">REACT</button></div></div></div>');
        $('#pushesKader').prepend(push_structure);
        $('.pushNummer' + pushNummer).append($('#pushTextVeld').val());
        $('#pushTextVeld').val("");
        $('.reactie_verdwijn').hide();
        react();
      }
        $('.delete').on("click", function(e){
          $(this).closest('.push').remove();
        });
    });
    $('#pushTextVeld').on("keypress", function(e) { //F3.7 (er zijn er 3)
        if (e.keyCode == 13) {
          if($('#pushTextVeld').val() == ""){
            $('#verdwijn_leeg').show();
          }
          if($('#pushTextVeld').val() != ""){
            e.preventDefault();
            pushNummer++;
            $('#verdwijn_leeg').hide();
            var push_structure = $('<br><div class="push"><a href="profiel.html"><div id="pushPersoon"><img src="img/pf.jpg"/><h1>Martijn Garritsen:</h1><a class="delete"><h2>DELETE</h2></a></div></a><div class="pushTextStuk pushNummer"><p class="pushNummer'+pushNummer+'"></p><br><h3 class="react">REACT</h3><h3 class="give_love">&nbspLOVE</h3><h3 class="love_nummer">0</h3><div class="reactie"><input name="reactie_veld" class="reactieVeld reactie_verdwijn" type="text" size="40" placeholder="Wat vind jij hiervan?" /><button class="reactieKnop reactie_verdwijn" type="button">REACT</button></div></div></div>');
            $('#pushesKader').prepend(push_structure);
            $('.pushNummer' + pushNummer).append($('#pushTextVeld').val());
            $('#pushTextVeld').val("");
            $('.reactie_verdwijn').hide();
            react();
          }
        }
        $('.delete').on("click", function(e){
          $(this).closest('.push').remove();
        });
    });
    $('#foto_upload').on('click',function(){
    $('.verborgen_file3').trigger('click');
  });
    $('.delete').on("click", function(e){
      $(this).closest('.push').remove();
    });
    $('#pushKnop2').on("click", function(e){
       if ($('#myFile').val() != "") {
          $('#verdwijn_leeg2').hide();
            pushNummer++;
            var push_structure2 = $('<br><div class="push"><a href="profiel.html"><div id="pushPersoon"><img src="img/pf.jpg"/><h1>Martijn Garritsen:</h1><a class="delete"><h2>DELETE</h2></a></div></a><div class="pushTextStuk pushNummer' + pushNummer + '"></div><br><h3 class="react">REACT</h3><h3 class="give_love">&nbspLOVE</h3><h3 class="love_nummer">0</h3><div class="reactie"><input name="reactie_veld" class="reactieVeld reactie_verdwijn" type="text" size="40" placeholder="Wat vind jij hiervan?" /><button class="reactieKnop reactie_verdwijn" type="button">REACT</button></div></div>');
            $('#pushesKader').prepend(push_structure2);
            $('.pushNummer' + pushNummer).append('<a class="foto_popup" id="popup'+ pushNummer +'" href=""><img src="" id="pushFoto' + pushNummer + '"/></a>');
            $('.reactie_verdwijn').hide();
            react();
            $('#myFile').one('change', function () {
                var file = this.files[0];
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function (e) { //F3.1 foto hieronder
                    $('#pushFoto' + pushNummer).attr('src', e.target.result);
                    $('#popup' + pushNummer).attr('href', e.target.result);
                };
            });
            $('#myFile').change();
        }
        else{
          $('#verdwijn_leeg2').show();
        }
        $('.delete').on("click", function(e){
          $(this).closest('.push').remove();
        });
    });
    $('#pushKnop3').on("click", function(e){
      if($('#pushYoutubeVeld').val() == ""){
        $('#verdwijn_leeg3').show();
      }
      if($('#pushYoutubeVeld').val() != ""){
        e.preventDefault();
        pushNummer++;
        $('#verdwijn_leeg3').hide();
        var push_structure = $('<br><div class="push"><a href="profiel.html"><div id="pushPersoon"><img src="img/pf.jpg"/><h1>Martijn Garritsen:</h1><a class="delete"><h2>DELETE</h2></a></div></a><div class="pushTextStuk pushNummer">'+$('#pushYoutubeVeld').val()+'<br><h3 class="react">REACT</h3><h3 class="give_love">&nbspLOVE</h3><h3 class="love_nummer">0</h3><div class="reactie"><input name="reactie_veld" class="reactieVeld reactie_verdwijn" type="text" size="40" placeholder="Wat vind jij hiervan?" /><button class="reactieKnop reactie_verdwijn" type="button">REACT</button></div></div></div>');
        $('#pushesKader').prepend(push_structure);
        $('#pushYoutubeVeld').val(""); //f3.1 - VIDEO
        $('.reactie_verdwijn').hide();
        react();
      }
        $('.delete').on("click", function(e){
          $(this).closest('.push').remove();
        });
    });
    $('#pushYoutubeVeld').on("keypress", function(e) {
        if (e.keyCode == 13) {
          if($('#pushYoutubeVeld').val() == ""){
            $('#verdwijn_leeg3').show();
          }
          if($('#pushYoutubeVeld').val() != ""){
            $('#verdwijn_leeg3').hide();
            e.preventDefault();
            pushNummer++;
            var push_structure = $('<br><div class="push"><a href="profiel.html"><div id="pushPersoon"><img src="img/pf.jpg"/><h1>Martijn Garritsen:</h1><a class="delete"><h2>DELETE</h2></a></div></a><div class="pushTextStuk pushNummer">'+$('#pushYoutubeVeld').val()+'<br><h3 class="react">REACT</h3><h3 class="give_love">&nbspLOVE</h3><h3 class="love_nummer">0</h3><div class="reactie"><input name="reactie_veld" class="reactieVeld reactie_verdwijn" type="text" size="40" placeholder="Wat vind jij hiervan?" /><button class="reactieKnop reactie_verdwijn" type="button">REACT</button></div></div></div>');
            $('#pushesKader').prepend(push_structure);
            $('#pushTextVeld').val("");
            $('.reactie_verdwijn').hide();
            react();
          }
        }
        $('.delete').on("click", function(e){
          $(this).closest('.push').remove(); //F3.3
        }); 
    });
});
$(function(){
  $('#verborgen_file').hide();
  $('#uploadButton').on('click',function(){ //2.4
    $('#verborgen_file').trigger('click');
  });
});

$(function(){
  $('#verborgen_file').change(function () {
    var file = this.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      $('#pf_foto').css("background-image", "url("+reader.result+")");
    }
    if (file) {
     reader.readAsDataURL(file);
    } else {
      }
  });
});
$(function(){ //F3.6
  $('#verborgen_file2').hide();
  $('#change_cover').on('click',function(){
    $('#verborgen_file2').trigger('click');
  });
});

$(function(){
  $('#verborgen_file2').change(function () {
    var file = this.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      $('#coverfoto').css("background-image", "url("+reader.result+")");
    }
    if (file) {
     reader.readAsDataURL(file);
    } else {
      }
  });
});

//vrienden verwijderen en toevoegen
$(function(){
  var friend5 = true;
  var friend6 = true;
  var friend7 = true;
  var friend8 = true;
  verwijder_vriend();
  toevoegen_vriend();
  function toevoegen_vriend(){
      $('.add_friend5').on('click',function(){ //4.1
        $('.friend5').remove();
        $('.push2 .kaderdeel_1 ol').append('<a href="#pop_friend5" class="open-popup-link"><li class="friend5">Yvonne Huisman</li></a>');
        $('.push2 .kaderdeel_2 ul').append('<a class="remove_friend"><li class="friend5">x</li></a>');
        friend5 = false;
        verwijder_vriend();
        kenJeZe();
      });
      $('.add_friend6').on('click',function(){
        $('.friend6').remove();
        $('.push2 .kaderdeel_1 ol').append('<a href="#pop_friend6" class="open-popup-link"><li class="friend6">Jeroen Puper</li></a>');
        $('.push2 .kaderdeel_2 ul').append('<a class="remove_friend"><li class="friend6">x</li></a>');
        friend6 = false;
        verwijder_vriend(); //4.2
        kenJeZe();
      });
      $('.add_friend7').on('click',function(){
        $('.friend7').remove();
        $('.push2 .kaderdeel_1 ol').append('<a href="#pop_friend7" class="open-popup-link"><li class="friend7">Max Tjebbes</li></a>');
        $('.push2 .kaderdeel_2 ul').append('<a class="remove_friend"><li class="friend7">x</li></a>');
        friend7 = false;
        verwijder_vriend();
        kenJeZe();
      });
      $('.add_friend8').on('click',function(){
        $('.friend8').remove();
        $('.push2 .kaderdeel_1 ol').append('<a href="#pop_friend8" class="open-popup-link"><li class="friend8">Ronald van Essen</li></a>');
        $('.push2 .kaderdeel_2 ul').append('<a class="remove_friend"><li class="friend8">x</li></a>');
        friend8 = false;
        verwijder_vriend();
        kenJeZe();
      });
  }
  function kenJeZe(){
      if(friend5 == false && friend6 == false && friend7 == false && friend8 == false){
        $('.ken_je_ze').remove();
      }
  }
});
function verwijder_vriend(){
  $('.remove_friend').on('click',function(){
    var thisClass = $(this).children("li").attr("class");
    $('li.' + thisClass).remove();
  });
  $('.open-popup-link').magnificPopup({ type:'inline', midClick: true });
} // F4.3 (plugin magnifico)

//berichten sturen naar vrienden
$(function(){
  var fotonummer = 2;
  var welke_vriend = $('#berichten1');
  var text_welke_vriend = 'Dirk';
  $('#welke_vriend_actief').append(text_welke_vriend);
  $('#berichten1').show();
  $('#berichten2').hide();
  $('#berichten3').hide();
  $('#berichten4').hide();
  $('#bericht_sturen').show();
  $('#youtube_bericht').hide();
  $('#foto_bericht').hide();
  $('#berichtKnop').show();
  $('#berichtKnop2').hide();
  $('#berichtKnop3').hide();
  $('#verdwijn_leeg_bericht').hide();
  $('#verdwijn_leeg_bericht2').hide();
  $('#verdwijn_leeg_bericht3').hide();

  $('#soort_bericht1').on('click',function(){
    $('#bericht_sturen').show();
    $('#youtube_bericht').hide();
    $('#foto_bericht').hide();
    $('#berichtKnop').show();
    $('#berichtKnop2').hide();
    $('#berichtKnop3').hide();
    $('#verdwijn_leeg_bericht').hide();
    $('#verdwijn_leeg_bericht2').hide();
    $('#verdwijn_leeg_bericht3').hide();
  });
  $('#soort_bericht2').on('click',function(){
    $('#bericht_sturen').hide();
    $('#youtube_bericht').show();
    $('#foto_bericht').hide();
    $('#berichtKnop').hide();
    $('#berichtKnop2').show();
    $('#berichtKnop3').hide();
    $('#verdwijn_leeg_bericht').hide();
    $('#verdwijn_leeg_bericht2').hide();
    $('#verdwijn_leeg_bericht3').hide();
  });
  $('#soort_bericht3').on('click',function(){
    $('#bericht_sturen').hide();
    $('#youtube_bericht').hide();
    $('#foto_bericht').show();
    $('#berichtKnop').hide();
    $('#berichtKnop2').hide();
    $('#berichtKnop3').show();
    $('#verdwijn_leeg_bericht').hide();
    $('#verdwijn_leeg_bericht2').hide();
    $('#verdwijn_leeg_bericht3').hide();
  });
  $('#berichtKnop').on('click',function(){
    if($('#bericht_sturen').val() ==  ""){ //F5.3
      $('#verdwijn_leeg_bericht').show();
    }
    else{ //F5.1
      welke_vriend.prepend('<div class="push"><div id="pushPersoon"><h1>Martijn Garritsen:</h1></div><div class="pushTextStuk pushNummer"><p class="pushNummer">'+$('#bericht_sturen').val()+'</p></div></div>');
      $('#verdwijn_leeg_bericht').hide();
    }
  });
  $('#bericht_sturen').on("keypress", function(e) {
    if (e.keyCode == 13) {
      if($('#bericht_sturen').val() ==  ""){ //F5.3
      $('#verdwijn_leeg_bericht').show();
    }
    else{
      e.preventDefault();
      welke_vriend.prepend('<div class="push"><div id="pushPersoon"><h1>Martijn Garritsen:</h1></div><div class="pushTextStuk pushNummer"><p class="pushNummer">'+$('#bericht_sturen').val()+'</p></div></div>');
      $('#verdwijn_leeg_bericht').hide();
    }
    }
  });
  $('#berichtKnop2').on('click',function(){
    if($('#youtube_bericht').val() ==  ""){ //F5.3
      $('#verdwijn_leeg_bericht2').show();
    }
    else{
      welke_vriend.prepend('<div class="push"><div id="pushPersoon"><h1>Martijn Garritsen:</h1></div><div class="pushTextStuk pushNummer"><p class="pushNummer">'+$('#youtube_bericht').val()+'</p></div></div>');
      $('#verdwijn_leeg_bericht2').hide();
    }
  });
  $('#youtube_bericht').on("keypress", function(e) {
    if (e.keyCode == 13) {
      if($('#youtube_bericht').val() ==  ""){
      $('#verdwijn_leeg_bericht2').show();
    }
    else{
      e.preventDefault();
      welke_vriend.prepend('<div class="push"><div id="pushPersoon"><h1>Martijn Garritsen:</h1></div><div class="pushTextStuk pushNummer"><p class="pushNummer">'+$('#youtube_bericht').val()+'</p></div></div>');
      $('#verdwijn_leeg_bericht2').hide();
    }
    }
  });
  $('#foto_bericht').on('click',function(){
    $('#myFile2').trigger('click');
  });
  $('#berichtKnop3').on('click',function(){
    if ($('#myFile2').val() != "") {
          $('#verdwijn_leeg_bericht2').hide();
            fotonummer++;
            welke_vriend.prepend('<div class="push"><div id="pushPersoon"><h1>Martijn Garritsen:</h1></div><div class="pushTextStuk pushNummer"><a class="foto_popup" id="popup'+ fotonummer +'" href=""><img src="" id="berichtFoto' + fotonummer + '"/></a></div></div>');
            

            $('#myFile2').one('change', function () {
                var file = this.files[0];
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function (e) {
                    $('#berichtFoto' + fotonummer).attr('src', e.target.result);
                    $('#popup' + fotonummer).attr('href', e.target.result);
                };
            });

            $('#myFile2').change();
            $('.foto_popup').magnificPopup({type: 'image'});
        }
        else{
          $('#verdwijn_leeg_bericht2').show();
        }
  });
  $('#vriend_knop1').on('click',function(){
    $('#berichten1').show();
    $('#berichten2').hide();
    $('#berichten3').hide();
    $('#berichten4').hide();
    welke_vriend = $('#berichten1');
    $('#welke_vriend_actief').text('');
    text_welke_vriend = 'Dirk';
    $('#welke_vriend_actief').append(text_welke_vriend);
  });
  $('#vriend_knop2').on('click',function(){
    $('#berichten1').hide();
    $('#berichten2').show();
    $('#berichten3').hide();
    $('#berichten4').hide();
    welke_vriend = $('#berichten2');
    $('#welke_vriend_actief').text('');
    text_welke_vriend = 'Annet';
    $('#welke_vriend_actief').append(text_welke_vriend);
  });
  $('#vriend_knop3').on('click',function(){
    $('#berichten1').hide();
    $('#berichten2').hide();
    $('#berichten3').show();
    $('#berichten4').hide();
    welke_vriend = $('#berichten3');
    $('#welke_vriend_actief').text('');
    text_welke_vriend = 'Jan';
    $('#welke_vriend_actief').append(text_welke_vriend);
  });
  $('#vriend_knop4').on('click',function(){
    $('#berichten1').hide();
    $('#berichten2').hide();
    $('#berichten3').hide();
    $('#berichten4').show();
    welke_vriend = $('#berichten4');
    $('#welke_vriend_actief').text('');
    text_welke_vriend = 'Elisa';
    $('#welke_vriend_actief').append(text_welke_vriend);
  });
});