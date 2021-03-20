<template>
  <v-btn
      v-if="pagetoken"
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      @click="loadmore()"
    >More Comments
    <template v-slot:loader>
        <span class="custom-loader">
          <v-icon light>mdi-cached</v-icon>
        </span>
      </template>
    </v-btn>
</template>

<script>
export default {
    data () {
      return {
        loader: null,
        loading: false,
      }
    },
    methods:{
      async loadmore(){
        this.loader = 'loading'
        await this.$store.dispatch('LoadMore');
      }
    },
    computed: {
      pagetoken () {
        return this.$store.state.lastrequest.nextPageToken
      },
    },
    watch: {
       loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 1500)

        this.loader = null
      },
    },
}
</script>

<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>