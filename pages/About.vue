<template>
        <v-card>
        <v-card-title class="headline">
          About Socialazy.com
        </v-card-title>
        <hr class="my-3">
        <v-card-text>
            We are two young entreprenuers who have developed our own website. The website is about comments posted on youtube channels, so the main idea is;<br><br>

            1. You can see the top liked youtube comments on your youtube channel which will help you develop your content in line with the most supported comments.<br>
            <br>
            2. You can have a general overview about your subscribers’ comments which will lead you to see the big cake.<br>
            <br>
            3. Since youtube has become very competitve, you can see the top comments of other youtube channels as well. Just to underscore that you will not see a video’s top comments but the entire channel’s.<br>
            <br>
            4. You can view the entire comments of a certain subscriber has made on youtube which will enable you to deeply understand what your top subscribers are fond of.<br>
<br>
            Firstly we more than welcome any idea that you want us to develop. We strongly believe that the website is worth to take a visit. To see the best comments in your videos and to make more content about it, go to socialazy.com<br>
            <br>
            Enjoy your journey on our website!<br>
            <br>
            If you want to contact with us you can send a message to<br>

          <div>
            <em><small>&mdash; socialazybox@gmail.com</small></em>
          </div>
          

        </v-card-text>

      </v-card>
</template>

<script>
export default {
  data(){
    return{
      title: "About",
      description: "About | Socialazy.com, Search Comments on YouTube"
    }
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

<style>

</style>