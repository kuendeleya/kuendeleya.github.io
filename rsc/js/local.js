(function($){$('.hamburger-menu').on('click', function(){$(this).toggleClass('open'); $('.site-navigation').toggleClass('show'); }); var mySwiper = new Swiper('.hero-slider', {slidesPerView:1, spaceBetween:0, loop:true, pagination:{el:'.swiper-pagination', clickable:true, renderBullet:function(index, className){return '<span class="' + className + '">0' + (index + 1) + '</span>'; }, }, navigation:{nextEl:'.swiper-button-next', prevEl:'.swiper-button-prev'}}); var causesSlider = new Swiper('.causes-slider', {slidesPerView:3, spaceBetween:30, navigation:{nextEl:'.swiper-button-next', prevEl:'.swiper-button-prev'}, breakpoints:{1200:{slidesPerView:2, spaceBetween:30, }, 768:{slidesPerView:1, spaceBetween:0, }}}); $('.accordion-wrap.type-accordion').collapsible({accordion:true, contentOpen:0, arrowRclass:'arrow-r', arrowDclass:'arrow-d'}); $('.accordion-wrap .entry-title').on('click', function(){$('.accordion-wrap .entry-title').removeClass('active'); $(this).addClass('active'); }); $(function(){$('.tab-content:first-child').show(); $('.tab-nav').bind('click', function(e){$this = $(this); $tabs = $this.parent().parent().next(); $target = $($this.data("target")); $this.siblings().removeClass('active'); $target.siblings().css("display", "none"); $this.addClass('active'); $target.fadeIn("slow"); }); $('.tab-nav:first-child').trigger('click'); }); $('#loader_1').circleProgress({startAngle: - Math.PI / 4 * 2, value:1, size:156, thickness:3, fill:{gradient:["rgb(88,212,38)", "rgb(88,170,38)"]}}).on('circle-animation-progress', function(event, progress){$(this).find('strong').html(Math.round(4)); }); $('#loader_2').circleProgress({startAngle: - Math.PI / 4 * 2, value:1, size:156, thickness:3, fill:{gradient:["rgb(88,212,38)", "rgb(88,170,38)"]}}).on('circle-animation-progress', function(event, progress){$(this).find('strong').html(Math.round(35)); }); $('#loader_3').circleProgress({startAngle: - Math.PI / 4 * 2, value:1, size:156, thickness:3, fill:{gradient:["rgb(88,212,38)", "rgb(88,170,38)"]}}).on('circle-animation-progress', function(event, progress){$(this).find('strong').html(Math.round(75)); }); $('#loader_4').circleProgress({startAngle: - Math.PI / 4 * 2, value:0.65, size:156, thickness:3, fill:{gradient:["rgb(88,212,38)", "rgb(88,170,38)"]}}).on('circle-animation-progress', function(event, progress){$(this).find('strong').html(Math.round(65 * progress) + '<i>%</i>'); }); $(".start-counter").each(function(){var counter = $(this); counter.countTo({formatter:function(value, options){return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ','); }}); }); $('.featured-fund-raised-bar').barfiller({barColor:'#ff5a00', duration:1500}); $('.fund-raised-bar-1').barfiller({barColor:'#ff5a00', duration:1500}); $('.fund-raised-bar-2').barfiller({barColor:'#ff5a00', duration:1500}); $('.fund-raised-bar-3').barfiller({barColor:'#ff5a00', duration:1500}); $('.fund-raised-bar-4').barfiller({barColor:'#ff5a00', duration:1500}); $('.fund-raised-bar-5').barfiller({barColor:'#ff5a00', duration:1500}); $('.fund-raised-bar-6').barfiller({barColor:'#ff5a00', duration:1500}); let $container = $('.portfolio-container'); let $item = $('.portfolio-item'); $item.slice(0, 9).addClass('visible'); $('.load-more-btn').on('click', function(e){e.preventDefault(); $('.portfolio-item:hidden').slice(0, 9).addClass('visible'); }); })(jQuery);