https://freevue-space.netlify.com/

# History

### 2019.01.19
* `저장소 생성`

javascript 상태 
```javascript
window.onload = function(){
  var $earth = $('.earth');
  var $fire = $('.fire');
  var $star = $('.star');
  var $shipBox = $('.ship_box');
  var i = 0;
  
  $star.css({'top' : '55vw', 'left' : '75vw', 'z-index' : '10'});
  
  setTimeout(function(){
    $star.css({'top' : '-5vw', 'left' : '15vw', 'z-index' : '1'});
  }, 2000);
  
  setInterval(function(){
    $star.css({'top' : '55vw', 'left' : '75vw', 'z-index' : '10'});
    
    setTimeout(function(){
      $star.css({'top' : '-5vw', 'left' : '15vw', 'z-index' : '1'});
    }, 2000);
  }, 4000);
  
  setInterval(function(){
    $shipBox.stop().animate({'top' : '-100vw'}, 4000, function(){
      $(this).css({'top' : '4vw'});
    });
  }, 7000);
  
  setInterval(function(){
    $fire.css({'transform' : 'rotateY(180deg)'});
    
    setTimeout(function(){
      $fire.css({'transform' : 'rotateY(0deg)'});
    }, 50);
  }, 100);
  
  for(var e = 0; e <= 30; e++){
    var Curr1 = Math.floor(Math.random() * 100);
    var Curr2 = Math.floor(Math.random() * 100);
    
    $('body').append('<img src="planet.png" class="planet p' + e + '">');
    $('.p' + e).css({'top' : Curr1 + 'vh', 'left' : Curr2 + 'vw'});
  }
  
  setInterval(function(){
    for(var e = 0; e <= 30; e++){
      var Curr1 = Math.floor(Math.random() * 100);
      var Curr2 = Math.floor(Math.random() * 100);
      
      $('body').append('<img src="planet.png" class="planet p' + e + '">');
      $('.p' + e).css({'top' : Curr1 + 'vh', 'left' : Curr2 + 'vw'});
    }
    
    var $planet = $('.planet');
    
    setTimeout(function(){
      $planet.remove();
    }, 950);
  }, 1000);
}
```
css 상태
```css
* {margin:0; padding:0;}
ul,ol {list-style:none;}
img {border:0; display:block; width:100%;}
a {text-decoration:none; color:#000;}

html,body {height:100%; overflow:hidden;}

.bg {display:block; height:100%; position:absolute; z-index:-2; left:0; top:0; width:auto;}

.table {display:table; width:100%; height:100%; text-align:center; overflow:hidden;}
.table .cell {display:table-cell; vertical-align:middle;}
.table .cell .box {width:100%; margin:0 auto; position:relative;}
.table .cell .box .earth {transform-origin:center; transition:transform 1s; width:60vw; margin:0 auto; position:relative; z-index:5;}
.table .cell .box .star {position:absolute; left:15vw; top:-5vw; width:7vw; transition:all 2s;}
.table .cell .box .ship_box {position:absolute; width:10vw; left:50%; margin-left:-5vw; top:4vw; z-index:3;}
.table .cell .box .ship_box .ship {position:relative; z-index:10;}
.table .cell .box .ship_box .fire {transform-origin:center; margin:0 auto; margin-top:-1vw; width:60%;}

.planet {position:absolute; width:2vw; z-index:-1;}
```
html 상태
```html
<div class="table">
  <div class="cell">
    <div class="box">
      <img src="earth.png" class="earth">
      <img src="star.png" class="star">
      <div class="ship_box">
        <img src="ship.png" class="ship">
        <img src="fire.png" class="fire">
      </div>
    </div>
  </div>
  <img src="bg.jpg" class="bg">
</div>
```
