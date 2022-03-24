<template>
  <v-app>
    <v-app-bar
    color="#ffffff"
    app
    height="80"

    >




      <div class="header">

         <img src="../src/assets/logo.jpg">

      </div>


        <template v-if="!$vuetify.breakpoint.smAndDown" >
        <div class="navManu">

          <div class="px-5 " @click="$router.push({name:'home'}).catch(()=>{});">Home</div>
          <div  class="px-5 " @click="$router.push({name:'test'}).catch(()=>{});">Air Quality</div>
          <div class="px-5 " @click="$router.push({name:'about'}).catch(()=>{});">About</div>

        </div>
      </template>

    </v-app-bar>

    <section class="home">


      <v-carousel class="swiper home-slider">

        <v-carousel-item class="swiper-slide">
          <div class="box" :style="{'background-image':'url(bg1.jpg)'}">
            <div class="content">
              <span>Learn more</span>
              <h3>Hello</h3>
              <v-btn class="btn">get start</v-btn>
            </div>
          </div>
        </v-carousel-item>





        <v-carousel-item class="swiper-slide">

          <div class="box" :style="{'background-image':'url(bg3.jpg)'}">

            <div class="content">
              <span>Learn more</span>
              <h3>Hello</h3>
              <v-btn class="btn">get start</v-btn>
            </div>
          </div>
        </v-carousel-item>




        <v-carousel-item class="swiper-slide">

          <div class="box" :style="{'background-image':'url(bg2.jpg)'}">

            <div class="content">
              <span>Learn more</span>
              <h3>Hello</h3>
              <v-btn class="btn">get start</v-btn>
            </div>
          </div>
        </v-carousel-item>


      </v-carousel>

    </section>






    <v-main>
      <v-container>
      <router-view/></v-container>
    </v-main>


  </v-app>
</template>

<script>


export default {
  name: 'App',

    //
    data() {
      return {
        appTitle: 'Awesome App',
        sidebar: false,
        items: [
          {title: 'Home', value: 'home'},
          {title: 'Test', value: 'test'},
          {title: 'About', value: 'about'},
        ],
      };
    }
};

</script>

<style>

:root{
  --main-color:#219150;
  --black:#13131a;
  --bg:#eeeeee;
  --border:.2rem solid rgba(0,0,0,.1);
}

*{
  font-family: 'Poppins', sans-serif;
  margin: 0px; padding: 0px;
  box-sizing: border-box;
  outline: none;
  border: none;
  text-decoration: none;
  text-transform: none;
  transition: .2s linear;
}

.header img{
  height: 80px;
  padding:10px ;
  z-index: 1000;
  margin-top: 20px;
}

.navManu{
  top: 0; left: 0; right: 0;
  padding:2rem 35%;
  z-index: 1000;
  display: flex;
  align-items: center;
  margin-left: 2rem;
  font-size: 1.3rem;
  color: #13131a;
}

.navManu :hover{
  color: #219150;
}

section{
  padding: 5rem 9%;
}

.home{
  padding: 0;
}

.box{
  /*background: url('../src/assets/bg1.jpg') no-repeat;*/
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-size: cover !important;
  background-position: center !important;
  justify-content: flex-end;
  padding: 2rem 9%;
}

.box2{
  justify-content: flex-start;
}

.content{
  width: 50rem;
}

span{
  font-size: 2rem;
  color: #13131a;
}

h3{
  font-size: 4rem;
  color: #219150;
  padding-top: .5rem;
  text-transform: uppercase;
}

.btn{
  margin-top: 1rem;
  display: inline-block;
  border:.2rem solid rgba(0,0,0,.1);
  color: #13131a;
  background: none;
  font-size: 1.7rem;
  padding: 1rem 3rem;
}

.btn :hover{
  background: #13131a;
  color: #eeeeee;
}





</style>




