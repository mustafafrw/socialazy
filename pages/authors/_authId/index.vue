<template>

  <div>
    <AuthorTopInfo :authorInfoData="$store.state.auData"/>

    <div class="font-sans leading-tight min-h-screen bg-grey-lighter">

      <AuthorCard v-for="index in $store.state.auComments" :index="index"/>

    </div>
  </div>
</template>

<script>
  import AuthorCard from '~/components/AuthorCard.vue'
  import axios from 'axios'
  import AuthorTopInfo from "~/components/AuthorTopInfo";
  export default {
    name: "index",
    components:{
      AuthorTopInfo,
      AuthorCard
    },
    computed:{
      description()
      {
        if(this.$store.state.auData.length>0)
          return "Top liked youtube comments of "+this.$store.state.auData[0].display_name + " - Socialazy";
        else
          return "Do you want to read top liked youtube comments and view entire comments of a certain channel?"

      },
      title()
      {
        if(this.$store.state.auData.length>0)
          return this.$store.state.auData[0].display_name + " | top liked youtube comments";
        else
          return "socialazy.com | top youtube comments";
      }

    },
    async fetch ({ store, params }) {
      await store.dispatch('setauComments',params.authId);
      await store.dispatch('setauData',params.authId);
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
   /* mounted() {
      this.$store.dispatch("setauComments",this.$route.params.authId);
      this.$store.dispatch("setauData",this.$route.params.authId);
    },
    computed:{
      auComments(){
        return this.$store.getters.getauComments;
      },
      auData(){
        return this.$store.getters.getauData;
      }
    }*/
    /*async asyncData({ params }) {
      let authorPage = await axios.get(`https://quotes10.website/yt/api/authors/${params.authId}`);
      let authorInfoPage = await axios.get(`https://quotes10.website/yt/api/author_info/${params.authId}`);

      return {
        authorData: authorPage.data,
        authorInfoData: authorInfoPage.data
      }*/

  }
</script>

<style scoped>

</style>
