<template>
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
</template>

<script>
       export default {
            name:"CreateTwootPanel",
            data(){
                return{
                      newTwootContent: '',
                      selectedTwootType: 'instant',
                      twootsType: [
                            {value: 'draft', name:"Draft"},
                            {value: 'instant', name:"Instant Twoot"},

                        ],
                }
            },
            computed: {
                 newTwootCharacterCount(){
                        return this.newTwootContent.length;
                 }
            },
            methods: {
                    createNewTwootContent(){
                        if(this.newTwootContent && this.selectedTwootType !== 'draft'){
                                 this.user.twoots.unshift({
                                 id: this.user.twoots.length + 1,
                                content: this.newTwootContent
                            }) 
                        }
                     }
            },
       }
</script>

<style lang="scss" scoped >
    .create-twoot{
                border-top: 1px solid black;
                padding-top: 20px;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                 button{
                    width: 30%;
                    color: white;
                    border: none;
                    background-color: red;
                    border-radius: 3px;
                    padding: 5px;
                    margin-left: 70%;
                 }
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
</style>