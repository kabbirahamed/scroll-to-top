//JS_here
$(window).scroll(function() {
        if ($(this).scrollTop() > 50 ) {
            $('.scrolltop:hidden').stop(true, true).fadeIn();
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
        }
    });
    $(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".top").offset().top},"1000");return false})});





//adding_html:======================>
<!-- scroll-to top-section-start -->
            <div class="top"></div>
                <div class='scrolltop'>
                    <div class='scroll icon'><i class="fas fa-arrow-up"></i></div>
                </div>
 <!-- scroll-to top-section-end -->
 
 
 
 
//adding_css:=======================>
/*  scroll css section here*/
.scrolltop .icon {
    font-size: 30px;
    text-align: center;
    margin-top: 5px;
    color: #fff;
    opacity: .5;
}

.scrolltop {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgb(15, 127, 155);
    display: none;
    cursor: pointer;
    opacity: .5;
}

//the_end