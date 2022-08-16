

const seanBot = () => {
  var $id = 0;

  $(".js-beacon").click(function(e) {
    e.preventDefault();
    Beacon("open");
    $(".js-beacon").blur();
    $("#c-seanbot").addClass("hide");
  });

  $(".js-seanbot").click(function(e) {
    e.preventDefault();
    Beacon("close");
    $(".js-seanbot").blur();
    $("#c-seanbot").removeClass("hide");
    $(".c-fab").addClass("hide");

    $("#c-new-content").empty();
    $(".c-seanbot__content .c-seanbot__options").removeClass("hide").addClass("active");
  });

  $(".js-seanbot-exit").click(function(e) {
    e.preventDefault();
    Beacon("close");
    $(".js-seanbot-exit").blur();
    $("#c-seanbot").addClass("hide");
    $(".c-fab").removeClass("hide");

    setTimeout(function () {
      $("#c-new-content").empty();
      $(".c-seanbot__content .c-seanbot__options").removeClass("hide").addClass("active");
    }, 100 );

  });

  $(".c-seanbot__button").click(function(e) {
    var $this = $(this);
    e.preventDefault();

    // var $delimiter = "_";
    // var $num = $this.attr("id").split($delimiter)[1];
    var $data = $this.data("question");
    var $answer = "#c-seanbot-q .c-seanbot__answer--" + $data;
    var $updated = "c-seanbot__answer--" + $id;
    var $location = "#c-new-content";
    var $buttons = ".c-seanbot__options";

    $this.closest($buttons).removeClass("active").addClass("hide");
    $($answer).clone(true,true).addClass("active").attr('id', $updated).appendTo($location);

    var $animationId = "#" + $updated + " > div";

    $($animationId).each(function(index){
        var $this = $(this);
        setTimeout(function () {
          $this.addClass("active");

          var msgDiv = $("#c-seanbot-content");
          msgDiv.scrollTop = msgDiv.scrollHeight;

          setTimeout(function () {
            $(msgDiv).scrollTop($(msgDiv)[0].scrollHeight);
          }, 10 );

        }, index*1500);
      });

    $id++;
    console.log($id);

  });
}


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

const headerEye = () => {

  var eyeSvg = {
    targets: '.c-hero__eye svg',
    opacity: 1,
    translateY: [30,0],
    delay: 500
  };

  anime({
    targets: '.c-hero__eye__inner',
    translateY: [-20,0],
    direction: 'alternate',
    duration: 2000,
    autoplay: true,
    loop: true,
    easing: 'easeInOutQuad'
  });

  var eyeLashes = {
    targets: '.c-hero__eye svg .c-eyelash',
    opacity: 1,
    delay: anime.stagger(200, {easing: 'cubicBezier(.5, .05, .1, .3)'})
  };

  var timelineEyeIntro = anime.timeline();
  timelineEyeIntro.add(eyeSvg).add(eyeLashes);

  // main eye animations

  var eyeCornea = {
    targets: '.c-cornea',
    translateX: -40,
    autoplay: true,
    duration: 3000,
    delay: 1500,
    easing: 'easeInOutExpo'
  };

  var eyeCorneaUp = {
    targets: '.c-cornea',
    translateY: -10,
    autoplay: true,
    duration: 100,
    easing: 'easeInOutExpo'
  };

  var eyeCorneaMid = {
    targets: '.c-cornea',
    translateY: 0,
    autoplay: true,
    duration: 50,
    delay: 1000,
    easing: 'easeInOutExpo'
  };

  var eyeCorneaBottom = {
    targets: '.c-cornea',
    translateY: 10,
    autoplay: true,
    duration: 50,
    delay: 1000,
    easing: 'easeInOutExpo'
  };

  var eyeCorneaStart = {
    targets: '.c-cornea',
    translateX: 0,
    translateY: 0,
    autoplay: true,
    duration: 1000,
    delay: 1000,
    easing: 'easeInOutExpo'
  };

  var eyeCorneaDown = {
    targets: '.c-cornea',
    translateY: 80,
    scale: 0.7,
    autoplay: true,
    duration: 500,
    delay: 3000,
    easing: 'easeInOutExpo'
  }

  var eyeRollUp = {
    targets: '.c-cornea',
    translateY: -30,
    autoplay: true,
    duration: 1300,
    delay: 400,
    easing: 'easeInOutBack'
  }

  var eyeRollDown = {
    targets: '.c-cornea',
    translateY: 0,
    autoplay: true,
    duration: 200,
    easing: 'easeOutBack'
  }

  var eyeCornPanRight = {
    targets: '.c-cornea',
    translateX: 80,
    autoplay: true,
    duration: 2000,
    delay: 200,
    easing: 'easeInOutBack'
  }

  var eyeCorneaReUp = {
    targets: '.c-cornea',
    translateX: 0,
    translateY: 0,
    scale: 1,
    autoplay: true,
    duration: 600,
    delay: 2000,
    easing: 'easeInOutExpo'
  }

  var eyeScale = {
    targets: '.c-hero__eye__scale',
    scale: 4.2,
    duration: 600,
    delay: 1500,
    easing: 'easeOutElastic(1, .8)'
  }

  var eyeScaledZoomLeft = {
    targets: '.c-cornea',
    translateX: -40,
    duration: 2500,
    easing: 'easeInOutExpo'
  }

  var eyeScaledZoomRight = {
    targets: '.c-cornea',
    translateX: 40,
    duration: 2500,
    easing: 'easeInOutExpo'
  }

  var eyeScaledZoomCenter= {
    targets: '.c-cornea',
    translateX: 0,
    duration: 2500,
    easing: 'easeInOutExpo'
  }

  var eyeScaleBack = {
    targets: '.c-hero__eye__scale',
    scale: 1,
    duration: 600,
    delay: 500,
    easing: 'easeInOutExpo'
  }

  var timelineEye = anime.timeline({
    loop: true,
    autoplay: true
  });

  timelineEye.add(eyeCornea)
  .add(eyeCorneaUp)
  .add(eyeCorneaMid)
  .add(eyeCorneaBottom)
  .add(eyeCorneaStart)
  .add(eyeRollUp)
  .add(eyeRollDown)
  .add(eyeCorneaDown)
  .add(eyeCornPanRight)
  .add(eyeCorneaReUp)
  .add(eyeScale)
  .add(eyeScaledZoomLeft)
  .add(eyeScaledZoomRight)
  .add(eyeScaledZoomCenter)
  .add(eyeScaleBack)

}

