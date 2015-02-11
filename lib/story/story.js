(function(global){
    global.story = function(selector, option){

        document.title = option.title + '——糖果屋故事绘本';

        function escapeHTML(str){
            return str.replace(/['"<>&]/g, function(m){
                return '&#' + m.charCodeAt() + ';';
            });
        }
        var isSupportTouch = 'ontouchend' in document;
        var tips = isSupportTouch ? __uri('swipe.gif') : __uri('arrows.gif');
        var classes = 'tips' + (isSupportTouch ? ' middle' : '');
        var html = [];
        html.push( '<div class="swiper-wrapper">' );
            html.push( '<div class="swiper-slide cover">' );
                html.push( '<h1>' + escapeHTML(option.title) + '</h1>' );
                html.push( '<div class="' + classes + '"><img src="' + tips + '"></div>' );
            html.push( '</div>' );
            option.pages.forEach(function(item, index){
                html.push( '<div class="swiper-slide">' );
                    html.push( '<img class="center shadow pic" src="' + item.img + '"/>' );
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
            html.push( '<div class="swiper-slide cover">' );
                html.push( '<div class="center share">' );
                    html.push( '<img class="shadow qrcode" src="' + __uri('../images/qrcode.jpg') + '">' );
                    html.push( '<div class="slogan">' );
                        html.push( '<div>欢迎关注微信公众号</div>' );
                        html.push( '<strong>糖果屋故事绘本</strong>' );
                        html.push( '<div>每天一篇有趣的手绘故事</div>' );
                    html.push( '</div>' );
                html.push( '</div>' );
                // html.push( '<div class="go-left">❮</div>' );
            html.push( '</div>' );
        html.push( '</div>' );

        var dom = document.querySelector(selector);
        dom.innerHTML = html.join('');

        var mySwiper = new Swiper(selector, {
            mode:'horizontal'
        });
        mySwiper.enableKeyboardControl();
    };
})(window);