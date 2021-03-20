<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      :mini-variant="true"
      fixed
      app
    >
      <v-list>
        <div
          v-for="(item, i) in items"
        >
          <v-tooltip 
            right
          >
            <template v-slot:activator="{ on, attrs }">
              <v-list-item
                
                :key="i"
                :to="item.to"
                v-bind="attrs"
                v-on="on"
                router
                exact
              >
                <v-list-item-action>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title" />
                </v-list-item-content>
              </v-list-item>
          </template>   
        <span>{{item.title}}</span>
        </v-tooltip>
       </div>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

    

      <v-toolbar-title v-text="title" />
      <v-spacer />

    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>Socialazy.com &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    <Snackbar />
  </v-app>
</template>

<script>
import Snackbar from "@/components/Shared/Snackbar"

export default {
  components:{
    Snackbar
  },
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: true,
      items: [
        {
          icon: 'mdi-magnify',
          title: 'Search',
          to: '/'
        },
        {
          icon: 'mdi-map-marker',
          title: 'Videos Near Me',
          to: '/nearme'
        },
        {
          icon: 'mdi-information-outline',
          title: 'About us',
          to: '/about'
        },
        {
          icon: 'mdi-fingerprint',
          title: 'Privacy Policy',
          to: '/privacypolicy'
        },
        {
          icon: 'mdi-note-text',
          title: 'Terms of Service',
          to: '/termsofservice'
        }
      ],
      title: 'Socialazy'
    }
  }
}
</script>
