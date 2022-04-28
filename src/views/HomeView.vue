<template>
  <div>
    <div class="home" :style="{ 'background-image': 'url(background1.jpg)' }">
      <div class="section-page">
        <h1>Monitoring Air Quality System</h1>
        <p>PolyU Speed indoor air quality checking.</p>
        <v-btn
          class="btn"
          @click="$router.push({ path: '/AirQuality' }).catch(() => {})"
        >
          Try now</v-btn
        >
      </div>
    </div>

    <div class="section-content">
      <h1>How it work</h1>
      <div class="content-page">
        <img src="map2.png" alt="" class="photo" />
        <div class="content">
          <h2>Select Venue</h2>
          <p>
            Rolling your mouse, choose the floor and click the venue you want
          </p>
        </div>
      </div>

      <div class="section-content2">
        <img src="map3.png" alt="" class="photo2" />
        <div class="content-page2">
          <div class="content2">
            <h2>Add Markers</h2>
            <p>
              Mark the specific place where you want to check the air quality
            </p>
          </div>
        </div>
      </div>

      <div class="content-page">
        <img src="results.png" alt="" class="photo" />
        <div class="content">
          <h2>Air Quality Level</h2>
          <p>You can check the air quality details from the pop-up box</p>
        </div>
      </div>
    </div>

    <footer class="footer">
      <div class="footer-content"></div>
    </footer>
  </div>
</template>

<script>
// import HelloWorld from '../components/HelloWorld'

export default {
  name: "HomePage",

  components: {
    // HelloWorld,
  },
};
</script>

<style>
.home {
  display: flex;
  height: 450px;
  justify-content: center;
  /*align-items: center;*/
  background: no-repeat;
  background-size: cover;
}

.section-page {
  display: flex;
  width: 960px;
  margin-right: 0px;
  margin-left: 0px;
  flex-direction: column;
  align-items: flex-start;
}

/*p{*/
/*  font-size: 1.7rem;*/
/*  color: #13131a;*/
/*}*/

h1 {
  font-size: 4rem;
  color: #219150;
  padding-top: 0.5rem;
  text-transform: uppercase;
}

.btn {
  margin-top: 1rem;
  display: inline-block;
  padding: 0.9rem 3rem;
  font-size: 1rem;
  color: #ffffff;
  background: none;
  cursor: pointer;
  border: none;
  border-radius: 10px;
}

.btn :hover {
  letter-spacing: 0.2rem;
}

.section-content {
  display: flex;
  margin-top: 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content-page {
  display: flex;
  width: 800px;
  margin-top: 15px;
  margin-bottom: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.content {
  margin-left: 20px;
}

.photo {
  /*width: 300px;*/
  max-width: 250px;
  margin-top: 25px;
  margin-right: 20px;
  vertical-align: middle;
  display: inline-block;
}

h2 {
  width: 490px;
  margin-top: 10px;
  line-height: 49px;
  text-align: left;
  margin-bottom: 20px;
  align-self: center;
  font-family: "Nunito", sans-serif;
  font-size: 38px;
  letter-spacing: -0.8px;
}

p {
  margin-top: 0px;
  margin-bottom: 30px;
  padding-right: 0px;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 0.2px;
}

.section-content2 {
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row-reverse;
}

.content-page2 {
  flex: 1;
  margin-right: 0px;
  width: auto;
  margin-left: 20px;
  margin-top: 60px;
  padding: 10px;
  width: 500px;
  align-items: center;
  justify-content: center;
}

.photo2 {
  /*width: 400px;*/
  flex: 1;
  margin: 10px 20px 0px 25px;
  max-width: 250px;
  vertical-align: middle;
  display: inline-block;
}
</style>
