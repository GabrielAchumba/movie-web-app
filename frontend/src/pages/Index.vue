<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
    <p>{{ showLetter("Gabriel Achumba") }}</p>
    <input type="text"  v-model="userName" @change="onUserNameChanged"/>
    <q-btn label="Click Me" @dblclick="clickMe"
    @mouseover="onMouseHover"
    @mouseout="onMouseOut"
    v-bind:style="buttonStyle"/>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data(){
    return {
      imagePath: "~assets/quasar-logo-vertical.svg",
      letter: "My name is Gabriel",
      userName: "",
      buttonStyle: "background:black; color:red;"
    }
  },
  methods:{
    showLetter(name){
      return "My name is " + name;
    },
    clickMe(){
      var context = this;
      console.log(context.userName)
    },
    onUserNameChanged(e){
      console.log(e)
    },
    onMouseHover(event){
      this.buttonStyle=  "background:green; color:white;"
    },
    onMouseOut(e){
      this.buttonStyle=  "background:black; color:red;"
    }
  }
}
</script>
