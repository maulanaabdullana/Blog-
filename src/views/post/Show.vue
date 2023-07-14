<template>
    <div v-if="error">{{ erorr }}</div>
    <div v-if="post">
        <header class="masthead" style="background-image: url('img/post-bg.jpg')">
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="post-heading">
                            <h1>{{ post.title }}</h1>
                            <button class="btn btn-danger" @click="Delete">
                                Delete
                            </button>
                            <span class="meta-post" v-for="tag in post.tags" :key="tag">
                                #{{ tag }}
                            </span>

                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Post Content-->
        <article class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <p>{{ post.body }}</p>
                    </div>
                </div>
            </div>
        </article>
        <hr />
    </div>
    <div v-else>
        <Loading />
    </div>
</template>
<script>
import Loading from '@/components/Loading.vue'
import getPost from '@/compotable/getPost'
import { db } from '@/firebase/config'
import router from '@/router'
import { useRouter } from 'vue-router'
export default {
    props: ['id'],
    components: {
        Loading
    },
    setup(props) {
        const router = useRouter()

        const Delete = async () => {
            await db.collection('posts')
            .doc(props.id)
            .delete()

            router.push({
                name:'home'
            })
        }

        const { post, error, load } = getPost(props.id)
        load()
        return { post, error,Delete}
    }
}
</script>
<style></style>