https://freevue-pizza.netlify.com/

# History

### 2019.01.19
* `저장소 생성`

javascript 상태 
```javascript
window.onload = function(){
  var startEvent, moveEvent, endEvent;
  var mobileKeyWords=new Array();
  var mobile;

  mobileKeyWords[0] = 'iPhone';
  mobileKeyWords[1] = 'iPod';
  mobileKeyWords[2] = 'Android';

  for(var word in mobileKeyWords){
    if(navigator.userAgent.match(mobileKeyWords[word]) !== null){
      mobile = true;

      break;
    }else{
      mobile = false;
    }
  }

  if(mobile){
    startEvent = "touchstart";
    moveEvent = "touchmove";
    endEvent = "touchend";
  }else{
    startEvent = "mousedown";
    moveEvent = "mousemove";
    endEvent = "mouseup";
  }

  var $topi
  var wi = $('.topping').width();
  var ht = $('.topping').height();

  var i = 0;

  var sl = $('.pizza').offset().left;
  var st = $('.pizza').offset().top;
  var el = sl + $('.pizza').width();
  var et = st + $('.pizza').height();
  var stx, sty;
  var scope;
  var k, t, r;

  $('body').on(startEvent, function(event){
    k = Math.floor(Math.random() * 11);
    r = Math.floor(Math.random() * 360);

    stx=(event.originalEvent.touches)?event.originalEvent.touches[0].clientX:event.originalEvent.clientX;
    sty=(event.originalEvent.touches)?event.originalEvent.touches[0].clientY:event.originalEvent.clientY;

    var topSize = $('.topping').size();

    if(topSize >= 30){
      if( k === 0){
        t = '재료가 떨어졌어요..';
      }else if(k == 1){
        t = '더 추가하면 기기가 위험해요..';
      }else if(k == 2){
        t = '그정도 올렸으면 됐잖아;;';
      }else if(k == 3){
        t = 'Error';
      }else if(k == 4){
        t = '이게 당신의 피자야';
      }else if(k == 5){
        t = '새로고침!';
      }else if(k == 6){
        t = '이제 돌림판 만들어요?';
      }else if(k == 7){
        t = '피자 나왔습니다~';
      }else if(k == 8){
        t = '일안하고 농땡이 피운 결과물';
      }else if(k == 9){
        t = '나는 월급 루팡이다!';
      }else if(k == 10){
        t = '더 이상 할 말이 없어요..';
      }else if(k == 11){
        t = '언제까지 클릭하시게요??';
      }

      alert(t);

      return;
    }

    var src;

    if( k === 0 || k == 6){
      src = 'ham';
    }else if(k == 1 || k == 7){
      src = 'shirimp';
    }else if(k == 2 || k == 8){
      src = 'chizze';
    }else if(k == 3 || k == 9){
      src = 'pimang';
    }else if(k == 4 || k == 10){
      src = 'other';
    }else if(k == 5 || k == 11){
      src = 'olive';
    }

    $('.table').append('<img class="topping top' + i + '" src="' + src + '.png">');

    $topi = $('.top' + i);

    var wt = $topi.width();
    var ht = $topi.height();

    $topi.css({
      'top' : sty + 'px',
      'left' : stx + 'px',
      'margin-top' : '-' + (ht / 2) + 'px',
      'margin-left' : '-' + (wt / 2) + 'px'
    });
  }).on(moveEvent, function(event){
    stx = (event.originalEvent.touches)?event.originalEvent.touches[0].clientX:event.originalEvent.clientX;
    sty = (event.originalEvent.touches)?event.originalEvent.touches[0].clientY:event.originalEvent.clientY;

    $topi.css({
      'left' : stx + 'px',
      'top' : sty + 'px'
    });
  }).on(endEvent, function(){
    scope = (stx < sl || stx > el) || (sty < st || sty > et);

    if(scope){
      $topi.fadeOut(300, function(){
        setTimeout(function(){
          $topi.remove();
        }, 300);
      }).css({'transform' : 'scale(0)'});
    }else{
      $topi.css({
        'transform' : 'scale(0.3) rotate(' + r + 'deg)'
      });
    }

    i++;
  });
}
```
css 상태
```css
* {margin:0; padding:0;}
ul,ol {list-style:none;}
img {border:0; display:block; width:100%;}
a {text-decoration:none; color:#000;}

html,body {height:100%; overflow:hidden;}
embed {position:absolute; opacity:0;}

.table {display:table; width:80%; height:100%; text-align:center; margin:0 auto;}
.table .cell {display:table-cell; vertical-align:middle;}
.table .cell .box {width:50vw; margin:0 auto; transition:transform 0.3s;}
.pizza {}
.topping {position:absolute; width:20%; transform-origin:center; transition:transform 0.3s;}
.hide {position:absolute; left:0; top:0; opacity:0;}
```
html 상태
```html
<div class="table">
  <div class="cell">
    <div class="box">
      <img class="pizza" src="pizza.png">
    </div>
    <img class="hide" src="ham.png">
    <img class="hide" src="pimang.png">
    <img class="hide" src="other.png">
    <img class="hide" src="olive.png">
    <img class="hide" src="shirimp.png">
    <img class="hide" src="chizze.png">
  </div>
</div>
```
