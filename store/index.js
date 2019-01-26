export const state = () => ({
    steps: [
        {
            images:[
                // require("~/assets/images/check_list_step_1.png"),
                // require("~/assets/images/step_1.png")
            ],
            title: "申辦資格確認",
            name: "register",
            completed: false,
            editing: false,
        },
        {
            images:[
                // require("~/assets/images/check_list_step_2.png"),
                // require("~/assets/images/step_2.png")
            ],
            title: "上傳相關文件",
            name: "upload",
            completed: false,
            editing: false,
        },
        {
            images:[
                // require("~/assets/images/check_list_step_3.png"),
                // require("~/assets/images/step_3.png")
            ],
            title: "填寫個人資料",
            name: "basic_info",
            completed: false,
            editing: false,
        },
        {
            images:[
                // require("~/assets/images/check_list_step_4.png"),
                // require("~/assets/images/step_4.png")
            ],
            title: "個人身分驗證",
            name: "identify",
            completed: false,
            editing: false,
        },
        {
            images:[
                // require("~/assets/images/check_list_step_5.png"),
                // require("~/assets/images/step_5.png")
            ],
            title: "開戶文件簽署",
            name: "sign_documentation",
            completed: false,
            editing: false,
        },
        {
            images:[
                // require("~/assets/images/check_list_step_6.png"),
                // require("~/assets/images/step_6.png")
            ],
            title: "設定交割銀行",
            name: "transaction",
            completed: false,
            editing: false,
        },
    ]
});

export const mutations = {
    changeEditingStatus(state, stepKey) {
        state.steps[stepKey].editing = true;
    },
    changeCompletedStatus(state, stepKey) { 
        state.steps[stepKey].completed = true;
        state.steps[stepKey].editing = false;
    },
};

export const actions = {
    changeStepStatus({commit}, stepKey) {
        if(stepKey !== -1) {
            commit("changeCompletedStatus", stepKey);
        }
        commit("changeEditingStatus", stepKey+1);
    }
};

export const getters = {
    steps(state) {
        return state.steps;
    },
    nextStep(state) {
        return state.steps.find((step) => step.completed === false);
    },
    nextStepIndex(state) {
        return state.steps.findIndex((step) => step.completed === false);
    },
    // currentStep(state) {
    //     return state.steps.find((step) => step.editing === true);
    // },
    // currentStepIndex(state) {
    //     return state.steps.findIndex((step) => step.editing === true);
    // }
};
