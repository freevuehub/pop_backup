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

### 2018.02.02
* `코드 개선`
* `jQuery 제거`
* `모바일, PC 최적화`
* `javascript 변수 선언 최소화`

javascript 상태 
```javascript
let $_foodBox = document.querySelector('.food-box');
let $_foods = $_foodBox.children
let $_titleSpan = document.querySelector('.title').children;

(function titleColor () {
  for (let $_span of $_titleSpan) $_span.style.color = randomRGB();

  setTimeout(function () {
    return titleColor();
  }, 1300);
})();

(function rotateFoodBox (i = 0) {
  i > 360? i = 0 : i++;

  for (let $_food of $_foods) $_food.style.transform = 'rotate(-' + i + 'deg)';

  $_foodBox.style.transform = 'rotate(' + i + 'deg)';

  setTimeout(function () {
    return rotateFoodBox(i)
  }, 8);
})();

function randomRGB () {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);

  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
```
css 상태 (공통 부분 생략)
```css
.container {
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
}
.title {
  font-size: 40px;
}
.title>span {
  transition: color .5s;
}

.food-box {
  transform-origin: center;
  width: 300px;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -150px;
  margin-left: -150px;
}
.food {
  position: absolute;
  transform-origin: center;
  width: 120px;
}
.food>img {
  display: block;
  width: 100%;
}
.food.item1 {
  top: 0;
  right: 0;
}
.food.item2 {
  top: 0;
  left: 0;
}
.food.item3 {
  left: 0;
  bottom: 0;
}
.food.item4 {
  bottom: 0;
  right: 0;
}
```
html 상태
```html
<div class="container">
  <h1 class="title">
    <span>회전</span>
    <span>초밥</span>
  </h1>

  <div class="food-box">
    <div class="food item1">
      <img src="if-food-c212-2427856_85719.png" alt="초밥">
    </div>
    <div class="food item2">
      <img src="if-food-c212-2427856_85719.png" alt="초밥">
    </div>
    <div class="food item3">
      <img src="if-food-c212-2427856_85719.png" alt="초밥">
    </div>
    <div class="food item4">
      <img src="if-food-c212-2427856_85719.png" alt="초밥">
    </div>
  </div>
</div>
```
