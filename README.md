https://freevue-fish.netlify.com/

# History

### 2018.01.19
* `저장소 생성`

javascript 상태 
```javascript
window.onload = function(){
  var $rotate = $('.rotate');
  var $axis = $('.axis');
  var i = 0;
  
  setInterval(function(){
    i = i + 10;
    
    $axis.css({'transform' : 'rotate(' + (i / 5) + 'deg)'});
    $rotate.css({'transform' : 'rotate(-' + i + 'deg)'});
  }, 50);
}
```
css 상태
```css
* {margin:0; padding:0;}
ul,ol {list-style:none;}
img {border:0; display:block; width:100%;}
a {text-decoration:none; color:#000;}

html,body {height:100%; overflow:hidden;}

.table {display:table; width:80%; height:100%; text-align:center; margin:0 auto;}
.table .cell {display:table-cell; vertical-align:middle;}
.table .cell .box {position:relative;}
.table .cell .box .axis {width:50vw; margin:0 auto; transition:all 0.1s;}
.table .cell .box .rotate {transform-origin:center; position:absolute; width:30vw; left:50%; top:50%; margin-left:-15vw; margin-top:-15vw; transition:all 0.1s;}
```
html 상태
```html
<div class="table">
  <div class="cell">
    <div class="box">
      <img src="gray.png" class="axis">
      <img src="pink.png" class="rotate">
    </div>
  </div>
</div>
```
