
$(document).ready(function(){

    $(".bookcase").click(function(){

      $(".bookcase").hide();
      $(".bookcaseMove").show();
      $(".bookcaseBox").show();

    })

    $(".bat").click(function(){

        $(".bat").hide();
        $(".batMove").show();
        $(".batBox").show();

      })

    $(".cup").click(function(){

        $(".cup").hide();
        $(".cupMove").show();
        $(".cupBox").show();

      })
      $(".bed").click(function(){

        $(".bed").hide();
        $(".bedMove").show();
        $(".bedBox").show();

      })

      $(".bigbed").click(function(){

          $(".bigbed").hide();
          $(".bigbedMove").show();
          $(".bigbedBox").show();

        })

      $(".book").click(function(){

          $(".book").hide();
          $(".bookMove").show();
          $(".bookBox").show();

        })


});
// var a =0;
//  $(".bookcase") = bookcase;
//  $(".bat") = bat;
//  $(".cup") = cup;
//  if(bookcase.click()){
//   a+=1;
//  }
//  if(bat.click()){
//   a+=1;
//  }
//  if(cup.click()){
//   a+=1;
//  }
//  if(a===3){
//    $(".submit").show();
//  }