https://freevue-year.netlify.com/

# History

### 2019.01.19
* `저장소 생성`

javascript 상태 
```javascript
var num = 68;
var sp = 100;

for(var c = 0; c <= num; c++){
  $('.line').append('<div class="cell num_'+ (c) + '"></div>');
}

function CellSetting() {
  $('.control .line').each(function(){
    $(this).css({'width' : ($(this).find('>.cell').size() * 100) / 18 + '%'});
  });

  $('.box .line').each(function(){
    $(this).css({'width' : ($(this).find('>.cell').size() * 100) / 45 + '%'});
  });

  CellOn();
}

CellSetting();

$('.number_box').find('i').text(num - 1);
$('.number_box').find('.up').click(function(){
  num++;

  $('.number_box').find('i').text(num - 1);
  $('.line').append('<div class="cell num_'+ num + '"></div>');

  CellSetting();
});

$('.line1').each(function(){
  $(this).find('.cell').each(function(l){
    if(l == 0 || l == 3) {$(this).addClass('on');}
    if(l == 6 || l == 7) {$(this).addClass('on');}
    if(l == 10 || l == 11 || l == 12 || l == 13) {$(this).addClass('on');}
    if(l == 15 || l == 16 || l == 17 || l == 18) {$(this).addClass('on');}
    if(l == 20 || l == 24) {$(this).addClass('on');}
    if(l == 27 || l == 31) {$(this).addClass('on');}
    if(l == 33 || l == 34 || l == 35 || l == 36) {$(this).addClass('on');}
    if(l == 38 || l == 40 || l == 42) {$(this).addClass('on');}
    if(l == 45 || l == 49) {$(this).addClass('on');}
    if(l == 51 || l == 52 || l == 53 || l == 54) {$(this).addClass('on');}
    if(l == 57 || l == 58) {$(this).addClass('on');}
    if(l == 61 || l == 62 || l == 63 || l == 64) {$(this).addClass('on');}
    if(l == 66) {$(this).addClass('on');}
  });
});
$('.line2').each(function(){
  $(this).find('.cell').each(function(l){
    if(l == 0 || l == 3) {$(this).addClass('on');}
    if(l == 5 || l == 8) {$(this).addClass('on');}
    if(l == 10 || l == 13) {$(this).addClass('on');}
    if(l == 15 || l == 18) {$(this).addClass('on');}
    if(l == 21 || l == 23) {$(this).addClass('on');}
    if(l == 27 || l == 28 || l == 31) {$(this).addClass('on');}
    if(l == 33) {$(this).addClass('on');}
    if(l == 38 || l == 40 || l == 42) {$(this).addClass('on');}
    if(l == 46 || l == 48) {$(this).addClass('on');}
    if(l == 51) {$(this).addClass('on');}
    if(l == 56 || l == 59) {$(this).addClass('on');}
    if(l == 61 || l == 64) {$(this).addClass('on');}
    if(l == 66) {$(this).addClass('on');}
  });
});
$('.line3').each(function(){
  $(this).find('.cell').each(function(l){
    if(l == 0 || l == 1 || l == 2 || l == 3) {$(this).addClass('on');}
    if(l == 5 || l == 6 || l == 7 || l == 8) {$(this).addClass('on');}
    if(l == 10 || l == 11 || l == 12 || l == 13) {$(this).addClass('on');}
    if(l == 15 || l == 16 || l == 17 || l == 18) {$(this).addClass('on');}
    if(l == 22) {$(this).addClass('on');}
    if(l == 27 || l == 29 || l == 31) {$(this).addClass('on');}
    if(l == 33 || l == 34 || l == 35 || l == 36) {$(this).addClass('on');}
    if(l == 38 || l == 40 || l == 42) {$(this).addClass('on');}
    if(l == 47) {$(this).addClass('on');}
    if(l == 51 || l == 52 || l == 53 || l == 54) {$(this).addClass('on');}
    if(l == 56 || l == 57 || l == 58 || l == 59) {$(this).addClass('on');}
    if(l == 61 || l == 62 || l == 63 || l == 64) {$(this).addClass('on');}
    if(l == 66) {$(this).addClass('on');}
  });
});
$('.line4').each(function(){
  $(this).find('.cell').each(function(l){
    if(l == 0 || l == 3) {$(this).addClass('on');}
    if(l == 5 || l == 8) {$(this).addClass('on');}
    if(l == 10) {$(this).addClass('on');}
    if(l == 15) {$(this).addClass('on');}
    if(l == 22) {$(this).addClass('on');}
    if(l == 27 || l == 30 || l == 31) {$(this).addClass('on');}
    if(l == 33) {$(this).addClass('on');}
    if(l == 38 || l == 40 || l == 42) {$(this).addClass('on');}
    if(l == 47) {$(this).addClass('on');}
    if(l == 51) {$(this).addClass('on');}
    if(l == 56 || l == 59) {$(this).addClass('on');}
    if(l == 61 || l == 63) {$(this).addClass('on');}
  });
});
$('.line5').each(function(){
  $(this).find('.cell').each(function(l){
    if(l == 0 || l == 3) {$(this).addClass('on');}
    if(l == 5 || l == 8) {$(this).addClass('on');}
    if(l == 10) {$(this).addClass('on');}
    if(l == 15) {$(this).addClass('on');}
    if(l == 22) {$(this).addClass('on');}
    if(l == 27 || l == 31) {$(this).addClass('on');}
    if(l == 33 || l == 34 || l == 35 || l == 36) {$(this).addClass('on');}
    if(l == 39 || l == 41) {$(this).addClass('on');}
    if(l == 47) {$(this).addClass('on');}
    if(l == 51 || l == 52 || l == 53 || l == 54) {$(this).addClass('on');}
    if(l == 56 || l == 59) {$(this).addClass('on');}
    if(l == 61 || l == 64) {$(this).addClass('on');}
    if(l == 66) {$(this).addClass('on');}
  });
});

function CellOn() {
  $('.control .cell').click(function(e){
    var $line = $(this).parent()[0].classList[1];
    var $cell = e.currentTarget.classList[1];
    console.log($cell)
    $(this).toggleClass('on');

    $('.box').find('.' + $line).find('.' + $cell).toggleClass('on');
  });
}

setTimeout(function(){
  setInterval(function(){
    $('.box .line').animate({'left' : '-' + 2 + 'vw'}, sp, function(){
      $(this).find('>.cell').first().appendTo($(this));
      $(this).css({'left' : 0});
    });
  }, sp);
}, 1000);
```
css 상태
```css
* {margin:0; padding:0;}
ul,ol {list-style:none;}
img {border:0; display:block; width:100%;}
a {text-decoration:none; color:#000;}

html,body {height:100%;}

.wrap {height:100%; padding:5vw 0; box-sizing:border-box;}
.wrap .table {display:table; height:100%; width:100%;}
.wrap .table .table-cell {display:table-cell; vertical-align:middle; width:100%;}

.wrap .table .table-cell .com {border:1px solid #ccc; margin:0 auto; width:90vw; border-top:0; border-left:0;}
.wrap .table .table-cell .com .line {overflow:hidden;}
.wrap .table .table-cell .com .line .cell {border:1px solid #ccc; box-sizing:border-box; background-color:rgb(247, 223, 12); transition:background 0.5s; float:left; border-right:0; border-bottom:0;}
.wrap .table .table-cell .com .line .cell.on {background-color:rgb(250, 96, 96);}

.wrap .table .table-cell .control {margin-top:3vw; overflow-X:scroll; margin-bottom:5vw;}
.wrap .table .table-cell .control .line .cell {width:5vw; height:5vw; cursor:pointer;}

.wrap .table .table-cell h2 {font-size:5vw; text-align:center; width:90vw; border-top:1px solid #adadad; padding-top:3vw; margin:0 auto; margin-top:5vw;}
.wrap .table .table-cell .remote {overflow:hidden; width:90vw; margin:0 auto; margin-bottom:3vw;}
.wrap .table .table-cell .remote div {font-size:5vw; overflow:hidden; float:left;}
.wrap .table .table-cell .remote div.speed_box {float:right;}
.wrap .table .table-cell .remote div>* {float:left;}
.wrap .table .table-cell .remote div span {display:block; background-color:#fff; width:0px; height:0PX; margin-left:3vw; margin-top:2vw; cursor:pointer;}
.wrap .table .table-cell .remote div span.up {border-left:3vw solid transparent; border-right:3vw solid transparent; border-bottom:3vw solid black;}
.wrap .table .table-cell .remote div span.down {border-left:3vw solid transparent; border-right:3vw solid transparent; border-top:3vw solid black;}
.wrap .table .table-cell .remote div i {display:block; font-size:5vw; font-style:normal; margin-left:3vw;}

.wrap .table .table-cell .box {overflow:hidden; border:0; box-sizing:content-box;}
.wrap .table .table-cell .box .line {position:relative;}
.wrap .table .table-cell .box .line .cell {width:2vw; height:2vw; border:0;}
```
html 상태
```html
<div class="wrap">
  <div class="table">
    <div class="table-cell">
      <div class="remote">
        <!-- <div class="number_box">
          <p>Number</p>
          <span class="up"></span>
          <i>4</i>
          <span class="down"></span>
        </div>
        <div class="speed_box">
          <p>Speed</p>
          <span class="up"></span>
          <i>5</i>
          <span class="down"></span>
        </div> -->
      </div>
      <div class="box com">
        <div class="line line0">

        </div>
        <div class="line line1">

        </div>
        <div class="line line2">

        </div>
        <div class="line line3">

        </div>
        <div class="line line4">

        </div>
        <div class="line line5">

        </div>
        <div class="line line6">

        </div>
      </div>

      <h2>Edit..</h2>

      <div class="control com">
          <div class="line line1">

          </div>
          <div class="line line2">

          </div>
          <div class="line line3">

          </div>
          <div class="line line4">

          </div>
          <div class="line line5">

          </div>
        </div>
    </div>
  </div>
</div>
```
