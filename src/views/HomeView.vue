<template>
  <!-- Page Header-->
  <header class="masthead" style="background-image: url('img/home-bg.jpg')">
    <div class="container position-relative px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div class="site-heading">
            <h1>Clean Blog</h1>
            <span class="subheading">A Blog Theme by Start Bootstrap</span>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <div class="container px-4 px-lg-5">
    <div class="row gx-4 gx-lg-5 justify-content-center">
      <div class="col-md-10 col-lg-8 col-xl-7">
        <div v-if="error">{{ error }}</div>
        <div v-if="posts.length">
          <postList :posts="posts" />
        </div>
        <div v-else>
          <Loading />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Loading from '../components/Loading.vue'
import getPosts from '@/compotable/getPosts';
import postList from '@/components/postList.vue';
export default {
  name: 'HomeView',
  components: {
    postList,
    Loading
  },
  setup() {

    const { posts, error, load } = getPosts()

    load()

    return { posts, error }
  },
  mounted() {
    console.log($('.para').text())
  }
}
</script>
