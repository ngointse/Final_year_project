<template>
<div>
  <div class="home" :style="{'background-image':'url(tree7.jpg)'}">

    <div class="section-page" >
      <h1 class="h1">Features</h1>
    </div>
  </div>

  <div class="img-aqi">
          <img src="AQI.jpg" alt="" class="aqi">
   </div>

  <div class="feature-concept">
    <h3>Air Quality Index</h3>
    <p>Government agencies use an air quality index (AQI) to convey to the public how filthy the air is now or how polluted it is expected to grow. As the AQI grows, so do the threats to public health. Different nations have their own air quality indices, which correlate to various national air quality standards.</p>
    <h3>IoT devices</h3>
    <p>AI and machine learning are increasingly being used by IoT devices to provide intelligence and autonomy to systems and processes such as autonomous driving, industrial smart manufacturing, medical equipment, and home automation. Many of these devices are low-power, low-cost microcontroller-based systems. Rather of utilizing cloud-based technologies, data is handled on the IoT endpoint.</p>
    <h3>Cooling Load</h3>
    <p>The rate at which sensible and latent heat must be evacuated from a space in order to maintain a constant space dry bulb air temperature and humidity is known as the cooling load. Sensible heat produces an increase in the air temperature in a room, whereas latent heat causes an increase in the moisture content of the space.</p>

    <h1>Tips</h1>

    <ul style="list-style-type:circle">
    <li>Look for the ENERGY STAR label when buying home or office equipment.</li>
    <li>Carpool, use public transportation, bike, or walk whenever possible.</li>
    <li>Follow gasoline refueling instructions for efficient vapor recovery, being careful not to spill fuel and always tightening your gas cap securely.</li>
    <li>Combine errands and reduce trips. Walk to errands when possible.</li>
    <li>Reduce or eliminate fireplace and wood stove use.</li>
    <li>Avoid burning leaves, trash, and other materials.</li>
    <li>Avoid using gas-powered lawn and garden equipment.</li>
      <li>Be sure your tires are properly inflated.</li>
      <li>Use environmentally safe paints and cleaning products whenever possible.</li>
    </ul>

  </div>

  <footer class="footer">
    <div class="footer-content">
    </div>
  </footer>


    </div>
    </template>

    <script>
    export default {
      name: "FeaturesView"
    }
    </script>

    <style scoped>

    .img-aqi {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .aqi{
      padding: 20px;
      max-width: 900px;
      vertical-align: middle;
      display: inline-block;
    }

    .feature-concept {
      margin-left: auto;
      margin-right: auto;
      width: 950px;
    }
    
    h3{
      color: #219150;
      margin-top: 20px;
      font-size: 20px;
    }
    
    p {
      font-size: 18px;
    }

    .footer {
      background-color: #219150;
      padding-bottom: 40px;
      padding-top: 60px;
      align-items: flex-start;
      text-align: center;
    }

    ul{
      margin-left: 10px;
      margin-bottom: 20px;
      padding: 15px;
    }
    
    li {
      font-size: 20px;
    }

    </style>