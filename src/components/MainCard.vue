<template>
    <div class="wrapper">
            <div class="main-container">
       <div class="container-one">
            <div class="profile">
                <img src="../assets/profile.jpg" alt="" srcset="">
                <h3>Doddy MATABARO</h3>
                <p>Web Develloper</p>
            </div>
            <div class="socials-links">

                    <div class="link">
                        <a href="">
                                 <img src="../assets/github.svg" alt="">
                                 <h2>GitHub</h2>
                        </a>
                    </div>

                     <div class="link">
                        <a href="">
                                 <img src="../assets/twitter.svg" alt="">
                                 <h2>Twitter</h2>
                        </a>
                    </div>

                     <div class="link">
                        <a href="">
                                 <img src="../assets/instagram.svg" alt="">
                                 <h2>Instagram</h2>
                        </a>
                    </div>

                     <div class="link">
                        <a href="">
                                 <img src="../assets/linkedin.svg" alt="">
                                 <h2>Linkedin</h2>
                        </a>
                    </div>
            
            </div>
       </div>
       <div class="container-two">
            <div class="about-me">
                <h1>About Me</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum consequuntur eius, earum possimus natus consectetur
                  atque, non hic pariatur aut quisquam quasi! Odio similique 
                  quos facilis aut, fugit quasi quaerat.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, illum.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Lorem ipsum dolor sit.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div class="technology-section">
                    <h1>Technologies Studied</h1>
                    <div class="logos">
                            <img src="../assets/css3.svg" alt=""> 
                            <img src="../assets/html5-brands.svg" alt=""> 
                            <img src="../assets/js-brands.svg" alt=""> 
                            <img src="../assets/php-brands.svg" alt=""> 
                            <img src="../assets/python-brands.svg" alt=""> 
                            <img src="../assets/vuejs-brands.svg" alt=""> 
                            <img src="../assets/react-brands.svg" alt=""> 
                    </div>
            </div>
            <div class="button-container">
                    <div class="project-button">
                            <a href="">My project</a>
                    </div>
                    <div class="project-button">
                        <a href="">My resume</a>
                    </div>
            </div>
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
    }
    .main-container{
        display: flex;
        flex-direction: row;
        background-color: grey;
        width: 60%;

    }

    .container-one{
        background-color: rgb(198, 125, 125);
        width: 40%;
        padding: 2.5%;
    }

    .profile img{
        height: 5rem;
        border-radius: 50%;
    }

    .link a{
        text-decoration: none;
        color: darkolivegreen;
        font-size: 10px;
    }
    .link img{
        height: 2rem;
    }

    .about-me{
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1.5rem;
      align-items: center;
    }

    .logos img{
        height: 2.5rem;
        margin: 0.4rem;
    }

    .button-container{
            margin-top: 5%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
    }
    .project-button{
        background-color: rgb(141, 78, 175);
        margin: 5px;
        padding: 5px;
        border-radius: 15px;
    }
    .project-button a{
        text-decoration: none;
        color: #332f2f;
    }

    .container-two{
        background-color: rgb(162, 193, 217);
        width: 60%;
   }
    img{
        height: 30px;
    }

    @media screen and (max-width: 789px){
        .main-container{
            width: 95%;
        }
    }
</style>