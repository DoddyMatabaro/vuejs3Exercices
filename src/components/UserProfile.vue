<template>
    <div class="wrapper">
            <div class="user-card">
                <strong>{{state.user.username }}`</strong>
                <div class="function" v-if="state.user.isAdmin">
                    Admin
                </div>
                <div><strong>Followers : </strong>{{state.followers}}</div>
                <CreateTwootPanel @add-twoot="addTwoot" />
            </div>
            <div class="twitters">
                <TwootItem 
                    v-for="twoot in state.user.twoots" 
                    :key="twoot.id" 
                    :username="state.user.username" 
                    :twoot="twoot" 
                 />
            </div>
    </div>
</template>
<script>
import TwootItem from './TwootItem.vue';
import CreateTwootPanel from './CreateTwootPanel.vue';
import {reactive} from 'vue';
       export default {
       name: "UserProfile",
       setup(){
            const state = reactive({
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
            })

            function addTwoot(twoot){
                state.user.twoots.unshift({id: state.user.twoots.length + 1, content: twoot});
            }
            return{
                state,
                addTwoot
            }
       },
       
    components: { TwootItem, CreateTwootPanel }
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