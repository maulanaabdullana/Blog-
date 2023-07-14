<template>
    <div class="post-preview" v-for="post in posts" :key="post.id">
        <postSingle :post="post" />
    </div>
    <hr class="my-4" />
</template>
<script>
import postSingle from './postSingle.vue';

export default {
    props: ['posts'],
    components: {
        postSingle
    }
}
</script>