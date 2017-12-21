<template>
  <div>
    <h1>{{ title }}</h1>
    <btn-add></btn-add>
  </div>
</template>

<script>
import BtnAdd from '@/components/BtnAdd'

export default {
  name: 'home',
  components: { BtnAdd, BtnLogin },

  data () {
    return {
      title: 'Home'
    }
  }
}
</script>

<style>

</style>
