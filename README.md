https://freevue-pocket.netlify.com/

# History

### 2019.01.19
* `저장소 생성`

javascript 상태 
```javascript
var i = 0;
var pocket = new Vue({
  el : '#pocket',
  data : {
    img : 'p' + Math.floor(Math.random() * 23) + '.svg'
  },
  methods : {
    rotate : function(){
      i++;

      this.$el.children[0].style.transform = 'rotate(' + i * 360 + 'deg)';
    },
    change : function(){
      var ran = Math.floor(Math.random() * 23);
      var _this = this

      if(ran === 0) ran = 1;

      i++;

      this.$el.children[0].style.transform = 'rotate(' + i * 360 + 'deg)';

      setTimeout(function(){
        _this.img = 'p' + ran + '.svg';
      }, 180);
    }
  }
});
```
css 상태
```css
* {margin:0; padding:0;}
ul,ol {list-style:none;}
img {border:0;}
a {text-decoration:none; color:#000;}

html,body {height:100%;}

#pocket {height:100%; overflow:hidden;}
#pocket img {margin:8vw auto; transition:all 0.5s;}
#pocket button {display:block; margin:0 auto; border:0; background-color:transparent;}
```
html 상태
```html
<div id="pocket">
  <img v-bind:src="img" v-on:click="rotate">
  <button v-on:click="change"><img src="f5.png" alt=""></button>
</div>
```
