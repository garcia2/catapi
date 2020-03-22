<template>
  <div class="container">
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s4">
            <input placeholder="Placeholder" id="article_title" type="text" class="validate">
            <label for="article_title">Titre de l'article</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <textarea id="textarea2" class="materialize-textarea" data-length="1000"></textarea>
            <label for="textarea2">Textarea</label>
          </div>
        </div>
        <div class="row">
          <div class="col s2">
            <button class="btn waves-effect waves-light" type="submit" name="action">
              Poster
              <i class="material-icons left-align">send</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form-Article"
};
</script>

<style>
#poster {
  margin-top: "1000px";
}
</style>


