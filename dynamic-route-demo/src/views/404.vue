<script lang="ts" setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const path = route.params.pathMatch;
</script>
<template>
  <div class="about">
    <h1>This is an 404 page</h1>
    "{{ path }}" is not found
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
