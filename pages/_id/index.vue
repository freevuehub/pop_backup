<template>
  <div>
    <LayerHeader />
    {{ $route.params.id }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { LayerHeader } from '~/components';

export default Vue.extend({
  transition: 'moveRight',
  components: {
    LayerHeader
  }
});
</script>
