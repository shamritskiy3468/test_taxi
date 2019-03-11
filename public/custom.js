/*
Copyright (c) 2017
------------------------------------------------------------------
[Master Javascript]

Project:	organic food store

-------------------------------------------------------------------*/

(function ($) {
	"use strict";
	var organic = {
		initialised: false,
		version: 1.0,
		organic: false,
		init: function () {

			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}

			/*-------------- organic Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.Map_function();
			this.smooth_scroll();
			this.tesimonial_slider();
			this.index_slider();
			this.responsive_menu();
			this.mail_function();
			this.magnific_popup();
			this.wow();
			this.brand_slider();
			this.search_box();
		},
		
		/*-------------- organic Functions definition ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/
			Map_function: function () {
			   if($(".of_map").length){
				  $( ".of_map" ).each(function( index ) {
				  var id = $(this).attr("id");
				  var address = $(this).attr("data-address");
				  $(this).googleMap({
				   scrollwheel:true
				  });
				  $(this).addMarker({
					//coords: [22.9622672, 76.05079490000003] // for using lat long for marker
					address:address
				  });
				}); 
			   }
			  },
			smooth_scroll: function(){
				 jQuery.scrollSpeed(100, 800);
			},
			tesimonial_slider: function(){
				$('.testimonial_wrapper .owl-carousel').owlCarousel({
					loop:true,
					margin:30,
					nav:false,
					dots:true,
					items:1,
					autoplay:true,
					autoplayTimeout:3000,
					autoplayHoverPause:false,
					responsive:{
						0:{
							items:1
						},
						600:{
							items:1
						},
						1000:{
							items:1
						}
					},
					 animateOut: 'slideOutDown',
					animateIn: 'flipInX',
					smartSpeed:550
				});
			},
			index_slider: function(){
				var tpj=jQuery;
			
			var revapi467;
			tpj(document).ready(function() {
				if(tpj("#rev_slider_467_1").revolution == undefined){
					revslider_showDoubleJqueryError("#rev_slider_467_1");
				}else{
					revapi467 = tpj("#rev_slider_467_1").show().revolution({
						sliderType:"carousel",
						jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
						sliderLayout:"fullwidth",
						dottedOverlay:"none",
						delay:9000,
						navigation: {
							keyboardNavigation:"off",
							keyboard_direction: "horizontal",
							mouseScrollNavigation:"off",
 							mouseScrollReverse:"default",
							onHoverStop:"off",
							arrows: {
								style:"erinyen",
								enable:true,
								hide_onmobile:true,
								hide_under:600,
								hide_onleave:true,
								hide_delay:200,
								hide_delay_mobile:1200,
								tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div>    <div class="tp-arr-img-over"></div>	<span class="tp-arr-titleholder">{{title}}</span> </div>',
								left: {
									h_align:"left",
									v_align:"center",
									h_offset:30,
									v_offset:0
								},
								right: {
									h_align:"right",
									v_align:"center",
									h_offset:30,
									v_offset:0
								}
							}
							,
							thumbnails: {
								style:"gyges",
								enable:true,
								width:60,
								height:60,
								min_width:60,
								wrapper_padding:0,
								wrapper_color:"transparent",
								wrapper_opacity:"1",
								tmp:'<span class="tp-thumb-img-wrap">  <span class="tp-thumb-image"></span></span>',
								visibleAmount:5,
								hide_onmobile:true,
								hide_under:800,
								hide_onleave:false,
								direction:"horizontal",
								span:false,
								position:"inner",
								space:5,
								h_align:"center",
								v_align:"bottom",
								h_offset:0,
								v_offset:20
							}
						},
						carousel: {
							horizontal_align: "center",
							vertical_align: "center",
							fadeout: "off",
							maxVisibleItems: 3,
							infinity: "on",
							space: 0,
							stretch: "off"
						},
						viewPort: {
							enable:true,
							outof:"pause",
							visible_area:"80%",
							presize:false
						},
						responsiveLevels:[1240,1024,778,480],
						visibilityLevels:[1240,1024,778,480],
						gridwidth:[1240,1024,778,480],
						gridheight:[600,600,500,400],
						lazyType:"none",
						parallax: {
							type:"mouse",
							origo:"slidercenter",
							speed:2000,
							levels:[2,3,4,5,6,7,12,16,10,50,46,47,48,49,50,55],
							type:"mouse",
						},
						shadow:5,
						spinner:"off",
						stopLoop:"off",
						stopAfterLoops:-1,
						stopAtSlide:-1,
						shuffle:"off",
						autoHeight:"off",
						hideThumbsOnMobile:"on",
						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						debugMode:false,
						fallbacks: {
							simplifyAll:"off",
							nextSlideOnWindowFocus:"off",
							disableFocusListener:false,
						}
					});
				}
			});	
			},
			responsive_menu:function(){
				$("#toggle").click(function() {
				  $(this).toggleClass("on");
				  $("#menu").slideToggle();
				});
			},
			mail_function: function(){
				$("#submit").click(function(){
					var firstname = $('#name').val();
					var subject = $('#subject').val();
					var message = $('#message').val();
					var phone = $('#phone').val();
					var email = $('#email').val();
					var letters = /^[A-Za-z]+$/;
					var number = /^[0-9]+$/;
					var mail_letters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
					
					if (firstname != "" || message != "" || phone != "" || email != "" || subject != "") {
						if(firstname.match(letters) || subject.match(letters)) { 
							if(phone.match(number) && phone.length <= 10) {
								if(email.match(mail_letters)){
									$.ajax({
									method : 'post',
									url : 'a_mail.php',
									data :  {'first_name' : firstname ,
											  'subj' : subject,
											  'msg' : message,
											  'phone_number' : phone,
											  'e_mail' : email,
											  },
								   }).done(function(resp){
									   console.log(resp);
									   if( resp == 1){
											document.getElementById("error").style.color = "green";
										   document.getElementById("error").innerHTML = "Mail Send Successfully";
											$('#name').val('');
											$('#subject').val('');
										   $('#message').val('');
										   $('#phone').val('');
										   $('#email').val('');
									   }else{
											document.getElementById("error").style.color = "red";
										    document.getElementById("error").innerHTML = "Mail not Send";
									   } });
								}else{
									document.getElementById("error").style.color = "red";
									document.getElementById("error").innerHTML = "Please Fill The  Correct Mail Id";
								}
							}else{
								document.getElementById("error").style.color = "red";
								document.getElementById("error").innerHTML = "Please Fill The  Correct Number";
							}
						}else
						{	document.getElementById("error").style.color = "red";
							document.getElementById("error").innerHTML = "Please Fill The Correct Name";
						}   
					}else{
						document.getElementById("error").style.color = "red";
						document.getElementById("error").innerHTML = "Please Fill All Detail";
					}
				});
			},
			magnific_popup: function(){
				if($(".popup").length > 0){
					$(".popup").magnificPopup({
					  type: 'image',
					  mainClass: 'mfp-with-zoom', // this class is for CSS animation below

					  zoom: {
						enabled: true, // By default it's false, so don't forget to enable it

						duration: 300, // duration of the effect, in milliseconds
						easing: 'ease-in-out', // CSS transition easing function
						opener: function(openerElement) {
						  return openerElement.is('a') ? openerElement : openerElement.find('img');
						}
					  },
					  gallery: {
						  enabled:true
						}

					});
				}
			},
			wow: function(){
				 new WOW().init();
			},
			brand_slider: function(){
				$('.brands_slider .owl-carousel').owlCarousel({
				    loop:true,
					margin:30,
					nav:false,
					dots:false,
					items:5,
					autoplay:false,
					autoplayTimeout:3000,
					autoplayHoverPause:false,
					responsive:{
						0:{
							items:1
						},
						600:{
							items:3
						},
						1000:{
							items:5
						}
					},
					 animateOut: 'fadeInRight',
					animateIn: 'fadeInLeft',
					smartSpeed:550
				});
			},
			search_box: function(){
				$('.of_search > a').on('click', function(){
					$('.of_menu > .form-control').toggleClass('show');
				});
			}
	};
	
	$(document).ready(function() {
	 organic.init();
	 });
	 
	 $(window).load(function(){
		 $(".loader_wrapper").hide();
		 
		var h=($( window ).height());
		$(".ls_commingsoon_wrapper").css("height",h);
		$(".coming_soon").css("height",h);
	 });
	 $(window).scroll(function() {
		//After scrolling 100px from the top...
		if ( $(window).scrollTop() >= 50 ) {
			$('.of_header_wrapper').addClass("fixed_header");

		//Otherwise remove inline styles and thereby revert to original stying
		} 
		else{
			$('.of_header_wrapper').removeClass("fixed_header");
		}
	});

})(jQuery);



	