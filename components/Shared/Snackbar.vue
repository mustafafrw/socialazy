<template>
   <v-snackbar
      v-model="$store.state.snackbar.show"
    >
      {{ $store.state.snackbar.message }}

      <template v-slot:action="{ attrs }">
        <v-btn
          @click="$store.commit('closeSnackbar')"
          color="white"
          v-bind="attrs"
          text
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script>
export default {
}
</script>

<style>

</style>