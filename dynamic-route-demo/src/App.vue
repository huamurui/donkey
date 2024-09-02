<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <div>You did it! 🎉</div>
      <nav>
        <RouterLink activeClass="active" to="/">Home</RouterLink>
        <RouterLink activeClass="active" to="/about">About</RouterLink>
        <RouterLink activeClass="active" to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
<style scoped>

header {
  background-color: #f0f0f0;
  padding: 1rem;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  display: flex;
  gap: 1rem;
}

nav a {
  text-decoration: none;
  color: #333;
  border-bottom: 2px solid transparent;
}

nav a:hover {
  color: #000;
  border-bottom: 2px solid #ff0000;
}

nav a.active {
  color: #ff0000;
}
</style>
