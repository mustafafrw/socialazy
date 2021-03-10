<template>
     <v-card>
        <v-card-title class="headline">
          Privacy Policy of Socialazy.com
        </v-card-title>
         <hr class="my-3">
        <v-card-text>
            

        <div class="flex items-center justify-center w-screen">
      <div class="bg-indigo-800 text-white font-bold rounded-lg border shadow-2xl p-10 m-10">

           <span>This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, the Socialazy website.
           </span><br>
        <br>
        <div class="text-orange-300 font-bold text-s text-left shadow-s m-5">
          <span>Cookies</span>

        </div>
        <br>
        <p>Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer’s hard drive.</p>

        <p>Our website uses these "cookies" to collection information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.</p>
        <br>
        <div class="text-orange-300 font-bold text-s text-left shadow-s m-5">
          <span>Service Providers</span>

        </div>
        <br>
        <p>This site use Youtube Data API to get comments and other data. You can find the link below. Pleas go that link and get information about Youtube Terms of Services. <br><br>

          <a class="text-orange-300" href="https://www.youtube.com/static?template=terms">https://www.youtube.com/static?template=terms</a>

        </p>
        <br>
        <div class="text-orange-300 font-bold text-s text-left shadow-s m-5">
          <span>Contact us</span>

        </div>

        <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us from <span class="text-orange-300">
            <div>
            <em><small>&mdash; socialazybox@gmail.com</small></em>
          </div>
          </span></p>
      </div>
    </div>
        </v-card-text>

      </v-card>
</template>

<script>
export default {
  data(){
    return{
      title: "Privacy Policy",
      description: "Privacy Policy | Socialazy.com, Live Comments on YouTube"
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