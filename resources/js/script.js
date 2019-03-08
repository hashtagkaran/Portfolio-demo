$(document).ready(function(){

  $(".image-popup").magnificPopup({
  		type: 'image'
  	});
    $(".popup-link-1").magnificPopup({
      removalDelay: 300,
      // mainClass: 'mfp-fade',
      type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'mfp-fade'
    });

/*---project first dialog box js-----*/
    $(".project-popup-1").magnificPopup({
      removalDelay: 300,
      // mainClass: 'mfp-fade',
      type: 'inline',

  		fixedContentPos: false,
  		fixedBgPos: true,

  		overflowY: 'auto',

  		closeBtnInside: true,
  		preloader: false,

  		midClick: true,
  		mainClass: 'mfp-fade'
    });

/*---project second dialog box js-----*/
    $(".project-popup-2").magnificPopup({
      removalDelay: 300,
      type: 'inline',

      fixedContentPos: false,
      fixedBgPos: true,

      overflowY: 'auto',

      closeBtnInside: true,
      preloader: false,

      midClick: true,
      mainClass: 'mfp-fade'
    });

    /*---project Third dialog box js-----*/
    $(".project-popup-3").magnificPopup({
      removalDelay: 300,
      type:'inline',

      // fixedContentPos: true,
      // fixedBgPos: false,
      //
      // overflowY: 'auto',
      // //
      // // closeBtnInside: true,
      // // preloader: false,
      // //
      // // midClick: true,
      mainClass: 'mfp-fade'
    });

    $(".education-box-1").magnificPopup({
      type: 'inline',
      removalDelay:300,
      mainClass: 'mfp-fade'
    });

    $(".education-box-2").magnificPopup({
      type: 'inline',
      removalDelay:300,
      mainClass: 'mfp-fade'
    });

    $(".education-box-3").magnificPopup({
      type: 'inline',
      removalDelay:300,
      mainClass: 'mfp-fade'
    });

    $(".education-box-4").magnificPopup({
      type: 'inline',
      removalDelay:300,
      mainClass: 'mfp-fade'
    });


    /*------ Experience box details----------*/

    // box-1
    $(".experience-box-1").magnificPopup({
      type: 'inline',
      removalDelay:300,
      mainClass: 'mfp-fade'
    });

    // box-2
    $(".experience-box-2").magnificPopup({
      type: 'inline',
      removalDelay:300,
      mainClass: 'mfp-fade'
    });

    // box-3
    $(".experience-box-3").magnificPopup({
      type: 'inline',
      removalDelay:300,
      mainClass: 'mfp-fade'
    });




});