const navCookie = () => {

  var $hasVisit = localStorage.getItem('site.visted');
  if ($hasVisit == null) {

    var navIntro = {
      targets: '.s-home .c-nav-list__link',
      opacity: 1,
      translateY: [10,0],
      delay: anime.stagger(100, {easing: 'cubicBezier(.5, .05, .1, .3)'})
    };

    var navIntroDelay = {
      targets: '.s-home .c-nav-list__link',
      translateY: [10,0],
      delay: 1000
    };

    var timelineNav = anime.timeline();
    timelineNav.add(navIntroDelay).add(navIntro);

    localStorage.setItem('site.visted', 1);
  } else {
    $(".s-home .c-nav-list__link, .s-home .c-nav-list__link").css("opacity","1");
  };

}

const mosaic = () => {

  $('.js-mosaic').each(function(i){
    var $this = $(this);
    var $data = $this.data("bg");
    var $location = '/images/work/'
    $this.css('background-image', 'url(' + $location + $data + ')');
  });

}

const eyeFollow = () => {

  $("html").mousemove(function(event) {
  var $eye = $(".c-logo__eye");
  var $x = ($eye.offset().left) + ($eye.width() / 2);
  var $y = ($eye.offset().top) + ($eye.height() / 2);
  var $rad = Math.atan2(event.pageX - $x, event.pageY - $y);
  var $rot = ($rad * (180 / Math.PI) * -1) + 180;
  $eye.css({
    '-webkit-transform': 'rotate(' + $rot + 'deg)',
    '-moz-transform': 'rotate(' + $rot + 'deg)',
    '-ms-transform': 'rotate(' + $rot + 'deg)',
    'transform': 'rotate(' + $rot + 'deg)'
  });
});

}

const blobs = () => {

  anime({
    targets: '.c-wip__header',
    opacity: 1,
    delay: 300,
    translateY: [-100,0],
    duration: 1000,
    easing: 'easeInOutExpo'
  });

  anime({
    targets: '.c-wip__blob',
    opacity: 1,
    easing: 'easeInOutBack',
    translateY: [0,-200],
    translateX: [0,100],
    direction: 'alternate',
    duration: 8000,
    autoplay: true,
    loop: true,
    delay: anime.stagger(500)
  });
}

const wipLinks = () => {

  $(".c-wip__timeline-content a").each(function() {
    $(this).attr('target','_blank');
    $(this).attr('rel','nofollow noreferrer');
  });

}


$(document).ready(() => {
  lazyLoad();
  bouncing();
  workBounce();
  eyeFollow();
  headerEye();
  mosaic();
  workHover();
  aHover();
  wipLinks();
  blobs();
  seanBot();
});
