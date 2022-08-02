<template>
                        <form class="create-twoot" @submit.prevent="createNewTwootContent" :class="{'--exceeded': newTwootCharacterCount > 180}">
                        <label for="newTwoot"><strong>New Twoot</strong>({{state.newTwootCharacterCount}} / 180)</label>
                        <textarea id="newTwoot" rows="4" v-model="state.newTwootContent" />
                        <div class="create-twoot-type">
                            <label for="newTwootType">
                                Type : 
                            </label>
                            <select name="" id="newTwootType" v-model="state.selectedTwootType">
                                <option :value="option.value"  v-for="(option, index) in state.twootsType" :key="index" >
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
        import {reactive, computed} from 'vue';

       export default {
            name:"CreateTwootPanel",

            setup(props, ctx) {
                const state = reactive({
                      newTwootContent: '',
                      selectedTwootType: 'instant',
                      twootsType: [
                            {value: 'draft', name:"Draft"},
                            {value: 'instant', name:"Instant Twoot"},

                         ],
                })

                const newTwootCharacterCount = computed(() => state.newTwootContent.length);
                  function createNewTwootContent(){
                            if(state.newTwootContent && state.selectedTwootType !== 'draft'){
                                    ctx.emit('add-twoot', state.newTwootContent);
                                    state.newTwootContent =''; 
                                } 
                        } 
                     
                return {
                    state,
                    newTwootCharacterCount,
                    createNewTwootContent,
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