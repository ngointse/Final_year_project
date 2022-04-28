<template>
  <div style="height: 100%">
    <iframe
      style="height: 20%; width: 30%; margin-top: 10px; margin-left: 35vw"
      :src="src"
    ></iframe>

    <v-date-picker v-model="dates" range></v-date-picker>
    <LineChart
      :key="`L1${refreshKey}`"
      :customChartData="computedData"
      :options="options"
    />
    <LineChart
      :key="`L2${refreshKey}`"
      :customChartData="computedData2"
      :options="options"
    />
    <LineChart
      :key="`L3${refreshKey}`"
      :customChartData="computedData3"
      :options="options"
    />
    <LineChart
      :key="`L4${refreshKey}`"
      :customChartData="computedData4"
      :options="options"
    />
    <LineChart
      :key="`L5${refreshKey}`"
      :customChartData="computedData5"
      :options="options"
    />
    <LineChart
      :key="`L6${refreshKey}`"
      :customChartData="computedData6"
      :options="options"
    />
  </div>
</template>

<script>
import moment from "moment";
import qualityData from "../Data/CoolingLoad15months.json";
import LineChart from "./LineChart.vue";
// import Vue from "vue";

export default {
  name: "TestView",
  components: {
    LineChart,
  },
  data() {
    return {
      refreshKey: 1,
      dates: ["2020-04-01", "2020-04-29"],
      startDate: "",
      endDate: "",
      src: "PolyuHHB.html",
      checkedFilterValues: ["Jan", "Feb"],
      customChartData: {
        datasets: [
          {
            data: [{ qualityData }],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "Data",
        },
      },
    };
  },
  watch: {
    dates() {
      this.refreshKey++;
    },
  },
  computed: {
    // a computed getter
    computedData() {
      // Guard Clause
      if (!qualityData) return {};
      if (this.dates.length !== 2) return {};
      const start = this.dates[0];
      const end = this.dates[1];
      const filteredList = qualityData.filter(
        (x) => moment(x.Timestamp).isBetween(start, end)
        //true or false
      );
      const list = filteredList.map((item) => item.Average_OAT);
      const label = filteredList.map((item) =>
        moment(item.Timestamp).format("YYYY-MM-DD HH:mm")
      );

      return {
        // [2,3,4,5,6,7]
        labels: label,
        datasets: [
          {
            label: "Temperature",
            data: list,
            borderColor: "#219150",
            pointBackgroundColor: "rgb(0,87,87)",
          },
        ],
      };
    },
    computedData2() {
      if (!qualityData) return {};
      if (this.dates.length !== 2) return;
      const start = this.dates[0];
      const end = this.dates[1];
      const filteredList = qualityData.filter((x) =>
        moment(x.Timestamp).isBetween(start, end)
      );
      const list = filteredList.map((item) => item.Humidity);
      const label = filteredList.map((item) =>
        moment(item.Timestamp).format("YYYY-MM-DD HH:mm")
      );

      return {
        labels: label,
        datasets: [
          {
            label: "Humidity",
            data: list,
            borderColor: "#219150",
            pointBackgroundColor: "rgb(0,87,87)",
          },
        ],
      };
    },
    computedData3() {
      if (!qualityData) return {};
      if (this.dates.length !== 2) return;
      const start = this.dates[0];
      const end = this.dates[1];
      const filteredList = qualityData.filter((x) =>
        moment(x.Timestamp).isBetween(start, end)
      );
      const list = filteredList.map((item) => item.UV_Index);
      const label = filteredList.map((item) =>
        moment(item.Timestamp).format("YYYY-MM-DD HH:mm")
      );

      return {
        labels: label,
        datasets: [
          {
            label: "UV_Index",
            data: list,
            borderColor: "#219150",
            pointBackgroundColor: "rgb(0,87,87)",
          },
        ],
      };
    },

    computedData4() {
      // Guard Clause
      if (!qualityData) return {};
      if (this.dates.length !== 2) return {};
      const start = this.dates[0];
      const end = this.dates[1];
      const filteredList = qualityData.filter(
        (x) => moment(x.Timestamp).isBetween(start, end)
        //true or false
      );
      const list = filteredList.map((item) => item.Average_Rainfall);
      const label = filteredList.map((item) =>
        moment(item.Timestamp).format("YYYY-MM-DD HH:mm")
      );

      return {
        // [2,3,4,5,6,7]
        labels: label,
        datasets: [
          {
            label: "Average_Rainfall",
            data: list,
            borderColor: "#219150",
            pointBackgroundColor: "rgb(0,87,87)",
          },
        ],
      };
    },

    computedData5() {
      // Guard Clause
      if (!qualityData) return {};
      if (this.dates.length !== 2) return {};
      const start = this.dates[0];
      const end = this.dates[1];
      const filteredList = qualityData.filter(
        (x) => moment(x.Timestamp).isBetween(start, end)
        //true or false
      );
      const list = filteredList.map((item) => item.NT_CoolingLoad);
      const list2 = filteredList.map((item) => item.ST_CoolingLoad);
      const label = filteredList.map((item) =>
        moment(item.Timestamp).format("YYYY-MM-DD HH:mm")
      );
      const label2 = filteredList.map((item) =>
        moment(item.Timestamp).format("YYYY-MM-DD HH:mm")
      );

      return {
        // [2,3,4,5,6,7]
        labels: label,
        label2,
        datasets: [
          {
            label: "NT_CoolingLoad",
            data: list,
            borderColor: "#219150",
            pointBackgroundColor: "rgb(0,87,87)",
          },
          {
            label: "ST_CoolingLoad",
            data: list2,
            borderColor: "#4871FE",
            pointBackgroundColor: "#14339B",
          },
        ],
      };
    },

    computedData6() {
      // Guard Clause
      if (!qualityData) return {};
      if (this.dates.length !== 2) return {};
      const start = this.dates[0];
      const end = this.dates[1];
      const filteredList = qualityData.filter(
        (x) => moment(x.Timestamp).isBetween(start, end)
        //true or false
      );
      const list = filteredList.map((item) => item.CoolingLoad);
      const label = filteredList.map((item) =>
        moment(item.Timestamp).format("YYYY-MM-DD HH:mm")
      );
      const label2 = filteredList.map((item) =>
        moment(item.Timestamp).format("YYYY-MM-DD HH:mm")
      );

      return {
        // [2,3,4,5,6,7]
        labels: label,
        label2,
        datasets: [
          {
            label: "CoolingLoad",
            data: list,
            borderColor: "#219150",
            pointBackgroundColor: "rgb(0,87,87)",
          },
        ],
      };
    },
  },

  methods: {
    moment,

    update() {
      setTimeout(() => {
        this.customChartData = {
          ...this.customChartData,
        };
      }, 2000);
    },
  },
};
</script>

<style scoped></style>
