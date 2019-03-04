import Vue from "vue";

export default () => {
    Vue.mixin({
        methods: {
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
