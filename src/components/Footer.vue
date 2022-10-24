<!-- @Footer -->
<script lang="ts" setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <!-- EXAMPLE OF CREATING A COPYRIGHT SIGN: &copy; -->
  <footer class="d-flex align-items-center justify-content-center mt-5">
    Copyright © {{ currentYear }}
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background: black;
  color: white;
  min-height: 3em;
  font-size: 0.8em;
}
</style>
