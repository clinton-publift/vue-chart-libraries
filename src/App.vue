<template>
  <div>
    <nav>
      <router-link to="/gchart">GChart</router-link>
      <router-link to="/vuebar">Vue Bar</router-link>
      <router-link to="/vue-apex-chart">VueApexChart</router-link>
      <router-link to="/vue-trend">Vue Trend</router-link>
      <router-link to="/vue-echart">Vue EChart</router-link>
      <router-link to="/vue-echart3">Vue EChart3</router-link>
      <router-link to="/vue-chart">Vue Chart</router-link>
      <router-link to="/frappe">Frappe</router-link>
    </nav>
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
