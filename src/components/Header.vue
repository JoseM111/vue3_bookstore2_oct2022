<!-- @Header -->
<script lang="ts" setup></script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <!-- NAVBAR LINK BUTTON -->
        <ul class="navbar-nav">
          <!-- HOME ROUTE BUTTON -->
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/">
              Home
            </RouterLink>
          </li>

          <!-- LOGIN ROUTE BUTTON -->
          <li class="nav-item">
            <RouterLink class="nav-link" href="#" to="/login">
              Login
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss"></style>
