<template>
    <div>

      <div>

        <div class="bg-indigo-900 text-center py-4 lg:px-4">
          <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none rounded-full flex inline-flex" role="alert">
            <span class="font-semibold mr-2 text-left flex-auto">Recently Added Channels</span>
          </div>
        </div>

        <ChCardLists/>

      </div>

      <Pagination v-if="$store.state.channels.length>0" :page="page" />

    </div>

</template>

<script>

  import Pagination from '@/components/Pagination';
  import ChCard from '@/components/channel/chcard'
  import ChCardLists from '@/components/channel/ChCardLists'

  import axios from 'axios'
export default {

  components: {
    ChCard,
    Pagination,
    ChCardLists
  },
  data(){
    return {
      currentPage:0,
      page:"page",
      title : "socialazy.com | top liked youtube comments",
      description : "Do you want to read top liked youtube comments and view entire comments of a certain channel?"
    }
  },
  watch:{
    currentPage()
    {
        this.$store.commit("setcurrentPage",this.currentPage);
    }
  },
  /*async fetch ({ store, params }) {
    let { data } = await axios.get('https://quotes10.website/yt/api/fetchChannels/0');
    store.commit('setchannels', data)
  }*/
  async fetch ({ store, params }) {

    await store.dispatch('setchannels',store.getters.getcurrentPage);
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
  /*data(){
    return {
      xa:0
    }
  },*/

 /* asyncData({app,params,store}){
      console.log("sa-> "+app);
      return {
         channels : store.getters.getchannels
      }
  },
  mounted(){
    this.$store.dispatch("setchannels",0);
  },*/
  /*computed:{
     channels(){
       return this.$store.getters.getchannels;
     }
  }*/
  /*async asyncData({ params }) {
    console.log({params});
    let pageRes = await axios.get(`https://quotes10.website/yt/api/fetchChannels/0`);
    console.log("for ch -> "+pageRes.data);
    return {
      data: pageRes.data
    }
  }*/

}
</script>

<style scoped>
</style>
