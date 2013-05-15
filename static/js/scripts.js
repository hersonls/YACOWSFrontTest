//
//
//

!function($, window, document, undefined){
    ({
        mainSlider: function() {
            if( ! $().carousel ) return;
            
            $('#main-slider').carousel({
                interval: 3000
            });
        },
        basicCarousel: function() {
            if( ! $().carousel ) return;
            
            $('#highlight-edition, #most-readed').carousel({
                interval: 5000
            });
        },
        footerSlider: function() {
            if( ! $().jcarousel ) return;

            function magazine_carousel_initCallback(carousel) {
                $('#latest-magazine .left').bind('click', function() {
                    carousel.prev();
                    return false;
                });

                $('#latest-magazine .right').bind('click', function() {
                    carousel.next();
                    return false;
                });
            };

            $(document).ready(function() {
                $("#magazine-jcarousel > ul > li").length
                $("#magazine-jcarousel > ul").jcarousel({
                    scroll: 1,
                    wrap: 'circular',
                    initCallback: magazine_carousel_initCallback,
                    buttonNextHTML: null,
                    buttonPrevHTML: null
                });
            });
        },
        init: function () {
            var that = this;

            $(function () {
                that.mainSlider();
                that.basicCarousel();
                that.footerSlider();
            });
        }
    }).init();

}(window.jQuery || window.ender, window, document);