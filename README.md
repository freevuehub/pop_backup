https://freevue-tree.netlify.com/

# History

### 2019.01.19
* `저장소 생성`

javascript 상태 
```javascript
window.onload = function(){
  setInterval(function(){
    $('.box').find('.fruit').css({'transform' : 'scale(1)', 'opacity' : '1'});

    setTimeout(function(){
      $('.box').find('.fruit').css({'bottom' : '0', 'transform-origin' : 'bottom right'});

      setTimeout(function(){
        $('.box').find('.fruit').css({'transform' : 'rotate(45deg)', 'opacity' : '0'});

        setTimeout(function(){
          $('.box').find('.fruit').css({'bottom' : '90px', 'right' : '40px', 'transform-origin' : 'center', 'transform' : 'scale(0)'});
        }, 500);
      }, 500);
    }, 1000);
  }, 3000);
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
.table .cell .box {width:50vw; margin:0 auto; position:relative;}
.table .cell .box {width:50vw; margin:0 auto; position:relative;}
.table .cell .box .fruit {position:absolute; width:20%; bottom:90px; right:40px; transform-origin:center; transform:scale(0); transition:all 0.5s;}
```
html 상태
```html
<div class="table">
  <div class="cell">
    <div class="box">
      <img src="tree.png">
      <img class="fruit" src="fruit.png">
    </div>
  </div>
</div>
```
