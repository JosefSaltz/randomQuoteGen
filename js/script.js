$(document).ready(function(){
  $("button").on("click", function(){

    $("button").fadeOut();
    $(".Quote").fadeOut();
    $(".Author").fadeOut();
    $("hr").fadeOut();

    $.ajax("https://andruxnet-random-famous-quotes.p.mashape.com/",{

      type:"POST",

      data: {
        cat:"famous"
      },

      headers: {
        "X-Mashape-Key": '4moHif8l2Bmsh6tPNX0xPUEbGdjFp1JM2gljsnRX9sl8zb8785'
      },

      dataType: "JSON",

      success: function(response){
        $(".Quote").hide().html(response.quote).fadeIn(600);
        $(".Author").hide().html("-" + response.author).fadeIn(600);

        $("hr").hide().fadeIn(600);
        $("button").hide().fadeIn(600);
      }
    })

  })
});
