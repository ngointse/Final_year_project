<template>
  <div>
    <div class="about" :style="{ 'background-image': 'url(tree6.jpg)' }">
      <div class="section-page">
        <h1 class="h1">About us</h1>
      </div>
    </div>

    <div class="introduction">
      <p>
        Keep fresh is a indoor air quality monitoring system that used to
        determine existing quality of air and to identify areas in need of
        restoration. The system open to internal PolyU Speed students and
        staffs. The monitoring is carried out for 24 hours. Pollutants such as
        Carbon Monoxide (CO), Particulate matter (PM 10 and PM 2.5), Volatile
        Organic Compounds (VOCs), Nitrous Oxide (NOX), sulphur dioxides (SO2)
        are monitored under the system.
      </p>
    </div>

    <div class="objective" :style="{ 'background-image': 'url(tree7.jpg)' }">
      <div class="line">
        <h3 class="h3">Objective</h3>
        <p>
          Provide a simple air quality system for public used, raise the
          awareness of protect air condition of public and well-being of the
          community
        </p>
      </div>
    </div>

    <!--    <div class="img-air">-->
    <!--      <img src="air3.png" alt="" class="air">-->
    <!--      <img src="air1.png" alt="" class="air">-->
    <!--      <img src="air2.png" alt="" class="air">-->
    <!--      <img src="air4.png" alt="" class="air">-->
    <!--    </div>-->

    <section>
      <div class="advantage">
        <div>
          <h1>Advantages</h1>
        </div>
        <div class="adv-content">
          <div class="adv-content-box">
            <img src="ad1.png" alt="" class="ad" />
            <h4>Convenience</h4>
            <p class="p1">You can check the air quality anywhere and anytime</p>
          </div>

          <div class="adv-content-box">
            <img src="ad2.png" alt="" class="ad" />
            <h4>Standards</h4>
            <p class="p1">
              Air quality data helps us determine if an area is meeting the air
              quality standards devised by CPCB, WHO or OSHA.
            </p>
          </div>

          <div class="adv-content-box">
            <img src="ad3.png" alt="" class="ad" />
            <h4>Reduce impact</h4>
            <p class="p1">
              The data collected from air quality monitoring helps us assess
              impacts caused by poor air quality on public health.
            </p>
          </div>
        </div>
      </div>
    </section>

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
.about {
  display: flex;
  height: 450px;
  justify-content: center;
  /*align-items: center;*/
  background: no-repeat;
  background-size: cover;
}

.section-page {
  display: flex;
  align-items: flex-start;
}

.h1 {
  display: flex;
  justify-content: center;
  margin-top: 200px;
  font-size: 80px;
  color: #219150;
  text-transform: uppercase;
}

.introduction {
  width: 900px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  /*text-align: center;*/
}

.objective {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  background: no-repeat;
  background-size: cover;
  height: 220px;
}

.h3 {
  font-size: 18px;
  display: flex;
  justify-content: center;
  font-family: Georgia, serif;
  margin-top: 40px;
}

.line {
  font-size: 30px;
  color: #219150;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.line p {
  font-family: Georgia, serif;
  margin-top: 20px;
  font-weight: bold;
}

.img-air {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.air {
  padding: 20px;
  max-width: 300px;
  margin-top: 25px;
  margin-right: 20px;
  vertical-align: middle;
  display: inline-block;
}

.advantage {
  display: flex;
  margin-top: 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  margin-top: 50px;
  margin-bottom: 60px;
  color: #219150;
  font-size: 100px;
  /*letter-spacing: -0.5px;*/
  /*line-height: 44px;*/
}

.adv-content {
  display: flex;
  /*width: 900px;*/
  flex-direction: row;
  gap: 10px;
  margin-bottom: 80px;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.adv-content-box {
  min-height: 292px;
  flex: 1;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 0px 10px;
}

h4 {
  font-size: 20px;
  margin-top: 35px;
  margin-bottom: 20px;
  align-content: center;
  color: #219150;
}

.p1 {
  font-family: Inter, sans-serif;
  line-height: 22px;
  letter-spacing: 0.1px;
}

.ad {
  max-width: 100px;
  margin-top: 25px;
  margin-right: 20px;
  vertical-align: middle;
  display: inline-block;
}

.footer {
  background-color: #219150;
  padding-bottom: 40px;
  padding-top: 60px;
  align-items: flex-start;
  text-align: center;
}
</style>
