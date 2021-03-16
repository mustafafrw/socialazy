<template>
    <div>
      <VideoInformation 
          :data="videoinfo"
      />
      <ListComments
          :data="comment"
      />
    </div>
</template>

<script>
import VideoInformation from "@/components/Main/VideoInformation"
import ListComments from "@/components/Main/ListComments"

export default {
    data(){
      return {
        title: null,
        description: null,
        image: null,
        titleEnd: " - YouTube Video Comments",
        desc: "Look at the best comments on YouTube, explore new comments and share with others. - "
      }
    },
    components:{
        VideoInformation,
        ListComments
    },
    async asyncData ({ store, params }) {
        await store.dispatch('setDataWithVideoId',params.video_id);
        await store.dispatch('setVideoInfo',params.video_id);
    },
    computed: {
      comment(){
        return this.$store.state.data
      },
      videoinfo () {
        let videoinfo = this.$store.state.videoinfo
        
        if(videoinfo){
          let info = videoinfo[0];
          this.title = info.snippet.title+this.titleEnd;
          this.image = info.snippet.thumbnails.medium.url

          if(this.comment){
            this.description = this.desc+this.title
          }
          return info;
        }
        return null
      },
      url(){
        return this.$store.state.site+"/comment/"+this.$route.params.video_id
      }
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