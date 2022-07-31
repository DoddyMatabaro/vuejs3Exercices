<template>
         <div class="twitter" @click="favouriteTwoot(twoot.id)">
            <h3>{{username}}</h3>
            <p>{{twoot.content}}</p>
        </div>
</template>

<script>
    
    export default{
       name: "TwootItem",
       props: {
        username:{
            type: String,
            required: true
        },
        twoot: {
            type:Object,
            required: true
        }
       },
       methods:{
        favouriteTwoot(id){
            this.$emit('favourite', id);
        }
       }
    };
</script>

<style scoped>
        .twitter{
            background-color: #fff;
            padding: 1rem;
            border-radius: 3px;
            border: 1px solid #DFE3EB;
            box-sizing: border-box;
            cursor: pointer;
            transition: all 0.25s ease;
        }
        .twitter:hover{
            transform: scale(1.1, 1.1);
        }
</style>