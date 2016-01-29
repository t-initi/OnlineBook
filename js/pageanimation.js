	$(document).ready(function(){
		$('header img').hide().slideDown(2000);
		//alert($(window).height());
		$(window).scroll( function(){
			var par = $('.title, .paragraph');
			var mainPanelHeight = $('.mainPanel').height();
			//alert(mainPanelHeight);

			/** Checking the location of each paragraph**/
			par.each( function (i){
				var obj_top = $(this).offset().top;
				var obj_bottom = $(this).offset().top + $(this).outerHeight;
				var window_bottom = $(window).scrollTop() + $(window).height;
				//var window_bottom2 = $(window).scrollBottom() + $(window).height;

				/** Fade paragraph if paragraph is completely in the window**/
				if(window_bottom > obj_bottom){
					$(this).animate({'opacity':'1'},1000);
					//$('.tst').html($(window).height());	
				}

				


			});


		});

	});