https://freevue-fish.netlify.com/

# History

### 2019.01.19
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

### 2019.01.20
* `코드 개선`
* `jQuery 제거`
* `모바일, PC 최적화`
* `javascript 변수 선언 최소화`

javascript 상태 
```javascript
let $_axis = document.querySelector('.axis');
let $_rotate = document.querySelector('.rotate');

(function handleRotate (i = 0) {
  i = (i > 360) ? 0 : ++i;

  $_axis.style.transform = 'rotate(' + i + 'deg)'
  $_rotate.style.transform = 'translate(-50%, -50%) rotate(-' + i + 'deg)'

  setTimeout(function() {
    handleRotate(i);
  }, 20)
})();
```
css 상태 (공통 부분 생략)
```css
.container {
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.grid {
  margin: 0 auto;
  position: relative;
}
.grid>img.rotate {
  position: absolute;
  left: 50%;
  top: 50%;
  width: calc(288/512*100%);
  transform-origin: center;
  transform: translate(-50%, -50%) rotate(0deg);
}
```
html 상태
```html
<div class="container">
  <div class="grid">
    <img src="gray.png" class="axis">
    <img src="pink.png" class="rotate">
  </div>
</div>
```

### 2019.02.03
* `PWA 적용`
* `코드 개선`
* `favicon 적용`

javascript 상태
```javascript
let $_axis = document.querySelector('.axis');
let $_rotate = document.querySelector('.rotate');

(function handleRotate (i = 0) {
  i = (i > 360) ? 0 : ++i;

  $_axis.style.transform = 'rotate(' + i + 'deg)'
  $_rotate.style.transform = 'translate(-50%, -50%) rotate(-' + i + 'deg)'

  setTimeout(() => {
    handleRotate(i);
  }, 20)
})();
```
app.js
```javascript
window.addEventListener('load', async () => {
  if ('serviceWorker' in navigator) {
    await navigator.serviceWorker.register('./sw.js');
  }
});
```
Service-Worker
```javascript
const staticAssets = [
  './',
  './app.js',
  './gray.png',
  './pink.png'
];

self.addEventListener('install', async () => {
  const cache = await caches.open('new-static');

  cache.addAll(staticAssets);
});

self.addEventListener('fetch', e => {
  const req = e.request;

  e.respondWith(cacheFirst(req));
});

const cacheFirst = async req => {
  const cachedResponse = await caches.match(req);

  return cachedResponse || fetch(req);
};
```
html 상태 `<head>` 부분
```html
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<title>어묵</title>

<link rel="icon" href="favicon.png">

<meta name="viewport" content="width=device-width,initial-scale=1.0 user-scalable=no">
<meta name="theme-color" content="#e4e4e6">
<meta property="og:image" content="gray.png">

<link rel="manifest" href="manifest.json">
```
