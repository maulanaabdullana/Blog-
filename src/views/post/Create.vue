<template>
    <!-- Page Header-->
    <header class="masthead" style="background-image: url('assets/img/contact-bg.jpg')">
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="page-heading">
                        <h1>Create New Post</h1>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- Main Content-->
    <main class="mb-4">
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon
                        as possible!</p>
                    <div class="my-5">
                        <form @submit.prevent="heandelsubmit">
                            <div class="form-floating">
                                <input class="form-control" id="name" type="text" placeholder="title" v-model="title" />
                                <label for="name">Title</label>
                                <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            <div class="form-floating">
                                <textarea class="form-control" id="message" placeholder="Enter your message here..."
                                    style="height: 12rem" v-model="body"></textarea>
                                <label for="message">Body</label>
                                <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.
                                </div>
                            </div>
                            <div class="form-floating">
                                <input class="form-control" id="name" type="text" placeholder="tag" v-model="tag" @keydown.enter.prevent="heandelkeydown"/>
                                <label for="name">tag</label>
                                <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                <span v-for="tag in tags" :key="tag">#{{ tag }}</span>
                            </div>
                            <br />
                            <!-- Submit Button-->
                            <button class="btn btn-primary text-uppercase" type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>


<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { db } from '@/firebase/config'
export default {
    setup() {
        const router = useRouter()
        const title = ref("")
        const body = ref("")
        const tag = ref("")
        const tags = ref([])

        const heandelkeydown = () => {
            if (!tags.value.includes(tag.value)) {
                tag.value = tag.value.replace(/\s/g, '')
                tags.value.push(tag.value)
            }

            tag.value = ''
        }


        const heandelsubmit = async () => {
            const post = {
                title: title.value,
                body: body.value,
                tags: tags.value,
            }

            // await fetch('http://localhost:3000/post/', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(post)
            // })

            const res = await db.collection('posts').add(post)

            router.push({
                name: 'home'
            })
        }


        return { title, body, tag, tags, heandelkeydown, heandelsubmit, router }
    }
}
</script>
<style></style>