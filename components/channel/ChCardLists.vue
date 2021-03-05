<template>
  <div class="flex flex-wrap font-sans bg-grey-lighter p-8">
    <ChCard v-for="index in $store.state.channels" :ch="index"/>
  </div>
</template>

<script>
  import ChCard from '~/components/channel/chcard.vue'
  import axios from 'axios'
  export default {

    components: {
      ChCard
    },
    async fetch ({ store, params }) {
      await store.dispatch('setchannels',store.getters.getcurrentPage);
    }
    /*asyncData({params}){

      return axios.get(`https://quotes10.website/yt/api/channels`).then(response => {
        return { data: response.data}
      }).catch(e => console.log(e))
    }*/

  }
</script>

<style scoped>
</style>
