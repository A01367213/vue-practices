const app = Vue.createApp({
    data() {
        return{
            result: 0
        }
    },

    watch: {
        result(value){
            if (value > 37) {
                const that = this;
                setTimeout(function () {
                    that.result = 0;
                },5000);
            }
        }
    },

    computed: {
        showText(){
            if (this.result < 37){
                return 'Not there yet';
            }
            else if (this.result === 37) {
                return this.result;
            }
            else{
                return 'Too Much!!';
            }
        }
    },

    methods: {
        addFunct(num){
            this.result = this.result + num;
        }
    }
});

app.mount('#assignment')