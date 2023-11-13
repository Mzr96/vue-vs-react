<template>
  <header class="header">
    <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
    <!-- <h1>Vue</h1> -->
  </header>
</template>
<script setup></script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.header {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  color: #777;
  margin-bottom: 4rem;
  /* box-shadow: 0 10px 10px rgba(170, 170, 170, 0.325); */
}

img {
  height: 5rem;
}
</style>
