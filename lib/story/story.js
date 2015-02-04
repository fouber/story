(function(global){
    global.story = function(selector, option){

        document.title = option.title + '——糖果屋故事绘本';

        function escapeHTML(str){
            return str.replace(/['"<>&]/g, function(m){
                return '&#' + m.charCodeAt() + ';';
            });
        }

        var html = [];
        html.push( '<div class="swiper-wrapper">' );
        html.push( '<div class="swiper-slide cover">' );
        html.push( '<h1>' + escapeHTML(option.title) + '</h1>' );
        html.push( '</div>' );
        option.pages.forEach(function(item, index){
            html.push( '<div class="swiper-slide">' );
            html.push( '<img src="' + item.img + '"/>' );
            html.push( '<section>' );

            html.push( '<div class="page-content">' );
            html.push( escapeHTML(item.text) );
            html.push( '</div>' );

            html.push( '<div class="page-count">' );
            html.push( index + 1 );
            html.push( '</div>' );

            html.push( '</section>' );
            html.push( '</div>' );
        });
        html.push( '</div>' );

        var dom = document.querySelector(selector);
        dom.innerHTML = html.join('');

        var mySwiper = new Swiper(selector, {
            mode:'horizontal'
        });
        mySwiper.enableKeyboardControl();
    };
})(window);