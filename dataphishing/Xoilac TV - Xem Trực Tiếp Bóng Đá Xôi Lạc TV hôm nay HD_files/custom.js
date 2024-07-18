function setAdsCookie(key, hours, value) {
    hours = hours === undefined ? 6 : hours;
    value = value === undefined ? 1 : value;
    var date = new Date();
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);
    console.log(date);
    jQuery.cookie(key, value, { expires: date });
  }
function getAdsCookie(key) {
    return jQuery.cookie(key);
  }
function checkAdsRedirectPopup(index) {
    if ( index === void 0 ) index=0;

    try {
      if (jQuery('.redirectPopup').length > 0) {

          index = index === undefined ? 0 : index;
          if (!window.adsRedirectPopups)
              { return; }

          // var arAdsRedirectPopups = $.parseJSON(adsRedirectPopups);
          // if (!arAdsRedirectPopups)
          //     return;
          var adsRedirectPopup = window.Shuffle(window.adsRedirectPopups)[index];
          if (!adsRedirectPopup)
              { return; }
          var cookieName = 'adsRedirectPopup2';
          if (getAdsCookie(cookieName) === undefined || getAdsCookie(cookieName) == null) {
              setAdsCookie(cookieName, 1);
              var link = adsRedirectPopup.link;
              jQuery('.redirectPopup').each(function() {
                  jQuery(this).attr('target', '_blank');
                  jQuery(this).attr('rel', 'nofollow');
                  jQuery(this).attr('data-href', jQuery(this).attr('href'));
                  jQuery(this).attr('href', link);
                  jQuery(this).addClass('redirectA');
              });
          } else {
              if ((index + 1) < window.adsRedirectPopups.length) {
                  checkAdsRedirectPopup((index + 1));
              }
          }
      }
    } catch (err) {console.log(err);}
  }
  checkAdsRedirectPopup();
  const scrollButtonFunction = () => {
    const scrollBtn = jQuery(".scroll-btn");
    const menuContainer = jQuery(".wrap-nav .nav");
    let isScrolledRight = false;
  
    if (scrollBtn.length) {
      scrollBtn.on("click", () => {
        if (menuContainer.length) {
          const scrollWidth = menuContainer[0].scrollWidth;
          const scrollPosition = isScrolledRight ? 0 : scrollWidth;
          menuContainer.animate({ scrollLeft: scrollPosition }, "slow");
          isScrolledRight = !isScrolledRight;
          scrollBtn.toggleClass("scroll-right-btn scroll-left-btn");
        }
      });
    }
  };
  scrollButtonFunction();
  jQuery(document).ready(function($) {
    jQuery(document).on('click', '.redirectA', function() {
      var popupEnabled = $.cookie('adsPopup');
      var href = jQuery(this).attr('data-href');
      if (popupEnabled && popupEnabled !== undefined) {
          window.location.href = href;
          return false;
      } else {
          setTimeout(function() {
              window.location.href = href;
          }, 2000);
      }
    });
});