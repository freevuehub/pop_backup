https://freevue-zerg.netlify.com/

# History

### 2019.01.19
* `저장소 생성`

javascript 상태 
```javascript
window.onload = function(){
  var c = 0;
  var i = 10;

  $('.rotate1').css({'transform' : 'rotate(0deg)'});
  $('.rotate2').css({'transform' : 'rotate(120deg)'});
  $('.rotate3').css({'transform' : 'rotate(240deg)'});

  setInterval(function(){
    c = c + 10;

    $('.rotate1').css({'transform' : 'rotate(' + c + 'deg)'});
    $('.rotate2').css({'transform' : 'rotate(' + (c + 120) + 'deg)'});
    $('.rotate3').css({'transform' : 'rotate(' + (c + 240) + 'deg)'});
  }, 100);

  mainClick();
}

function mainClick(){
  $('.main').click(function(){
    var k = Math.floor(Math.random() * 10);

    $('body').append('<embed src="sound' + k + '.wav" type="">');
    //$('body').append('<audio class="music" autoplay><source sec="sound' + k + '.wav"></audio>');

    $('.hide').fadeIn(800);
    $('.hide').css({'transform' : 'scale(10)'});
    setTimeout(function(){
      $('.hide').fadeOut(800,function(){
        $('.hide').css({'transform' : 'scale(0.5)'});

        $('embed').remove();
      });
    }, 300);
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
.table .cell .box {width:20vw; margin:0 auto; position:relative;}
.table .cell .box .main {transition:all 0.3s; transform-origin:center; position:relative; z-index:10;}
.table .cell .box .hide {transition:transform 3s; transform-origin:center; transform:scale(0.5); display:none; position:absolute; left:50%; top:50%; margin-left:-10vw; margin-top:-4.69vw; z-index:20;}
.table .cell .rotate {transition:transform 0.3s; transform-origin:center; position:absolute; top:50%; margin-top:-10.21vw; left:5%; right:5%;}
.table .cell .rotate img {width:20vw;}
```
html 상태
```html
<div class="table">
  <div class="cell">
    <div class="box">
      <img class="main" src="zerg.png">
      <img class="hide" src="real.png">
    </div>
    <div class="rotate rotate1">
      <img src="zerg.png">
    </div>
    <div class="rotate rotate2">
      <img src="zerg.png">
    </div>
    <div class="rotate rotate3">
      <img src="zerg.png">
    </div>
  </div>
</div>
```
