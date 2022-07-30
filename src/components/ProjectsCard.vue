<template>
    {{projectData.projectsArray}}

    <div v-for="(items, index) in projectData.projectsArray" v-bind:key="items">
        <h2>{{projectData.projectsArray[index].Title}}</h2>
    </div>
</template>

<script>
    import jsonData from "/projects.json";
 
    export default{
        data() {
            return {
                projectData: jsonData,
            }
        },
    }
</script>

<style>

</style>