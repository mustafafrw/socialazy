<template>
    <div>
        <ChannelInformation 
          :topinfo="topinfo" 
        />
        <ListComments 
          :data="data"
        />
        <SearchTerm 
          v-if="$store.state.searchdialog"
          :id= "$route.params.id"
          @close="$store.commit('setSearchDialog')"
        />
    </div>
</template>

<script>
import SearchTerm from "@/components/Dialogs/SearchTerm"
import ListComments from "@/components/Main/ListComments"
import ChannelInformation from "@/components/Main/ChannelInformation"
export default {
    components:{
      SearchTerm,
      ListComments,
      ChannelInformation
    },
    data: () => ({
      title: null,
      description: null,
      image: null,
      descEnd: " - Socialazy.com, Search Comments on YouTube"
    }),
    computed: {
      data () {
        return this.$store.state.data
      },
      topinfo () {
        let topinfo = this.$store.state.topinfo
        if(topinfo){
          let top = topinfo[0];
          this.title = top.snippet.title;
          this.description = top.snippet.title + this.descEnd;
          this.image = top.snippet.thumbnails.medium.url
          return top;
        }
        return null
      },
      url(){
        return this.$store.state.site+"/channel/"+this.$route.params.id
      }
    },
    async asyncData ({ store, params }) {
        await store.dispatch('setData',params.id);
        await store.dispatch('setTopInfo',params.id);
    },
    head () {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'description', name: 'description', content: this.description },
          { property: 'og:title', content: this.title },
          { property: 'og:description', content: this.description },
          { property: 'og:image', content: this.image },
          { property: 'og:url', content: this.url },
          { property: 'twitter:card', content: 'summary' },
          { property: 'twitter:site', content: '@socialazyeu' },
        ]
      }
    }

}
</script>

<style>

</style>