https://freevue-cho.netlify.com/

# History

### 2019.01.19
* `저장소 생성`

javascript 상태 
```javascript
$(function(){
  color(1);
  color(2);
  
  rotate(1, 0);
  rotate(2, 90);
  rotate(3, 180);
  rotate(4, 270);
});

function color(num){
  var $text = $('.text' + num);
  var i1 = Math.floor(Math.random() * 255);
  var i2 = Math.floor(Math.random() * 255);
  var i3 = Math.floor(Math.random() * 255);
  
  $text.css({'color' : 'rgb(' + i1 + ',' + i2 + ',' + i3 + ')'});
  
  setInterval(function(){
    i1 = Math.floor(Math.random() * 255);
    i2 = Math.floor(Math.random() * 255);
    i3 = Math.floor(Math.random() * 255);
    
    $text.css({'color' : 'rgb(' + i1 + ',' + i2 + ',' + i3 + ')'});
  },1000);
}

function rotate(num, start){
  var $rotate = $('.rotate' + num);
  var i = start;
  
  $rotate.css({'transform' : 'rotateZ(' + i + 'deg)'}).find('img').css({'transform' : 'rotateZ(-' + i + 'deg)'});
  
  setInterval(function(){
    i = i + 5;
    
    $rotate.css({'transform' : 'rotateZ(' + i + 'deg)'}).find('img').css({'transform' : 'rotateZ(-' + i + 'deg)'});
  },50);
}
```
css 상태
```css
* {margin:0; padding:0;}
ul,ol {list-style:none;}
img {border:0;}
a {text-decoration:none; color:#000;}

html,body {height:100%;}

.table {display:table; width:100vw; height:100%; text-align:center; overflow:hidden;}
.table .cell {display:table-cell; vertical-align:middle; perspective: 2000px;}
.table .cell span {font-size:20vw; transition:all 0.3s; overflow:hidden; position:relative; z-index:99;}

.table .cell .rotate {width:120%; overflow:hidden; position:absolute; top:50%; margin-top:-43px; margin-left:-10%;}
.table .cell .rotate img {width:20%; display:block; transform-origin:center;}
```
html 상태
```html
<div class="table">
  <div class="cell">
    <span class="text1">회전</span>
    <span class="text2">초밥</span>
    
    <div class="rotate1 rotate">
      <img src="if-food-c212-2427856_85719.png">
    </div>
    
    <div class="rotate2 rotate">
      <img src="if-food-c212-2427856_85719.png">
    </div>
    
    <div class="rotate3 rotate">
      <img src="if-food-c212-2427856_85719.png">
    </div>
    
    <div class="rotate4 rotate">
      <img src="if-food-c212-2427856_85719.png">
    </div>
  </div>
</div>
```
