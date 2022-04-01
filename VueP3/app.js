const app = Vue.createApp({
  data() {
    return {
      counter: 30,
      name : '',
      confirmedName: '',
      lastName: '',
      //fullName: '',
    };
  },

  // Investigate more about watchers
  watch: {
    counter(value){
      if (value > 50){
        this.counter = 0;
      }
    }
    // name(value) {
    //   if (value === ''){
    //     this.fullName = '';
    //   }
    //   else{
    //     this.fullName = value + ' ' + this.lastName;
    //   }
    // },

    // lastName(value) {
    //   if (value === ''){
    //     this.fullName = '';
    //   }
    //   else{
    //     this.fullName = this.name + ' ' + value;
    //   }
    // }
  },

  // Same as methods, but executed as data property
  // Just point methods (No ()) 
  // Used for outputs
  computed:{
    fullName(){
      console.log("Executed again");
      if (this.name == ''){
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },

  //Methods can be called with or without ()
  // Use methods when recalculating (as events)
  methods: {
    confirmInput(){
      this.confirmedName = this.name;
    },

    addCounter(num){
      this.counter = this.counter + num;
    },

    substractCounter(num){
      this.counter = this.counter - num;
    },

    setName(event){
      this.name = event.target.value;
    },

    submitForm(){
      alert('Submitted!');
    },

    resetInput(){
      this.name = '';
    },

    outputFullName(){
      console.log("Executed again");
      if (this.name == ''){
        return '';
      }
      return this.name + ' ' + 'Lamas';
    }
    
    //Traditional
    // submitForm(event){
    //   event.preventDefault();
    //   alert('Submitted!');
    // }
  }
});

app.mount('#events');
