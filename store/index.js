import Vuex from "vuex";
import axios from "axios"

const createStore = () => {
  return new Vuex.Store({
        state:{
             totalComments : [],
             chData:[],
             chComments:[],
             auComments:[],
             auData:[],
             channels:[],
             currentPage:1,
            currentChPage:1
        },
        mutations:{
            setTotalComments(state,data){
                state.totalComments = data;
            },
            setchData(state,data){
                state.chData = data;
            },
            setchComments(state,data){
              state.chComments = data
            },
            setauComments(state,data)
            {
              state.auComments = data;
            },
            setauData(state,data){
              state.auData = data;
            },
            setchannels(state,data)
            {
              state.channels = data;
            },
            setcurrentPage(state,data)
            {
              state.currentPage = data;
            },
            setPageNext(state)
            {
              state.currentPage+=1;
            },
            setPagePrevious(state)
            {
              state.currentPage-=1;
            },
            setcurrentChPageNext(state)
            {
              state.currentChPage+=1;
            },
            setcurrentChPagePrevious(state)
            {
              state.currentChPage-=1;
            },
            setcurrentChPage(state,data)
            {
              state.currentChPage= data;
            }
        },
        actions:{
            async setTotalComments(vuexContext,chid){
              vuexContext.commit("setTotalComments", "");
              await axios.get("https://quotes10.website/yt/api/comment_count/"+chid)
                .then(response => {
                  let data = response.data;

                  vuexContext.commit("setTotalComments", data)
                })
            },
            async setchData(vuexContext,chid){
              vuexContext.commit("setchData", "");
              await axios.get("https://quotes10.website/yt/api/channels/"+chid)
                .then(response => {
                  let data = response.data;

                  vuexContext.commit("setchData", data)
                })
            },
            async setchComments(vuexContext,info){
              vuexContext.commit("setchComments", "");
              await axios.get("https://quotes10.website/yt/api/comments/"+info[0].id+"/"+(info[0].page-1)*12)
                .then(response => {
                  let data = response.data;

                  vuexContext.commit("setchComments", data)
                })
            },
            async setauComments(vuexContext,auid){
              vuexContext.commit("setauComments", "");
              await axios.get("https://quotes10.website/yt/api/authors/"+auid)
                .then(response => {
                  let data = response.data;
                  vuexContext.commit("setauComments", data)
                })
            },
            async setauData(vuexContext,auid){
              vuexContext.commit("setauData", "");
              await axios.get("https://quotes10.website/yt/api/author_info/"+auid)
                .then(response => {
                  let data = response.data;
                  vuexContext.commit("setauData", data)
                })
            },
          //
          async setchannels(vuexContext,page){
            vuexContext.commit("setchannels", "");
            await axios.get("https://quotes10.website/yt/api/fetchChannels/"+(page-1)*10)
              .then(response => {
                let data = response.data;
                vuexContext.commit("setchannels", data)
              })
          }
        },
        getters:{
            getTotalComments(state)
            {
              return state.totalComments;
            },
            getchData(state){
                return state.chData;
            },
            getchComments(state)
            {
              return state.chComments;
            },
            getauComments(state)
            {
              return state.auComments;
            },
            getauData(state){
              return state.auData;
            },
            getchannels(state){
              return state.channels;
            },
            getcurrentPage(state)
            {
              return state.currentPage;
            },
            getcurrentChPage(state)
            {
              return state.currentChPage;
            }
        }

  });

};

export default createStore


