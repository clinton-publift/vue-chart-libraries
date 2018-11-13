<template>
<div>
  <h3>Vue Bars</h3>
  <bars
    :data="[{value: 0, title: ''}, {value: 1, title: 'test1'}, {value: 5, title: 'test5'}, {value: 2, title: 'test2'}, {value: 1, title: 'test1'}]"
    :gradient="gradient"
    :barWidth="5"
    :growDuration="1">
  </bars>
</div>
</template>
<script>
import Bars from 'vuebars'
export default {
  components: {
    Bars
  },
  data () {
    return {
      chartOptions: {
        series: [{
          data: [1,2,3] // sample data
        }]
      }
    }
  }
}
</script>
<style scoped>

</style>