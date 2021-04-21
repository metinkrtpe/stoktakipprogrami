<template>
    <form @submit.prevent="handleSubmit">
    <div v-if = "message" class = "alert alert-success" role = "alert">
        {{error}}
    </div>
    <error v-if="error" :error="error"/>
        <h3>Parola Yenileme</h3>
        <div class = "form-group">
            <label>Email</label>
            <input type = "email" class = "form-control" v-model = "email"  placeholder = "Email"/>
        </div>
        <button class = "btn btn-primary btn-block">Gönder</button>
    </form>
</template>
<script>
    import axios from 'axios'
    import Error from './Error.vue'
    export default {
        name: 'Forgot',
        components: {
            Error
        },
        data(){
            return {
                email: '',
                message: '',
                error: ''
            }
        },
        methods: {
            async handleSubmit(){
                try{
                        await axios.post('forgot',{
                    email: this.email
                });

                this.message = 'The email was sent!';
            }catch(e){
                this.error = 'Error occured!';
            }
            
            }
        }
    }
</script>