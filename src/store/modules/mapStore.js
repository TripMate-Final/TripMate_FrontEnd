import http from "@/util/http-common";

const mapStore={
    namespaced: true,
    state:{
        categoryCode:10,
        detailData: null,
        address:null,
        selectedDay:0,
        planList:[]
    },

    mutations:{
        SET_DETAIL_DATA(state,value){
            state.detailData = value;
            console.log(state.detailData)
        },
        SET_CATEGORY_CODE(state,value){
            state.categoryCode = value;
        },
        SET_SELECTED_DAY(state,value){
            state.selectedDay = value;
        },
        ADD_PLAN(state,plan){
            const existingDay = state.planList.find((day) => day.day === state.selectedDay);
            console.log(existingDay);
            if(existingDay){
                existingDay.elements.push(plan);
            }else{
                const newPlan ={
                    day:state.selectedDay,
                    elements:[plan],
                };
                state.planList.push(newPlan);
            }
        },
        DELETE_PLAN(state, {day,index}){
            state.planList.forEach((item) => {
                if (item.day == day && item.elements[index]) {
                    item.elements.splice(index, 1);
                }
            });
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
        },
        setSelectedDay({commit},day){
            commit('SET_SELECTED_DAY',day)
        },
        addPlan({commit,state},plan){
            if(state.selectedDay != 0){
                commit('ADD_PLAN',plan);
            }
        },
        deletePlan({commit},{day,index}){
            commit('DELETE_PLAN',{day,index})
        }
    },
    getters:{
        getCategoryCode(state){
            return state.categoryCode
        },
        getDetailData(state){
            return state.detailData
        }
    }
};

export default mapStore;