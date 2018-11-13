<template>
	<div>
		<small>Your place here: </small>
    <input v-model.number="num" type="number" min="1" max="10" step="1"/>
    <div class="won">
      <h2>Congratulations!</h2>
      <p>You won <span>{{ num | award }}</span> place!</p>
    </div>
	</div>
</template>
<script>
export default {
  directive: {

  },
	data() {
		return{
			num: 1,
		}
  },
  filters: {
    award(num) {
      switch (num) {
        case 1:
          return `${num}st`
          break;
        case 2:
          return `${num}nd`
          break;
        case 3:
          return `${num}rd`
          break;
        default:
          return `${num}th`
      }
    }
  }
}
</script>
<style scoped>
  span {
    font-size: 40px;
  }

  .won {
    background: #ffc968;
    padding: 10px 20px;
    border-radius: 3px;
    margin: 10px;
  }
</style>