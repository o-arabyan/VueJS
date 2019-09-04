module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/assets/styles/base/_variables.scss";
                        @import "@/assets/styles/base/_mq.scss";`
            }
        }
    }
};