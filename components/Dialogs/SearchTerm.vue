<template>
  <v-dialog
      :value="true"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          Search
          </v-card-title>
        <v-card-text>
          Search comments
          <v-text-field v-model="searchTerm"
            @keyup.enter="search()"
           />
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="primary darken-1"
            text
            @click="$emit('close')"
          >
            Cancel
          </v-btn>

          <v-btn
            color="red darken-1"
            text
            :disabled = "searchTermInvalid"
            @click="search()"
          >
            Search
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
    props:["id","type"],
    data(){
      return {
         searchTerm: null
      }
    },
    methods:{
        search(){
            if(!this.searchTermInvalid){
              let payload= {
                  id: this.id,
                  term: this.searchTerm
              };
              if(this.type=="channel"){
                this.$store.dispatch("setDataWithTerm_Channel",payload);
              }
              else if(this.type=="video"){
                this.$store.dispatch("setDataWithTerm_Video",payload);
              }
              this.$emit("close")
            }
        }
    },
    computed:{
      searchTermInvalid(){
        if(this.searchTerm){
            if(this.searchTerm.length<2){
                return true
            }
        }else{
            return true
        }
      }
    }
}
</script>

<style>

</style>