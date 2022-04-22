var swiper = new Swiper(".banner_swiper", {
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
   });

      $(".toggle_Btn").click(function() {
        $(".toggle_Btn").toggleClass("navbarActive");
      });
