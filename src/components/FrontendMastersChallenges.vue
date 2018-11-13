<template>
<div>
  <h3>Frontend Masters Solutions</h3>
  <div class="location-contain">
    <img-holder v-bind:key="location.name" v-for="location in locations" v-bind:name="location.name"  v-bind:img="location.img" v-bind:desc="location.desc"></img-holder>
  </div>
  <bounce-ball></bounce-ball>
  <filter-place></filter-place>
</div>
</template>
<script>
import ImgHolder from './ImgHolder.vue';
import BounceBall from './BounceBall.vue';
import FilterPlace from './FilterPlace.vue';
export default {
  components: {
    'img-holder': ImgHolder,
    'bounce-ball': BounceBall,
    'filter-place': FilterPlace,
  },
  data () {
    return {
      locations: [
        {
          name: 'moscow',
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/moscow.svg',
          desc: `Moscow is the capital and most populous city of Russia, with 13.2 million residents within the city limits and 17.8 million within the urban area. Moscow has the status of a Russian federal city.`
        },
        {
          name: 'paris1',
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/paris1.svg',
          desc: `Paris is the capital and most populous city of France. By the 17th century, Paris was one of Europe's major centres of finance, commerce, fashion, science, and the arts, and it retains that position still today.`
        },
        {
          name: 'rome',
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/rome.svg',
          desc: `Rome's history spans more than 2,500 years. While Roman mythology dates the founding of Rome at around 753 BC, the site has been inhabited for much longer, making it one of the oldest continuously occupied sites in Europe.`
        },
        {
          name: 'paris',
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/paris2.svg',
          desc: `Paris is the capital and most populous city of France. By the 17th century, Paris was one of Europe's major centres of finance, commerce, fashion, science, and the arts, and it retains that position still today.`
        },
			]
    }
  }
}
</script>
<style scoped>
  .location-contain {
  display: flex;
  justify-content: center;
}

  h1 {
      text-align: center;
    }

	.place {
		display: flex;
		flex-direction: column;
		width: 280px;
		height: 320px;
		justify-content: center;
		background: white;
		border: 1px solid #ddd;
		padding: 20px 20px;
		margin: 10px;
		h2 {
			margin: 0;
			text-align: center;
		}
		img {
			margin: 10px;
			align-self: center;
		}
	}
</style>