const app = Vue.createApp({
    data() {
        return{
            inputTyped: '',
            classTyped: '',
            toggle: false,
            classToggle: '',
            inputColor: '',
            colorTyped: ''

        }
    },

    computed: {
        selectedClass() {
            if (this.classTyped === 'user1'){
                return {user1: this.classTyped};
            } else if (this.classTyped === 'user2') {
                return {user2: this.classTyped};
            }
        },

        selectedToggle() {
            if (this.classToggle === 'visible') {
                return {visible: this.classToggle};
            } else if (this.classToggle === 'hidden') {
                return {hidden: this.classToggle};
            }
        }

    },

    methods: {
        inputClass(event) {
            this.inputTyped = event.target.value;
        },

        confirmClass() {
            this.classTyped = this.inputTyped;
        },

        toggleClass() {
            if (this.toggle === false) {
                this.classToggle = 'visible';
                this.toggle = true;
            } else if (this.toggle === true) {
                this.classToggle = 'hidden';
                this.toggle = false;
            }
        },

        inputColors (event) {
            this.inputColor = event.target.value;
        },

        confirmColor () {
            this.colorTyped = this.inputColor;
        }

    }
});

app.mount('#assignment')