<template>
  <div>

    <div>

      <div class="bg-indigo-900 text-center py-4 lg:px-4">
        <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none rounded-full flex inline-flex" role="alert">
          <span class="font-semibold mr-2 text-left flex-auto">Recently Added Channels</span>
        </div>
      </div>

      <div class="flex flex-wrap font-sans bg-grey-lighter p-8">
        <ChCard v-for="index in $store.state.channels" :ch="index"/>
      </div>

    </div>

    <Pagination v-if="$store.state.channels.length>0" :page="page" />

  </div>
</template>

<script>
    import ChCard from '@/components/channel/chcard'
    import Pagination from '@/components/Pagination'
    export default {
      name: "index",
      data(){
        return {page:"page",
          description : "Do you want to read top liked youtube comments and view entire comments of a certain channel?"}
      },
      components:{
        ChCard,
        Pagination
      },
      created() {
        if(this.$store.getters.getcurrentPage===1)
          this.$store.commit("setcurrentPage",this.$route.params.page);
      },
      computed:{
        dalga(){
          return this.$store.getters.getchannels;
        },
        title(){
          return "socialazy.com | top liked youtube comments | page "+this.$route.params.page;
        }
      },
      async fetch ({ store, params })
      {
        await store.dispatch("setchannels",params.page);
      },
      head () {
        return {
          title: this.title,
          meta: [
            // hid is used as unique identifier. Do not use `vmid` for it as it will not work
            { hid: 'description', name: 'description', content: this.description }
          ]
        }
      }
    }

</script>

<style scoped>

</style>
