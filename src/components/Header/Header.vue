<template>
  <header id="header">
    <div class="center">
      <!-- Logo -->
      <div id="logo">
        <router-link to="home">
          <img src="../../assets/logo.png" class="app-logo" alt="Logo" />
        </router-link>
        <!-- <a href="index.html"><img src="../../assets/logo.png" class="app-logo" alt="Logo"></a> -->
        <span id="brand">
          <strong>Studying</strong>Vue
        </span>
      </div>

      <!-- Menu -->
      <nav id="menu">
        <ul>
          <li>
            <router-link to="./blog" active-class="active">Blog</router-link>
            <!-- <a href="./blog.html">Blog</a> -->
          </li>
          <li>
            <router-link to="#" active-class="active">About</router-link>
            <!-- <a href="#">About</a> -->
          </li>
          <li>
            <router-link to="#" active-class="active">Projects</router-link>
            <!-- <a href="#">Projects</a> -->
          </li>
          <li>
            <router-link to="./contact" active-class="active">Contact</router-link>
            <!-- <a href="./contact.html">Contact</a> -->
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>