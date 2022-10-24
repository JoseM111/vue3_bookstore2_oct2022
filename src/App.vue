<!-- @App -->
<script lang="ts" setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div>
    <!-- header-component -->
    <Header />

    <!-- vue-router-component: Registering the `Body` component as `Home` -->
    <RouterView />

    <!-- footer-component -->
    <Footer />
  </div>
</template>
