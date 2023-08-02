<template>
  <q-page  :class="comClassess">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
    <p>{{ showLetter("Gabriel Achumba") }}</p>
    <input type="text"  v-model="userName" @change="onUserNameChanged"/>
    <q-btn label="Click Me" @click.once="clickMe"
    @mouseover="onMouseHover"
    @mouseout="onMouseOut"
    :style="buttonStyle"/>
    <q-btn @click="incrementNumber" label="Incerement" class="bg-yellow"></q-btn>
  </q-page>
</template>

<script>
//class="flex flex-center"
export default {
  computed:{
    comClassess(){
      var context = this;
      if(context.x < 4){
        return {
          [`bg-red`]: context.text_color
        }
      }else{
        return {
          [`bg-green`]: context.text_color
        }
      }
    }
  },
  /* computed:{
    comClassess(){
      var context = this;
      return {
        [`text-red`]: context.text_color
      }
    }
  }, */
  name: 'PageIndex',
  data(){
    return {
      imagePath: "~assets/quasar-logo-vertical.svg",
      letter: "My name is Gabriel",
      userName: "",
      buttonStyle: "background:black; color:red;",
      text_color: true,
      x: 1,
    }
  },
  methods:{
    incrementNumber(){
      var context = this;
      context.x++
      console.log(context.x)
    },
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
