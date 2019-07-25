<template>
  <div>
    <LayerHeader />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { LayerHeader } from '~/components';

export default Vue.extend({
  components: {
    LayerHeader
  }
});
</script>
