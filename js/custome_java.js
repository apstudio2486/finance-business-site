$(document).ready(function(){

			// Main Banner

				$('#banner').owlCarousel({
				    loop:true,
				    nav:false,
				    autoplay:true,
					autoplayTimeout:5000,
					autoplayHoverPause:true,
					smartSpeed:365,
				    responsive:{
				        0:{
				            items:1
				        },
				        600:{
				            items:3
				        },
				        1000:{
				            items:1
				        }
				    }
				})

				var owl = $('#banner');
				owl.owlCarousel();
				// Listen to owl events:
				owl.on('changed.owl.carousel', function(event) {
				    new WOW().init();	
				})


				// service_slider_banner

				$('#service_slid').owlCarousel({
				    stagePadding:10,
				    loop:true,
				    margin:30,
				    mousedrag:true,
				    autoplay:true,
					autoplayTimeout:5000,
					smartSpeed:365,
				    nav:false,
				    responsive:{
				        0:{
				            items:1
				        },
				        600:{
				            items:2
				        },
				        1000:{
				            items:3
				        }
				    }
				})


				// Blog_slider_banner

				$('#Blog_slid').owlCarousel({
				    stagePadding:10,
				    loop:true,
				    margin:30,
				    mousedrag:true,
				    //dots:false,
				    autoplay:true,
					autoplayTimeout:5000,
					smartSpeed:365,
				    nav:false,
				    responsive:{
				        0:{
				            items:1
				        },
				        600:{
				            items:2
				        },
				        1000:{
				            items:3
				        }
				    }
				})


				// Sponcer_slid_banner

				$('#Sponcer_slid').owlCarousel({
				    stagePadding:10,
				    loop:true,
				    margin:30,
				    mousedrag:true,
				    dots:false,
				    autoplay:true,
					autoplayTimeout:5000,
					smartSpeed:365,
				    nav:false,
				    responsive:{
				        0:{
				            items:1
				        },
				        600:{
				            items:2
				        },
				        1000:{
				            items:4
				        }
				    }
				})

				// review_slid_banner

				$('#review').owlCarousel({
				    loop:true,
				    margin:10,
				    autoplay:true,
				    autoplayTimeout:5000,
				    nav:false,
				    responsive:{
				        0:{
				            items:1
				        },
				        600:{
				            items:3
				        },
				        1000:{
				            items:1
				        }
				    }
				})


				// side_review_slid_banner

				$('#side_review').owlCarousel({
				    loop:true,
				    margin:20,
				    dots:false,
				    dotsEach:false,
				    autoplay:true,
				    autoplayTimeout:5000,
				    nav:false,
				    responsive:{
				        0:{
				            items:1
				        },
				        600:{
				            items:3
				        },
				        1000:{
				            items:1
				        }
				    }
				})

				// About Page Slider

				$('#about').owlCarousel({
				    loop:true,
				    margin:10,
				    autoplay:true,
				    autoplayTimeout:3000,
				    nav:false,
				    dots:false,
				    responsive:{
				        0:{
				            items:1
				        },
				        600:{
				            items:3
				        },
				        1000:{
				            items:1
				        }
				    }
				})

				// FAQ Page scroler
				  $('.img_scrol').hide();

				 $(".click_scrol").click(function(){

					 $(this).parent('.drag_opt').find(".img_scrol").slideToggle("slow");
					
				  });

});
