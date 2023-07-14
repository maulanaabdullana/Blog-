<template>
    <header class="masthead">
    <div class="container position-relative px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div class="site-heading">
            <h1>Clean Blog</h1>
            <span class="subheading">Post By Tag</span>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="container px-4 px-lg-5">
    <div class="row gx-4 gx-lg-5 justify-content-center">
      <div class="col-md-10 col-lg-8 col-xl-7">
        <div v-if="error">{{ error }}</div>
        <div v-if="posts.length">
          <postList :posts="postWithTag" />
        </div>
        <div v-else>
          <Loading />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import getPosts from '@/compotable/getPosts';
import Loading from '@/components/Loading.vue';
import postList from '@/components/postList.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
export default {
    name: 'Tag',
    components:{
        postList,Loading
    },
    setup(){

        const route = useRoute()
        const {posts,error,load} = getPosts()

        const postWithTag = computed(()=>{
            return posts.value.filter((p) => p.tags.includes(route.params.tag))
        })

        load()

        return {posts,error,postWithTag}
    }
}
</script>