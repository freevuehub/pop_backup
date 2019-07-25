<template>
  <div :class="$style.header">
    <nuxt-link :to="{ name: 'index' }">&#8249;</nuxt-link>
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
  font-size: 30px;
}
</style>
