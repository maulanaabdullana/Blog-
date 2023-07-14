import {ref} from 'vue'
import { db } from '@/firebase/config'

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)
    const load = async () => {
        try {

            const res = await db.collection('posts')
            .doc(id)
            .get()


            if(! res.exists){
                throw Error('data Not Avaliable')
            }


            post.value = {
                ...res.data(),
                id:res.id
            }
            // await new Promise(resolve => {
            //     setTimeout(resolve,2000)
            // })
            // let data = await fetch('http://localhost:3000/post/' + id)
            // if(! data.ok){
            //     throw Error('data tidak ada')
            // }
            // post.value = await data.json()
        } catch (err) {
            error.value = err.message
        }
    }
    return {post,error,load} 
}

export default getPost