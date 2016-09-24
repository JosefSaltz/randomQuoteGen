$(document).ready(function(){

  var animatedDots = $('<span class="animated">. </span><span class="animated a1">. </span><span class="animated a2">. </span><span class="animated a3">. </span>');

  $("button").on("click", function(){

    $("button").fadeOut();
    $(".Quote").fadeOut();
    $(".Author").fadeOut();
    $("hr").fadeOut();
    $(".twitter-share-button").fadeOut();
    $.ajax("https://andruxnet-random-famous-quotes.p.mashape.com/",{

      type:"POST",

      data: {
        cat:"famous"
      },

      headers: {
        "X-Mashape-Key": '4moHif8l2Bmsh6tPNX0xPUEbGdjFp1JM2gljsnRX9sl8zb8785'
      },

      dataType: "JSON",

      //beforeSend: function() {
        //$(".Quote").html(animatedDots);
      //}

      success: function(response){
        $(".Quote").hide().html(response.quote).fadeIn(600);
        $(".Author").hide().html("-" + response.author).fadeIn(600);
        $("hr").hide().fadeIn(600);
        $("button").hide().fadeIn(600);
        $('.twitter-share-button').remove();
        $("#QuotePanel").append('<a href="https://twitter.com/share" class="twitter-share-button" data-text="'+response.quote+' -'+response.author+'" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>').hide().fadeIn(600);
      }
    })

  })
});
