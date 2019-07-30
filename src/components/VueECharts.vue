<template>
<div>
  <h3>Vue ECharts</h3>
    <v-chart :options="option"/>
</div>
</template>
<script>
import Vue from 'vue'
import ECharts from 'vue-echarts' // refers to components/ECharts.vue in webpack

// import ECharts modules manually to reduce bundle size
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'

// If you want to use ECharts extensions, just import the extension package and it will work
// Taking ECharts-GL as an example:
// You only need to install the package with `npm install --save echarts-gl` and import it as follows

export default {
  components: {
    'v-chart': ECharts
  },
  data: function () {
    let data = []

    for (let i = 0; i <= 360; i++) {
        let t = i / 180 * Math.PI
        let r = Math.sin(2 * t) * Math.cos(2 * t)
        data.push([r, i])
    }

    return {
      option: {
        title: {
          text: 'ECharts entry example'
        },
        tooltip: {},
        legend: {
          data:['Sales']
        },
        xAxis: {
          data: ["shirt","cardign","chiffon shirt","pants","heels","socks"]
        },
        yAxis: {},
        series: [{
          name: 'Sales',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
    }
  }
}
</script>
<style scoped>

</style>