import Vue from 'vue'
import Router from 'vue-router'


import GChart from './components/GChart.vue';
import VueBar from './components/VueBars.vue';
import VueApexChart from './components/VueApexChart.vue';
import VueTrend from './components/VueTrend.vue';
import VueEChart from './components/VueECharts.vue';
import VueEChart3 from './components/VueEcharts3.vue';
import FrappeChart from './components/FrappeChart';

import VueChart from './containers/ChartContainer.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/frappe',
      name: 'frappe',
      component: FrappeChart
    },
    {
      path: '/vue-chart',
      name: 'vue-chart',
      component: VueChart
    },
    {
      path: '/gchart',
      name: 'gchart',
      component: GChart
    },
    {
      path: '/vuebar',
      name: 'vuebar',
      component: VueBar
    },
    {
      path: '/vue-apex-chart',
      name: 'vue-apex-chart',
      component: VueApexChart
    },
    {
      path: '/vue-trend',
      name: 'vue-trend',
      component: VueTrend
    },
    {
      path: '/vue-echart',
      name: 'vue-echart',
      component: VueEChart
    },
    {
      path: '/vue-echart3',
      name: 'vue-echart3',
      component: VueEChart3
    }
  ]
})
