jQuery(document).ready(function () {

    jQuery('.progress-bar').each(function () {
        jQuery(this).find('.progress-content').animate({
            width: jQuery(this).attr('data-percentage')
        }, 2000);

        jQuery(this).find('.progress-number-mark').animate(
            { left: jQuery(this).attr('data-percentage') },
            {
                duration: 2000,
                step: function (now, fx) {
                    var data = Math.round(now);
                    jQuery(this).find('.percent').html(data + '%');
                }
            });
    });
});
$(window).load(function(){
    $("#fade-example .js-tabs-link").aniTabs();
    $("#slide-example .js-tabs-link").aniTabs({animation:"slide", animationSpeed:600, dragSpeed:600});
    $("#custom-example .js-tabs-link").aniTabs({animation:"slide", animationSpeed:800, slideDirection:"right", drag:false, autoHeight:false});
    $("#multiple-example .js-tabs-link").aniTabs();
    $("#multiple-inner .js-tabs-link").aniTabs({animation:"slide"});
})
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();