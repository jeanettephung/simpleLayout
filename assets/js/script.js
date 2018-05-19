window.onload = function() {
    /**
     * On desktop view, navigation bar will transition between two displays
     * depending on the scroll-y position 
     */
    var initNavScroll = function() {
        window.onscroll = function() {
            var el_header = document.getElementsByTagName('header')[0];
            var int_scrollPos = window.pageYOffset;
            
            if (int_scrollPos === 0) {
                el_header.classList.remove('header--scroll');
            } else {
                el_header.classList.add('header--scroll');
            }
        };
    };




    initNavScroll();
}