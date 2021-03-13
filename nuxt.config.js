import colors from 'vuetify/es5/util/colors'

export default {
  server: {
    port: 8080, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Socialazy.com',
    title: 'Socialazy - Search Comments on YouTube',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-site-verification', content: 'dCoWwkM7uJfvLr0T2f7boIfpC8oykCWuZYsKneWgZEs' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    'vue-social-sharing/nuxt',
    'nuxt-clipboard2'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  sitemap: [
    {
        path: 'https://socialazy.com',
        
        sitemaps: [
          {
            path: '/sitemap-channels.xml',
            routes: ['/channel/UCAiKrZDrrSJnLpDM-zEVyng',
            '/channel/UCu60hbJGH8nlCSFwfVe_wwA',
            '/channel/UCIr1YTkEHdJFtqHvR7Rwttg',
            '/channel/UCmo9ZEJ3ipgaZdkiRRYtLAg',
            '/channel/UCAiLfjNXkNv24uhpzUgPa6A',
            '/channel/UC4l6ZhkOzxIxvCSzDr4HKqg',
            '/channel/UC0VOyT2OCBKdQhF3BAbZ-1g',
            '/channel/UCGgf_k1y-_d-4Eh922iCCJg',
            '/channel/UCJ5i2Gi34JyMMy_LSzMk3bw',
            '/channel/UCqECaJ8Gagnn7YCbPEzWH6g',
            '/channel/UCikii81OBiRYH8sR5Uq3CEA',
            '/channel/UC-8Q-hLdECwQmaWNwXitYDw',
            '/channel/UCuQeltlW6VGpbpu6TFo4K7A',
            '/channel/UCHicabXz9rUMWLcdMqBtbxQ',
            '/channel/UC56gTxNs4f9xZ7Pa2i5xNzg',
            '/channel/UCN1hnUccO4FD5WfM7ithXaw',
            '/channel/UC9TO_oo4c_LrOiKNaY6aysA',
            '/channel/UCPVhZsC2od1xjGhgEc2NEPQ',
            '/channel/UCBR8-60-B28hp2BmDPdntcQ',
            '/channel/UCAuUUnT6oDeKwE6v1NGQxug',
            '/channel/UCBbceWr84mSVIc4TUQ5oJHg',
            '/channel/UCxMAbVFmxKUVGAll0WVGpFw',
            '/channel/UCrcdiq5Et39neYPOmGWlZ0w',
            '/channel/UC7_YxT-KID8kRbqZo7MyscQ',
            '/channel/UCPNxhDvTcytIdvwXWAm43cA',
            '/channel/UCPgMAS8woHJ_o_OZdTR7kcQ',
            '/channel/UClzCn8DxRSCuMFv_WfzkcrQ',
            '/channel/UC10uEpqkSlzW4ErRVIjwR5A',
            '/channel/UCgYwaV_vROKI2QBMbNXvjUQ',
            '/channel/UCKc34DWE7Th1W3TOV1mMWfw',
            '/channel/UC0sL86jDLgs2fGRD-XBnPQA',
            '/channel/UCYJPby9DRCteedh5tfxVbrw',
            '/channel/UCMv31RI59BTfQoGvTWfQhIg',
            '/channel/UCT9zcQNlyht7fRlcjmflRSA',
            '/channel/UCEdvpU2pFRCVqU6yIPyTpMQ',
            '/channel/UCQznUf1SjfDqx65hX3zRDiA',
            '/channel/UCQ75pjIhIi8BFqWdTnUpfjA',
            '/channel/UCDCNmuaOXOo25Yn4mbMHhhQ',
            '/channel/UCC3OGYxHwV8pB5yLobw9KdA',
            '/channel/UCgwv23FVv3lqh567yagXfNg',
            '/channel/UCnRrSZiaBUpOpry5piwN8oA',
            '/channel/UCZrvs3bKCZNxWFB2FWtKYjg',
            '/channel/UCuHzBCaKmtaLcRAOoazhCPA',
            '/channel/UCaum3Yzdl3TbBt8YUeUGZLQ',
            '/channel/UCAOtE1V7Ots4DjM8JLlrYgg',
            '/channel/UCtqXtLqPLhHhkhoPAfqN9bQ',
            '/channel/UCq3Ci-h945sbEYXpVlw7rJg',
            '/channel/UCSAUGyc_xA8uYzaIVG6MESQ',
            '/channel/UCkPUxnJSgHTyvCjW8-6HC-g',
            '/channel/UCcYrdFJF7hmPXRNaWdrko4w',
            '/channel/UCAVojJ1k03GZzjSbdXXunkw',
            '/channel/UC5OrDvL9DscpcAstz7JnQGA',
            '/channel/UC-6czyMkxDi8E8akPl0c7_w',
            '/channel/UCuEgW3r4ytXwd9UfQySv_Nw',
            '/channel/UCfFsZu7Ed20xKDOmzdpF3EQ',
            '/channel/UCm_k-dtiNNeGQq1NrJKdZGA',
            '/channel/UCHEf6T_gVq4tlW5i91ESiWg',
            '/channel/UCDod3BmyJaGN6uZaNg--rig',
            '/channel/UCRgn1KPoJrvRqLxj0t0JQgA',
            '/channel/UC2pmfLm7iq6Ov1UwYrWYkZA',
            '/channel/UCjZo1E1P6wDDyw6ImVgKM-A',
            '/channel/UC8nidfOKkcgpO6tfc9OSdBQ',
            '/channel/UCN9HPn2fq-NL8M5_kp4RWZQ',
            '/channel/UCWOA1ZGywLbqmigxE4Qlvuw',
            '/channel/UChU3JRloULzdFX3aCu7BiSA',
            '/channel/UCsT0YIqwnpJCM-mx7-gSA4Q',
            '/channel/UCccjdJEay2hpb5scz61zY6Q',
            '/channel/UCB8Ezju-2SqC35S7pPNk0qA',
            '/channel/UCIwFjwMjI0y7PDBVEO9-bkQ',
            '/channel/UCAvCL8hyXjSUHKEGuUPr1BA',
            '/channel/UC6SyiVWGViNSKF5-UOAuQ5w',
            '/channel/UCsbTG6lBt0ZMJCsFoR-Rh9w',
            '/channel/UC3rLoj87ctEHCcS7BuvIzkQ',
            '/channel/UCApVgpSBW-oKTHNBz4w9Lrg',
            '/channel/UCXv-co3EYHF7aOH4A93qAHQ',
            '/channel/UC2gzy_aI-luPtEpL-GzQP6w',
            '/channel/UC0vBXGSyV14uvJ4hECDOl0Q',
            '/channel/UCLTZddgA_La9H4Ngg99t_QQ',
            '/channel/UCeSkF8EXePqtSmqN26KNX5A',
            '/channel/UCqVCSWnuOSPm26orvNDTuWQ',
            '/channel/UCc8MitK2PC2xO9TcwkHxA2g',
            '/channel/UCBOUrcXLnI271yax25aRZCw',
            '/channel/UCDzIQwUEZ6UyePMItUuSOiQ',
            '/channel/UCaWd5_7JhbQBe4dknZhsHJg',
            '/channel/UCJ6td3C9QlPO9O_J5dF4ZzA',
            '/channel/UC3djj8jS0370cu_ghKs_Ong',
            '/channel/UCmtLC0U9vTNFnYl9eR5TdVQ',
            '/channel/UCz981RxgS-A2ID99W8wXzTA',
            '/channel/UCOR_VXS6SbcED8AVXoVLOZw',
            '/channel/UCdROBklME9BXuF7sVa9lQkA',
            '/channel/UCNbphYSpy5vF1sGHB-RSmlQ',
            '/channel/UCf_nwxeW0HYhLqXBf6xwyKg',
            '/channel/UCWM3X6PBg_z7ka3wVG6fOVw',
            '/channel/UC9Y5F3mbjd3_D_U1G3aX-VA',
            '/channel/UCgpm9otjHbjaLp9WwQYFgww',
            '/channel/UCIXIaHJM62iC5LyfG7kz_Jg',
            '/channel/UC3DkFux8Iv-aYnTRWzwaiBA',
            '/channel/UCLRr9JlFRouQTbXCmEMT3WQ',
            '/channel/UCspJ-h5Mw9_zeEhJDzMpkkA',
            '/channel/UC_yGU4qz9zAjEWLQxCg9NZQ',
            '/channel/UCVUdHi-tdW5AKdzMiTPG97Q',
            '/channel/UCNZASVKwjbXYKvwpdYVpIiA',
            '/channel/UCrPUg54jUy1T_wII9jgdRbg',
            '/channel/UC500_29hTGKAj6GBmSoMiBw',
            '/channel/UC6107grRI4m0o2-emgoDnAA',
            '/channel/UCyoDJMkfcfYyNhMmAhJApTg',
            '/channel/UCSZBmDk4v3ozB3kfB2oyUEA',
            '/channel/UCN64HIrZNqFQYZ2BuyY-4zg',
            '/channel/UCxuYPUdTZHRZKVRZ1km1plw',
            '/channel/UCys6HCFwzyOuX2veSWppfow',
            '/channel/UC-gW4TeZAlKm7UATp24JsWQ',
            '/channel/UCodkb-qBktJI5NrUsPYpf7g',
            '/channel/UCy-dvmsfmvYXBmt_huqqo1A',
            '/channel/UCl3u2wVCBafI_UJVDouXRyQ',
            '/channel/UCplwPnjH1AAB1He_7rMkHgQ',
            '/channel/UCoJ7iJz1vKwUqiaroO167sA',
            '/channel/UCxcjVHL-2o3D6Q9esu05a1Q',
            '/channel/UC4sRdUHV1pdo2vaXwZcNpkw',
            '/channel/UCNdpD9V0PIrH1glUJ6RG4-w',
            '/channel/UCQh6LB206jF3JxpCDD-fp5Q',
            '/channel/UC6Hg4sUu_MX3_uC_laL--LQ',
            '/channel/UCJqcphJAnsD5YDXcRFzTsOw',
            '/channel/UCQwo-Yh6mhN6iRVAfpJRgFA',
            '/channel/UCIjNPpgDqneu2MBSwR7gakA',
            '/channel/UC2YRwo8bonh-WW750sSpWhA',
            '/channel/UC_IAPpz6A3o7U1rvF42eR4A',
            '/channel/UCGWpjrgMylyGVRIKQdazrPA',
            '/channel/UCqhNRDQE_fqBDBwsvmT8cTg',
            '/channel/UCG42F4hEt69Fud85Z988vKQ',
            '/channel/UCyKa1YNZLio6XfjMR7fw45Q',
            '/channel/UC3aiftY0OSSSHlAyqpHqIUQ',
            '/channel/UChVRfsT_ASBZk10o0An7Ucg',
            '/channel/UCcn4UOBvB0W2HjCcLFLuu2w',
            '/channel/UCwv6y9fViXSmPsSw0RcfieA',
            '/channel/UC6OgrVCHz-bbBws44UjxrXw',
            '/channel/UCEM40qsPameeg9coM7Tb7rw',
            '/channel/UCUd0P7GJ_6UiLcIpfKH9sCQ',
            '/channel/UCK1fOv2ktzM7uXHxuw75GkQ',
            '/channel/UCjyiHWU_MCr5eus7_2GnZsA',
            '/channel/UCBAeFXaLV1ZqKqc-Uf3pKaA',
            '/channel/UClarhNTgYk5wuztsunOx2Cw',
            '/channel/UCbaK85JuGlk6LXXEUM_QfiQ',
            '/channel/UC0_LJ1oJtR5keARJWupA3_g',
            '/channel/UC57NWOXH8z61pbGu_8VAw3w',
            '/channel/UCWTSZNGVeQ8rRhvQaQ3PXnQ',
            '/channel/UCSaN-pFNW9hsESIBMs-4WIg',
            '/channel/UCmxc6kXbU1J-0pR2F3wIx9A',
            '/channel/UCEv4At-Hy_bGzNYNa03Up_A',
            '/channel/UCDjs-YnLzdYUREkCkLT4H1g',
            '/channel/UCqsS8fU6yVxrJr5y_CoUn3w',
            '/channel/UCrgg8czs7JBVBz6ZeSlcGOw',
            '/channel/UCqmQ1b96-PNH4coqgHTuTlA',
            '/channel/UC5aeU5hk31cLzq_sAExLVWg',
            '/channel/UChqcJ_MhP9a4bXy1jQ0QPzQ',
            '/channel/UCQ_hHJ0uTbzFLHrk1XHGXtw',
            '/channel/UCLRlryMfL8ffxzrtqv0_k_w',
            '/channel/UCljWH1nFYKtmcxZxanUd3rw',
            '/channel/UCW39zufHfsuGgpLviKh297Q',
            '/channel/UCCj956IF62FbT7Gouszaj9w',
            '/channel/UCUJHYmJ3_1Kwfs3lqYc_Rxg',
            '/channel/UC5q74spN32qtlkQTLoSErHw',
            '/channel/UCqO_lDZ1VRBUQkvcq_2RPaA',
            '/channel/UCKbgc_adaq6WqUT-4-6lwzw',
            '/channel/UCFZ75Bg73NJnJgmeUX9l62g',
            '/channel/UC3wla9xMoxDu7MIZImad1kQ',
            '/channel/UCihmYOoCWYffpuMfuP7BAqA',
            '/channel/UCXv-alMKw3H0Y85DLm1mo8A',
            '/channel/UCIB9xEZ5LgTvXwKWbGi9Vsw',
            '/channel/UCwRH985XgMYXQ6NxXDo8npw',
            '/channel/UCbThkgerVBzYrVuXliV34jQ',
            '/channel/UCQU3PO2g_rmqbmr8VJWvrsA',
            '/channel/UCiqDpd0zOh3evl73cZZPLQQ',
            '/channel/UCE_4AzEG60_GRBg4im9tKHg',
            '/channel/UC9d4i8NC6xNBRv_tOt6bL-Q',
            '/channel/UCBvc2GVFfuY6zxqdjNF-6sQ',
            '/channel/UCCprsL2xVSoReeKCCnWkd7Q',
            '/channel/UCfJ3tYNNgGJMwecBrEBSzag',
            '/channel/UC7Gf2tZ8coTX2ckTPgn62iQ',
            '/channel/UCzQMI4gtB50HUYAZIa2z-Hg',
            '/channel/UCHWt6SgUKVAox6LVXXePSmA',
            '/channel/UCmst562fALOY2cKb4IFgqEg',
            '/channel/UC0DZmkupLYwc0yDsfocLh0A',
            '/channel/UCLeuoGy_hUDTBf5Hk0ynrpQ',
            '/channel/UC-J-KZfRV8c13fOCkhXdLiQ',
            '/channel/UC_aEa8K-EOJ3D6gOs7HcyNg',
            '/channel/UCUnmH8N8k4E7y3dKfCzDKKg',
            '/channel/UC_kKZJy1PtJwwzkWnvoYOlw',
            '/channel/UC5yaRAqKKYYApdr326HQnsg',
            '/channel/UCqTwKvjbTENZDGbz2si47ag',
            '/channel/UCa94pyq0HNK8qAFUBJiVAeA',
            '/channel/UCzUhy9LnVChhLT9rOhOp_Qg',
            '/channel/UCwTRjvjVge51X-ILJ4i22ew',
            '/channel/UCVtFOytbRpEvzLjvqGG5gxQ',
            '/channel/UCfYW5GXBXueSO5p9bxD45qg',
            '/channel/UCT2X19JJaJGUN7mrYuImANQ',
            '/channel/UCjH3K3R7WXq46F2yE5TRmSw',
            '/channel/UCaFnJUS9uyysDbZn5fAIT3A',
            '/channel/UCoMdktPbSTixAyNGwb-UYkQ',
            '/channel/UC16niRr50-MSBwiO3YDb3RA',
            '/channel/UCiZ9jB1O8Aof6P2F9aRNJLg',
            '/channel/UCY14-R0pMrQzLne7lbTqRvA',
            '/channel/UChJW2HOHc5eWZi1X9jf9hTQ',
            '/channel/UCakk4PWh64dX8TiDdpxhHTA',
            '/channel/UC6B64FzMdVOvtgo6ebdRCjA',
            '/channel/UCO_DaPp4ifhMAmiyybSLx9w',
            '/channel/UC3AycMD9CjEndg3CHE2MUgQ',
            '/channel/UCHdMK5Ef2El8KbD3L_WgANg',
            '/channel/UCd8iY-kEHtaB8qt8MH--zGw',
            '/channel/UCIEv3lZ_tNXHzL3ox-_uUGQ',
            '/channel/UCEY1ejsweY4DgMwOVJeEaBA',
            '/channel/UCjgpFI5dU-D1-kh9H1muoxQ',
            '/channel/UC4PziMH5MvvsmqM0VCZTy-g',
            '/channel/UCczuDpBlXXdOuheWZClbRCw',
            '/channel/UC2JTZJAtJtckj2v0ETYsDHg',
            '/channel/UCTUPsBBQA4Am8k23BYETRJg',
            '/channel/UChULBXQf9VDYAi3vRLu_U-w',
            '/channel/UCSh__r5HS4Y1xBkccWnV0TA',
            '/channel/UCt2JXOLNxqry7B_4rRZME3Q',
            '/channel/UCMBXjVFU51CJ047U1Wp3JKQ',
            '/channel/UCxYPsL5vUK-tkhHLWenXd2g',
            '/channel/UCm3hAp1m1xlAz0ve_EKAo4g',
            '/channel/UCAJetkuJ2zz92WOJCrQvfkw',
            '/channel/UCbqI6_GGn3Q6DbBQuFIJ3Og',
            '/channel/UCXUnNWNld3gUR5yh2_1LXNA',
            '/channel/UCm9L2p8ow5sxONXELw3-_3A',
            '/channel/UCynLtJ9E2c34bui4ON0ovGw',
            '/channel/UC11OPzwn5Wt0-LN3rARunmg',
            ],
            gzip: true
          }
        ]
    }
  ]
}
