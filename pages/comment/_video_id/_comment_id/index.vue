<template>
    <div>
        <VideoInformation 
            :data="videoinfo"
            :search="false"
            :comments_video="true"
        />
        <ListComments
            v-if="comment"
            :data="comment"
        />
        <div v-if="replies">
          <v-divider></v-divider>
          <ListReplies
              :data="replies"
          />
        </div>
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
        image: null,
        authorname: null
      }
    },
    components:{
        VideoInformation,
        ListReplies,
        ListComments
    },
    // async asyncData ({ store, params }) {
    //     await store.dispatch('setVideoInfo',params.video_id);
    //     await store.dispatch('setReplies',params.comment_id);
    // },
    async fetch(){
        await this.$store.dispatch('setVideoInfo',this.$route.params.video_id);
        await this.$store.dispatch('setReplies',this.$route.params.comment_id);
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
        try{
          if(videoinfo){
            let info = videoinfo[0];
            this.title = info.snippet.title;
            this.image = info.snippet.thumbnails.medium.url;

            if(this.comment){
              this.description = this.comment[0].snippet.topLevelComment.snippet.textOriginal
              this.authorname = this.comment[0].snippet.topLevelComment.snippet.authorDisplayName
              this.title = "Comment from "+this.authorname+" on YouTube - "+info.snippet.title
            }
            return info;
          }
          return null
        }catch(e) {
          return null
        }
      },
      url(){
        return this.$store.state.site+"/comment/"+this.$route.params.video_id+"/"+this.$route.params.comment_id
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