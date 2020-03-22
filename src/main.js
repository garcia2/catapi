import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import axios from "axios";

//routes
import Articles from "./components/Articles";
import FormArticle from "./components/Form-Article";
import ArticleDetail from "./components/Article-detail";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  { path: "/Articles", component: Articles },
  { path: "/Article/:article_title", component: ArticleDetail, props: true },
  { path: "/FormArticle", component: FormArticle }
];

const apiUrl = "https://blogapiapidaepapingarcia.herokuapp.com/";

const store = new Vuex.Store({
  state: {
    countChat: 0,
    articles: []
  },
  getters: {
    getArticleByTitle: state => title => {
      return state.articles.find(article => article.article_title === title);
    }
  },
  mutations: {
    incrementChat(state) {
      state.count++;
    },
    updateArticles(state) {
      axios.get(apiUrl + "articles").then(response => {
        const articlesData = response.data.articles;
        let articles = [];
        let article;
        for (let id in articlesData) {
          article = articlesData[id];
          articles.push({
            article_date: article.article_date,
            article_body: article.article_body,
            article_title: article.article_title
          });
        }
        state.articles = articles;
      });
    }
  }
});

const router = new VueRouter({
  routes: routes
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
