<template>
  <div class="card-panel left-align">
    <div v-if="this.display_mode == 'detailed'">
      <h3>{{article_title}}</h3>
      <p>{{article_body}}</p>
      <p>{{this.dateToString()}}</p>
      <div>
        <button class="btn waves-effect waves-light">Modifier</button>
        <button class="btn waves-effect waves-light">Supprimer</button>
      </div>
    </div>
    <div v-else-if="this.display_mode == 'listed'">
      <div class="col s2 row">
        <h3>{{article_title}}</h3>
      </div>
      <div class="row">
        <p class="col s3 truncate">{{article_body}}</p>
      </div>
      <div>
        <button class="btn waves-effect waves-light" @click="watchArticle">voir l'article</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",

  props: {
    article_title: String,
    article_body: String,
    article_date: String,
    article_owner: String,
    display_mode: String
  },

  methods: {
    watchArticle() {
      this.$router.push("/article/" + this.article_title);
    },

    dateToString() {
      const date = new Date(this.article_date);
      return (
        "publié le " +
        date.toLocaleDateString() +
        " à " +
        date.toLocaleTimeString()
      );
    }
  }
};
</script>

<style scoped>
button {
  margin-right: 30px;
}
</style>
