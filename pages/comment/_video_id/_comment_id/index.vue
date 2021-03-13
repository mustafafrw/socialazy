<template>
    <div>
      <VideoInformation 
          :data="videoinfo"
      />
      <ListComments
          :data="comment"
      />
      <v-divider v-if="replies"></v-divider>
      <ListReplies
          :data="replies"
      />
    </div>
</template>

<script>
import VideoInformation from "@/components/Main/VideoInformation"
import ListReplies from "@/components/Main/ListReplies"
import ListComments from "@/components/Main/ListComments"

export default {
    data(){
      return {
        title: null,
        description: null,
        image: null
      }
    },
    components:{
        VideoInformation,
        ListReplies,
        ListComments
    },
    async asyncData ({ store, params }) {
        await store.dispatch('setVideoInfo',params.video_id);
        await store.dispatch('setReplies',params.comment_id);
    },
    computed: {
      replies () {
        return this.$store.state.replies
      },
      comment(){
        return this.$store.state.data
      },
      videoinfo () {
        let videoinfo = this.$store.state.videoinfo
        
        if(videoinfo){
          let info = videoinfo[0];
          this.title = info.snippet.title;
          this.image = info.snippet.thumbnails.medium.url

          if(this.comment){
            this.description = this.comment[0].snippet.topLevelComment.snippet.textOriginal
        
          }
          return info;
        }
        return null
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
          { property: 'og:image', content: this.image }
        ]
      }
    }
}
</script>

<style>

</style>