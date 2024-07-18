var timeCountDown = 6;
var timeCountDownPopup = 7;
var isShowAgain = 1;
var showCloseButton = true;
function returnDefault(data, redefault) {
    return redefault = null == redefault ? 0 : redefault, null == data ? redefault : data
}

function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
  }
}
function loadStream(){
  showCloseButton = false;
  if (jQuery('#player .buttonSkipAds').length > 0) {
      jQuery('#player .buttonSkipAds').remove();
  }
  if (jQuery('#player .aHrefAff').length > 0) {
      jQuery('#player .aHrefAff').remove();
  }
  var playerInstance = jwplayer('player');
  var self = this;
  this.time = 900;
  this.timeShowAds = 900;
  var reconnectTime= 0;
  var showAdsIndex =1;
  try{
    if(localStorage.getItem('adbreak') === null || localStorage.getItem('adbreak') == '[]'){
      localStorage.setItem("adbreak", JSON.stringify(adbreak));
    }

    var banners_adbreak = localStorage.getItem('adbreak');
    var itemsadbreak = JSON.parse(banners_adbreak);
    var itemadbreak = itemsadbreak.shift();
    localStorage.setItem("adbreak", JSON.stringify(itemsadbreak));
  }catch(err){
    console.log(err)
  }
  playerInstance.setup({
    file: urlStream,
    mediaid: "player",
    width: '100%',
    height: '100%',
    autostart: urlStream.includes('youtube') ? false : true,
    repeat: true,
    mute: true,
    flashplayer: "//ssl.p.jwpcdn.com/player/v/8.0.11/jwplayer.flash.swf",
    image: imageDefault
  });

  playerInstance.on('ready', function() {
    loadTextAds();
    loadBannerAds();
    setTimeout(function () {
       loadAds();
    }, 60000);
    setInterval(function() {calcPos();}, 1000);
    loadAdsPopup();
  });
  playerInstance.on('time', function(event) {
    // if(event.position >= self.timeShowAds){
    //   self.timeShowAds = self.time+event.position;
    //   loadAds();
    // }
  });

  playerInstance.on("error", function(){
    setTimeout(function () {
        playerInstance.load({
            file: urlStream,
            image: imageDefault
        });
        playerInstance.play();
    }, 2000);
  });
  playerInstance.on("complete", function(){
      playerInstance.load({file: urlStream});
      playerInstance.play();
  });
}
function loadTvc() {
  try{
    if(localStorage.getItem(keyTvc) === null || localStorage.getItem(keyTvc) == '[]' || localStorage.getItem(keyTvc) == 'undefined'){
      localStorage.setItem(keyTvc, JSON.stringify(adsTvc));
    }
    var tvcPlayer = localStorage.getItem(keyTvc);
    var itemsTvc = JSON.parse(tvcPlayer);
    var itemTvc = itemsTvc.shift();
    localStorage.setItem(keyTvc, JSON.stringify(itemsTvc));
    var playerInstance = jwplayer("player");
    if (adsTvc.length > 0) {
      playerInstance.setup({
        file: itemTvc.file,
        mediaid: "player",
        width: '100%',
        height: '100%',
        autostart: true,
        primary: 'html5',
        mute: false,
        image: imageDefault,
        flashplayer: "//ssl.p.jwpcdn.com/player/v/8.18.0/jwplayer.flash.swf",
      });
      playerInstance.on('error', function () {
        loadStream();
      });
      playerInstance.on('ready', function () {
        jQuery('.jw-controlbar.jw-reset').css('bottom', 0);
        // jQuery('.jw-display-controls').css('z-index', 99999);
      });
      playerInstance.on('firstFrame', function() {
        if (jQuery('#player .buttonSkipAds').length <= 0) {
          jQuery('#player').append('<div class="buttonSkipAds">Bỏ qua sau 5</div>');
        }
        if (jQuery('#player .aHrefAff').length <= 0) {
          jQuery('#player').prepend('<a href="'+itemTvc.link+'" target="_blank" class="aHrefAff"></>');
        }
        countDownAdsPlayer();
      });
      playerInstance.on('complete', function () {
        loadStream();
      });
      setTimeout(function () {
        if (showCloseButton) {
          if (jQuery('#player .buttonSkipAds').length <= 0) {
              jQuery('#player').append('<div class="buttonSkipAds skipAdsButton">Bỏ qua quảng cáo </div>');
          } else {
              // jQuery('#player .buttonSkipAds').text('Bỏ qua quảng cáo');
              jQuery('#player .buttonSkipAds').addClass('skipAdsButton');
          }
        }
      }, 1000 * 8);
    }else {
      loadStream();
    }
  }catch(err){
    loadStream();
    console.log(err)
  }
}
jQuery(document).on('click', '.skipAdsButton', function () {
  loadStream();
});
function genTextButton(full) {
    try {
        if (!adsButton) return;
        full = full == undefined ? false : true;
        if (adsButton) {
          var html = '<div class="odds-button">';
            $.each(adsButton, function(index, value) {
                var tr = value.name_pc !== undefined ? value.name_pc : value.name_mb;
                var textfull = full ? tr : value.name_mb;
                html +=
                    '<a href="' +
                    value.link +
                    '" style="background:'+value.background+';color:'+value.color+'" target="_blank">' +
                    textfull +
                    '</a>';
            });
          html += '</div>';
        }
        if(adsButton2) {
          html += '<div class="odds-button2" style="position: absolute;top: 0px;right: 10px;">';
          $.each(adsButton2, function(index, value) {
            html += '<a href="'+value.link+'" target="_blank"><img src="'+value.image+'" height="70" /></a>';
          });
          html +='</div>';
        }        
        return html;
    } catch (err) {
      console.log(err);
    }
}
function countDownAdsPlayer() {
    timeCountDown = timeCountDown - 1;
    if (showCloseButton) {
      if (timeCountDown > 0) {
        if (jQuery('#player .buttonSkipAds').length > 0) {
          if (!jQuery('#player .buttonSkipAds').hasClass('skipAdsButton')) {
            jQuery('#player .buttonSkipAds').text('Bỏ qua sau '+timeCountDown);
          }
        }
        setTimeout(countDownAdsPlayer, 1000);
    } else {
        jQuery('#player .buttonSkipAds').text('Bỏ qua quảng cáo');
        jQuery('#player .buttonSkipAds').addClass('skipAdsButton');
      }
    }
}
function loadAds() {
  if(localStorage.getItem(keyPlayer) === null || localStorage.getItem(keyPlayer) == '[]'){
    localStorage.setItem(keyPlayer, JSON.stringify(self.adsPlayer));
  }
  var banners_player = localStorage.getItem(keyPlayer);
  var itemsplayer = JSON.parse(banners_player);
  var itemplayer = itemsplayer.shift();
  localStorage.setItem(keyPlayer, JSON.stringify(itemsplayer));
  if (self.adsPlayer && self.adsPlayer.length > 0) {
    jQuery('#player').append('<div class="show-ads-banner"><span class="close-ads" onclick="jQuery(\'.show-ads-banner\').fadeOut();">x</span><a rel="nofollow" href="' + itemplayer.url + '" target="_blank"><img src="' + itemplayer.image + '"  class=""></a></div>');
    setTimeout(function() {
      jQuery('#player .show-ads-banner').remove();
      setTimeout(loadAds, 1000 * 60 * 15);
    }, 1000 * 30);
  }
  
}
function loadTextAds(){
  if(self.adsTextTop.length != 0){
    jQuery('#player').append(self.adsTextTop);
  }
  if(self.adsTextBot.length != 0){
    jQuery('#player').append(self.adsTextBot);
  }
  if($('#player .odds-button').length <= 0){
    $('#player').append(genTextButton());    
  }
}
function loadAdsPopup() {
  if (self.adsPopupPlayer && isShowAgain > 0) {
    if(localStorage.getItem(keyPopup) === null || localStorage.getItem(keyPopup) == '[]'){
      localStorage.setItem(keyPopup, JSON.stringify(self.adsPopupPlayer));
    }
    var popup_players = localStorage.getItem(keyPopup);
    var adsAr = JSON.parse(popup_players);
    var ads = adsAr.shift();
    localStorage.setItem(keyPopup, JSON.stringify(adsAr));
    if (ads) {
      $('#player').append('<div class="popup-ads-banner"><span class="count-down-close-ads turnoff">X</span><a rel="nofollow" href="' + ads['url'] + '" target="_blank"><img src="' + ads['image'] + '" class="w-100"></a></div>');
      var timer = setInterval(function () {
          if ($('.popup-ads-banner .count-down-close-ads').length > 0) {
              $(".popup-ads-banner .count-down-close-ads").html(function (i, html) {
                  if (parseInt(html) > 1) {
                      return parseInt(html) - 1;
                  } else {
                      clearTimeout(timer);
                      $(this).addClass('turnoff');
                      $('.popup-ads-banner').remove();
                  }
              });
          } else {
              clearTimeout(timer);
          }
      }, 7000);
    }
  }
}
function calcPos() {
  try {
      if($('#player .banner-bottom').length !== 0) {
          var buttonH = jQuery('#player .odds-button').outerHeight() ?? 0;
          var bannerH = jQuery('#player .banner-bottom').outerHeight() ?? 0;
          var action = jQuery('.jw-controlbar.jw-reset').outerHeight() ?? 0;
          var width = jQuery(document).width() > 540 ? 10 : 5;
          jQuery('#player .odds-button').css('bottom',bannerH+width);
          jQuery('.jw-controlbar.jw-reset').css('bottom',bannerH+buttonH+width);
      }
  } catch (error) {
      
  }
}

function loadBannerAds() {
  try {
    if(jQuery('#player .banner-bottom').length == 0) {
        jQuery('#player').append('<div class="banner-bottom"><a rel="nofollow" href="'+adsLink+'" target="_blank"><img src="https://i-imgur-com.cdn.ampproject.org/i/s/r2.plvb.xyz/uploads/8234jha.gif"  class=""></a></div>');
    }
  } catch (error) { }
}

jQuery(document).ready(function($) {
  loadTvc();
});
$(document).on('click', '.count-down-close-ads.turnoff', function () {
    $(this).parents('.popup-ads-banner').remove();
    if (adsPopupPlayer && isShowAgain > 0) {
        setTimeout(loadAdsPopup, 1000 * 60 * 15);
    }
});
$( window ).resize(function() {
  calcPos();
});