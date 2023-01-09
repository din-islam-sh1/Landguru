// Testimonial slider starts
$('.testimonials').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="fa-solid fa-arrow-left"></i></button>',

  nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="fa-solid fa-arrow-right"></i></button>',
  });
// Testimonial slider ends


// Blog slider starts
$('.blogs').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  dots: false,
  prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="fa-solid fa-arrow-left"></i></button>',

  nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="fa-solid fa-arrow-right"></i></button>',
  centerMode: true,
  centerPadding: '0px',

  responsive: [
    {
      breakpoint: 755,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,

      }
    },
    {
      breakpoint: 549,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      }
    },
    {
      breakpoint: 315,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      }
    }
  ]
})
// Blog slider ends
