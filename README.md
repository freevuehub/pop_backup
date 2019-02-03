https://freevue-rice.netlify.com/

# History

### 2019.01.19
* `저장소 생성`

javascript 상태 
```javascript
window.onload = function(){
  setInterval(function(){
    bowlRotate();
  }, 2800);
}

function bowlRotate(){
  var $dinner = $('.dinner');
  
  $dinner.css({'transform' : 'rotate(180deg)'});
  
  setTimeout(function(){
    $dinner.find('.rice').css({'bottom' : '7vw'});
    
    setTimeout(function(){
      $dinner.css({'transform' : 'rotate(0deg)'});
      
      setTimeout(function(){
        $dinner.find('.rice').css({'bottom' : '-24vw'});
      }, 600);
    }, 800);
  }, 600);
}
```
css 상태
```css
* {margin:0; padding:0;}
ul,ol {list-style:none;}
img {border:0; display:block; width:100%;}
a {text-decoration:none; color:#000;}

html,body {height:100%; overflow:hidden;}

.section {width:100%; height:100%; display:table;}
.table {display:table-cell; vertical-align:middle; text-align:center; overflow:hidden; position:relative;}
.table .dinner {position:relative; width:20vw; transform-origin:center; margin:0 auto; transition:transform 0.5s;}
.table .bowl {padding-top:16vw; position:absolute; transform-origin:top center;}
.table .bowl1 {transform:rotate(180deg);}
.table .rice {position:absolute; width:18vw; bottom:-24vw; left:50%; margin-left:-9vw; transition:bottom 0.5s;}
```
html 상태
```html
<div class="section">
  <div class="table">
    <div class="dinner din1">
      <img class="rice" src="Untitled-2.png">
      <img class="bowl bowl1" src="Untitled-3.png">
      <img class="bowl bowl2" src="Untitled-3.png">
    </div>
  </div>
</div>
```

### 2019.02.03
* `코드 개선`
* `jQuery 제거`
* `모바일, PC 최적화`
* `javascript 변수 선언 최소화`

javascript 상태 
```javascript
let $_grid = document.querySelector('.grid');
let $_rice = document.querySelector('.rice');

handleRotate(t => {
  setTimeout(() => {
    $_rice.style.top = `${t}px`;
  }, 1000);
});

function handleRotate (fn, r = 180, t = 17) {
  $_grid.style.transform = `rotate(${r}deg)`;

  r = (r === 0) ? 180 : 0;
  t = (t === 17) ? 240 : 17;

  setTimeout(() => {
    fn(t);

    return handleRotate(fn, r, t)
  }, 2000);
}
```
css 상태 (공통 부분 생략)
```css
.container {
  overflow: hidden;
  display: flex;
  height: 100%;
  align-items: center;
}
.grid {
  width: 200px;
  height: 430px;
  margin: 0 auto;
  position: relative;
  transform-origin: center;
  transition: transform 1s;
}
.grid>img {
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.grid>.bowl {
  z-index: 1;
  width: 100%;
  transform-origin: center;
}
.grid>.item1 {
  top: 0;
  transform: translateX(-50%) rotate(180deg);
}
.grid>.item2 {
  bottom: 0;
}
.grid>.rice {
  transition: top .5s;
  top: 17px;
  width: 90%;
}
```
html 상태
```html
<div class="container">
  <div class="grid">
    <img class="bowl item1" src="./Untitled-3.png" alt="bowl">
    <img class="bowl item2" src="./Untitled-3.png" alt="bowl">
    <img class="rice" src="./Untitled-2.png" alt="rice">
  </div>
</div>
```
