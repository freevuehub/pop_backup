<template>
  <div :class="$style.header">
    <h1>POP/<span>Freevue</span></h1>
    <ul>
      <li>
        <a href="https://github.com/freevuehub" target="_blank">Git</a>
      </li>
      <li>
        <a href="https://freevuehub.github.io" target="_blank">Blog</a>
      </li>
      <li>
        <a href="mailto:hackish@hanmail.net" target="_blank">Mail</a>
      </li>
    </ul>
  </div>
</template>

<style module>
.header {
  background-color: #72cc96;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 54px;
  box-shadow: 0 2px 4px #d2d2d2;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.header > h1 {
  font-size: 20px;
}
.header > h1 > span {
  font-size: 16px;
}
.header > ul {
  overflow: hidden;
}
.header > ul > li {
  float: left;
  margin-right: 10px;
}
.header > ul > li > a {
  color: #fff;
  font-size: 16px;
}
</style>
