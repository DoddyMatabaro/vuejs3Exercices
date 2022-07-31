<template>
    <div class="wrapper">
            <div class="user-card">
                <strong>user name + fullname</strong>
                <div class="fonction">
                    Admin
                </div>
                <div><strong>Followers : </strong>1</div>
            </div>
            <div class="twitters">
                <div class="twitter">
                    <h3>user name</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                </div>

                <div class="twitter">
                    <h3>user name</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>
    </div>
</template>
<script>

</script>
<style scoped>
    .wrapper{
        display: flex;
        justify-content: center;
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
    
    @media screen and (max-width: 789px){
        .main-container{
            width: 95%;
        }
    }
</style>