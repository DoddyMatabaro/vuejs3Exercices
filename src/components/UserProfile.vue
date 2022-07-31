<template>
    <div class="wrapper">
            <div class="user-card">
                <strong>user name + fullname</strong>
                <div class="function">
                    Admin
                </div>
                <div><strong>Followers : </strong>1</div>
            </div>
            <div class="twitters">
                <TwootItem v-for="twoot in user.twoots" :key="twoot.id" :username="user.username" :twoot="twoot" @favourite="toggleFavourite" />
            </div>
    </div>
</template>
<script>
import TwootItem from './TwootItem.vue'
       export default {
    name: "UserProfile",
    data() {
        return {
            follewers: 0,
            user: {
                id: 1,
                username: "@_DoddyMatabaro",
                firstName: "Doddy",
                lastName: "Matabaro",
                email: "matabarododdy@gmail.com",
                isAdmin: true,
                twoots: [
                    { id: 1, content: "Twotter is Amazing" },
                    { id: 2, content: "Don't forget to subsrciber to the Earth is Square" }
                ]
            }
        };
    },
    watch: {
        followers(newFollorCount, oldFollowerCount) {
            if (oldFollowerCount < newFollorCount) {
                console.log(this.user.username);
            }
        }
    },
    computed:{
        fullname(){
            return `${this.user.fullname} ${this.user.lastname}`
        },
    },
    methods: {
        followers(){
            this.followers++;
        }
    },
    mounted() {
        this.followUser();
    },
}
</script>
<style scoped>
    .wrapper{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2.5rem;
    }
    .user-card{
        background-color: #fff;
        display: flex;
        flex-direction: column;
        width: 30%;
        padding: 1.3rem;
        gap: 1rem;
        border-radius: 2px;
    }    
    .twitters{
        display: flex;
        flex-direction: column;
        padding: 20px;
        gap: 1rem;
    }
    .function{
        background-color: rgb(204, 0, 245);
        color: #fff;
        margin-right: auto;
        padding: 0.2rem;
        border-radius: 3px;
    }

    @media screen and (max-width: 600px){
        .wrapper{
            flex-direction: column;
        }
        .user-card{
            width: 90%;
            justify-content: center;
            align-items: center;
        }
        .function{
            margin: 0;
        }
        
    }
</style>