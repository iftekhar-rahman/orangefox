jQuery(document).ready(function($){

    $(".country-title").click(function() {
        $(this).next('.country-content').slideToggle();
    });

    $(".onoffswitch-label").on("click", function(){
        $(".s-text").toggleClass("active");
    });
  




    

    

});