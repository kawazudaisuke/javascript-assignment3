/*global $*/

$(document).ready(function(){
    
   $('#search').on('input',function(){//入力毎にイベントが発生
      var input = $('#search').val(); //入力欄に入力した値を代入
       $('#pictures li').each(function(){
         var val = $(this).text();
          if (val.match(input)){//入力値とli要素の文字列がマッチする場合
              $(this).show();
            }else{
              $(this).hide();    
          }
       });
   });
    
    
    
    
    
})