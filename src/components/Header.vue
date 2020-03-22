<template>
  <header>
    <nav>
      <div class="nav-wrapper">
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href>Connexion</a>
          </li>
        </ul>
        <a src="../assets/logo.png" class="brand-logo">Logo</a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li>
            <router-link to="/Articles">Articles</router-link>
          </li>
          <li>
            <router-link to="/FormArticle">Poster un article</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
</style>
