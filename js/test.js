


const lazyLoad = () => {
  var myLazyLoad = new LazyLoad();
}

const workHover = () => {
  $(".js-work").hover(function () {
    var $this = $(this);
    $(".c-nav").addClass("show-work");
    $(".c-nav__work").addClass("work-is-visible");

  });

  $(".s-nav").mouseleave(function(){
    $(".c-nav").removeClass("show-work");
    $(".c-nav__work").removeClass("work-is-visible");
  });

}

const aHover = () => {
  $("a").hover(
  function() {
    $(".c-nav-list__link--logo").addClass( "is-active" );
  }, function() {
    $(".c-nav-list__link--logo").removeClass( "is-active" );
  }
);
}

const workBounce = () => {

  $(window).bind("load", function() {

    $(".c-loader").addClass("loaded");
    anime({
      targets: '.js-bounce-in',
      opacity: 1,
      translateY: [20,0],
      delay: anime.stagger(200)
    });
  });
}

const bouncing = () => {

  var delayInMilliseconds = 500;

  setTimeout(function() {
    anime({
      targets: '.js-bounce-in-home',
      opacity: 1,
      translateY: [20,0],
      delay: anime.stagger(200)
    });
}, delayInMilliseconds);

}



const wipLinks = () => {

  $(".c-wip__timeline-content a").each(function() {
    $(this).attr('target','_blank');
    $(this).attr('rel','nofollow noreferrer');
  });

}

$(document).ready(function() {
    $('.cute-robot-v1').bind('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('he');
    });
});

$(document).ready(() => {
  lazyLoad();
  bouncing();
  workBounce();
  workHover();
  aHover();
  wipLinks();
});
