import http from "@/util/http-common";

const mapStore={
    namespaced: true,
    state:{
        categoryCode:10,
        detailData: null,
        address:null,
    },

    mutations:{
        SET_DETAIL_DATA(state,value){
            state.detailData = value;
            console.log(state.detailData)
        },
        SET_CATEGORY_CODE(state,value){
            state.categoryCode = value;
        }
    },
    actions:{
        fetchDetailData({commit}, contentId){
            console.log("detail!!!");
            console.log(contentId);
            http.get(`/attraction/${contentId}`)
                .then(response =>{
                    console.log("response!!!")
                    console.log(response.data);
                    commit('SET_DETAIL_DATA',response.data);
                })
                .catch(error=>{
                    console.error("데이터 가져오는 중",error);
                });
        },
        setCategoryCode({commit},categoryCode){
            commit('SET_CATEGORY_CODE',categoryCode)
        }
    },
    getters:{
        getCategoryCode(state){
            return state.categoryCode
        }
    }
};

export default mapStore;