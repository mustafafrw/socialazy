<template>

  <div>
      <TopInfo v-if="$store.state.chData.length>0 && $store.state.totalComments.length>0" :chData="$store.state.chData" :comRes="$store.state.totalComments"/>
      <div class="font-sans leading-tight min-h-screen bg-grey-lighter">
          <Post v-for="index in $store.state.chComments" :index="index"/>
      </div>
    <hr>
    <br>
    <Pagination :page="page" :chid="$route.params.chId"/>

  </div>
</template>

<script>
   import Post from '@/components/post'
   import TopInfo from '@/components/TopInfo'
    import Pagination from '@/components/channel/Pagination'
   import axios from 'axios'
    export default {
        name: "index",
      computed:{
          page(){
            return "page"
          },
          description()
          {
            if(this.$store.state.chData.length>0 && this.$store.state.totalComments.length>0)
              return "Read the "+this.$store.state.totalComments[0].total+" youtube comments of "+this.$store.state.chData[0].ch_name + " | top liked comments on youtube - Socialazy";
            else
              return "Do you want to read top liked youtube comments and view entire comments of a certain channel?"

          },
          title()
          {
            if(this.$store.state.chData.length>0)
              return this.$store.state.chData[0].ch_name + " | Top liked youtube comments";
            else
              return "socialazy.com | top youtube comments";
          }
      },
      components:{
        Post,
        TopInfo,
        Pagination
      },
      async fetch ({ store, params }) {
        await store.dispatch('setchData',params.chId);
        await store.dispatch('setTotalComments',params.chId);
        await store.dispatch('setchComments',[{id:params.chId,page:1}]);
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
      /*mounted(){
        this.$store.dispatch("setchData",this.$route.params.chId);
        this.$store.dispatch("setTotalComments",this.$route.params.chId);
        this.$store.dispatch("setchComments",this.$route.params.chId);
      },
      computed:{
          totalComments(){
            return this.$store.getters.getTotalComments;
          },
          chData(){
            return this.$store.getters.getchData;
          },
          chComments(){
            return this.$store.getters.getchComments;
          }
      }*/
      /*asyncData({params}){
        return axios.get(`https://quotes10.website/yt/api/comments/${params.chId}`).then(response => {
          console.log(response.data);
          return { data: response.data }
        }).catch(e => console.log(e))
      }*/
      /*async asyncData({ params }) {
        let pageRes = await axios.get(`https://quotes10.website/yt/api/comments/${params.chId}`);
        let chRes = await axios.get(`https://quotes10.website/yt/api/channels/${params.chId}`);
        let comCount = await axios.get(`https://quotes10.website/yt/api/comment_count/${params.chId}`);

        return {
          data: pageRes.data,
          chData: chRes.data,
          comRes : comCount.data
        }
      }*/
    }
</script>

<style scoped>

</style>
