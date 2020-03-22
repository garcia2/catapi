<template>
  <div>
    <Article
      v-for="article in articles"
      v-bind:key="article.article_title"
      v-bind:article_title="article.article_title"
      v-bind:article_body="article.article_body"
      v-bind:article_date="article.article_date"
      v-bind:display_mode="'listed'"
    ></Article>
  </div>
</template>

<script>
import Article from "../components/Article";

export default {
  name: "Articles",
  components: {
    Article
  },

  mounted() {
    this.$store.commit("updateArticles");
  },

  computed: {
    articles() {
      return this.$store.state.articles;
    }
  }
};
</script>

<style scoped>
</style>

