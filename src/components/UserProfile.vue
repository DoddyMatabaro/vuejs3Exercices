<template>
    <div class="wrapper">
            <div class="user-card">
                <strong>{{user.username + " " + fullname}}`</strong>
                <div class="function">
                    Admin
                </div>
                <div><strong>Followers : </strong>1</div>
                <form class="create-twoot" @submit.prevent="createNewTwoot" :class="{'--exceeded': newTwootCharacterCount > 180}">
                        <label for="newTwoot"><strong>New Twoot</strong>({{newTwootCharacterCount}} / 180)</label>
                        <textarea id="newTwoot" rows="4" v-model="newTwootContent" />
                        <div class="create-twoot-type">
                            <label for="newTwootType">
                                Type : 
                            </label>
                            <select name="" id="newTwootType" v-model="selectedTwootType">
                                <option :value="option.value"  v-for="(option, index) in twootsType" :key="index" >
                                     {{option.name}}
                                </option>
                            </select>


                        </div>
                        <button>
                            Twoot!
                        </button>
                </form>
            </div>
            <div class="twitters">
                <TwootItem v-for="twoot in user.twoots" :key="twoot.id" :username="user.username" :twoot="twoot" @favourite="toggleFavourite" />
               
            </div>
    </div>
</template>
<script>
import TwootItem from './TwootItem.vue';
       export default {
    name: "UserProfile",
    data() {
        return {
            newTwootContent: '',
            selectedTwootType: 'instant',
            twootsType: [
                {value: 'draft', name:"Draft"},
                {value: 'instant', name:"Instant Twoot"},

            ],
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
    computed: {
            newTwootCharacterCount(){
                return this.newTwootContent.length;
            }
    },
    methods: {
        followUser() {
            this.followers++;
        },
        toggleFavourite(id){
            console.log(`Favourite tweet #${id}`)
        },
        createNewTwootContent(){
            if(this.newTwootContent && this.selectedTwootType !== 'draft'){
                   this.user.twoots.unshift({
                    id: this.user.twoots.length + 1,
                    content: this.newTwootContent
                   }) 
            }
        }
    },
    mounted() {
        this.followUser();
    },
    components: { TwootItem }
}
</script>
<style lang="scss" scoped>
    .wrapper{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2.5rem;

        // user card
            .user-card{
        background-color: #fff;
        display: flex;
        flex-direction: column;
        width: 30%;
        padding: 1.3rem;
        gap: 1rem;
        border-radius: 2px;

            .function{
                background-color: rgb(204, 0, 245);
                color: #fff;
                margin-right: auto;
                padding: 0.2rem;
                border-radius: 3px;
            }
            .create-twoot{
                border-top: 1px solid black;
                padding-top: 20px;
                display: flex;
                flex-direction: column;

                 &.--exceeded{
                    color: red;
                    border-color: red;

                    button{
                        background-color: red;
                        border: none;
                        color: #fff;
                    }
                 }
            }
         }
        //  end of user card 

        // twoots container
        .twitters{
            display: flex;
            flex-direction: column;
            padding: 20px;
            gap: 1rem;
        }

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