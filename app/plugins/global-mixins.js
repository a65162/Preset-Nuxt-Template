import Vue from "vue";


export default () => {
    Vue.mixin({
        methods: {
            // 有關表單的跳轉頁面都靠這個 function
            // Step: form 的資料
            // StepKey: form 的鍵值
            jumpTo(Step, StepKey = 0) {
                const completed = Step.completed;
                const editing = Step.editing;
                const RouterName = Step.name;
                
                // 只有完成的頁面才可以跳過去除了首次的註冊頁面不能讓讓使用者修改
                //  如果在編輯的頁面可以跳過去
                if(completed && StepKey !== 0 || editing) {
                    this.$router.push({name: RouterName});
                }
            },
            // 將任何的檔案轉成 Base64 的格式
            getBase64(file) {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = error => reject(error);
                });
            },
            scrollTo(element) {
                const exist = $(element).length;
                if(exist) {
                    const target = $(element).offset().top - 100;

                    $('body,html').animate({
                        scrollTop: target
                    },1000);
                }
                
            }
        },
    })
};
