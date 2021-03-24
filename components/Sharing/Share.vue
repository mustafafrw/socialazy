<template>
  <div>
    <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
        value="true"
      >
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              dark
            >Share this comment</v-toolbar>
            <v-card-text class="pa-3 text-center">
                <ShareNetwork
                    v-for="network in networks"
                    :network="network.network"
                    :key="network.network"
                    :url="share_url"
                    :title="videoinfo"
                    :description="sharing.description"
                    :quote="sharing.quote"
                    :hashtags="sharing.hashtags"
                    :twitterUser="sharing.twitterUser"
                >
                    <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            class="mx-2 mb-2"
                            fab
                            dark
                            v-bind="attrs"
                            v-on="on"
                            :style="{backgroundColor: network.color}"
                            >
                            <v-icon dark>
                                mdi-{{network.icon}}
                            </v-icon>
                        </v-btn>
                        </template>
                    
                        <span>{{network.network}}</span>
                    </v-tooltip>
                </ShareNetwork>

                <v-row
                    class="mt-2 text-center"
                >
                <v-col 
                    cols="12"
                    sm="10"
                >
                    <v-text-field
                        class="ml-2"
                        id="url-field"
                        readonly
                        :value="share_url"
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="2"
                >
                    <v-btn 
                      @click="copy()"
                      class="mt-3"
                    >Copy</v-btn>
                </v-col>
                </v-row>
            </v-card-text>

           
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="$emit('close')"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>

      
</div>
</template>

<script>

export default {
  props:["video_id","comment_id"],
  data () {
    return {
      sharing: {
        title: '',
        description: '',
        quote: '',
        hashtags: '',
        twitterUser: 'socialazyeu'
      },
      networks: [
        { network: 'facebook', name: 'Facebook', icon: 'facebook', color: '#1877f2' },
        { network: 'twitter', name: 'Twitter', icon: 'twitter', color: '#1da1f2' },
        { network: 'whatsapp', name: 'Whatsapp', icon: 'whatsapp', color: '#25d366' },
        { network: 'reddit', name: 'Reddit', icon: 'reddit', color: '#ff4500' },
        { network: 'email', name: 'Email', icon: 'email', color: '#333333' },
        { network: 'evernote', name: 'Evernote', icon: 'evernote', color: '#2dbe60' },
        { network: 'linkedin', name: 'LinkedIn', icon: 'linkedin', color: '#007bb5' },
        { network: 'pinterest', name: 'Pinterest', icon: 'pinterest', color: '#bd081c' },
        { network: 'quora', name: 'Quora', icon: 'quora', color: '#a82400' },
        { network: 'skype', name: 'Skype', icon: 'skype', color: '#00aff0' },
        { network: 'vk', name: 'Vk', icon: 'vk', color: '#4a76a8' },
        { network: 'wordpress', name: 'Wordpress', icon: 'wordpress', color: '#21759b' },
        { network: 'xing', name: 'Xing', icon: 'xing', color: '#026466' },
      ]
    }
  },
  computed:{
    share_url(){
      return this.$store.state.site+"/comment/"+this.video_id+"/"+this.comment_id
    },
    videoinfo(){
       if(this.video_id){
          let videoinfo = this.$store.state.videoinfo;
          if(videoinfo){
              let info = videoinfo[0];
              return info.snippet.title
          }
          else{
            return "";
          }
      }
    }
  },
  methods: {
      copy() {
        let testingCodeToCopy = document.querySelector('#url-field')
        testingCodeToCopy.setAttribute('type', 'text') 
        testingCodeToCopy.select()

        try {
          var successful = document.execCommand('copy');
          var msg = successful ? 'successful' : 'unsuccessful';
          this.$store.commit('showSnackbar','Link copied to clipboard')

        } catch (err) {
          this.$store.commit('showSnackbar','Unable to copy')
          alert('Oops, unable to copy');
        }
    },
    
  }

}
</script>

<style scoped>
    .v-card__text a{
        color: transparent
    }
</style>