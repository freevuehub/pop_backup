<template>
  <div style="position: relative;">
    <AppHeader />
    <div :class="$style.container">
      <div :class="$style.wrap">
        <div :class="$style.item">
          <nuxt-link to="/Cho">Cho</nuxt-link>
        </div>
        <div :class="$style.item">
          <nuxt-link to="/Rice">Rice</nuxt-link>
        </div>
      </div>
    </div>

    <nuxt-child style="position: relative;" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { AppHeader } from '../components/index';

export default Vue.extend({
  components: {
    AppHeader
  }
});
</script>

<style module>
.container {
  margin: 0 auto;
  max-width: 1080px;
}
.wrap {
  display: flex;
  flex-wrap: wrap;
}
.item {
  flex-basis: 33.333%;
  padding: 2%;
  box-sizing: border-box;
}
.item > a {
  min-height: 100px;
  line-height: 100px;
  display: block;
  width: 100%;
  text-align: center;
  box-shadow: 0 2px 4px #d2d2d2;
  transition: all 0.3s;
  border-radius: 3px;
}
.item > a:hover {
  box-shadow: 0 3px 7px #aaa;
}
.item > a > img {
  display: block;
  margin: 0 auto;
  width: 40%;
}

@media screen and (max-width: 640px) {
  .item {
    flex-basis: 50%;
  }
  .item > a {
    min-height: unset;
  }
}
</style>
