<template>
  <q-page :class="comClassess">
    <img
      ref="logo1"
      v-show="x < 4"
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >

    <img v-show="x >= 4"
      alt="Quasar logo"
      src="~assets/newwaysg.png"
      style="width: 200px; height: 200px"
    >

    <p ref="paragraph1" class="parag">{{ showLetter("Gabriel Achumba") }}</p>
    <p class="parag">I am am am</p>
    <!-- 
    <input type="text"  v-model="userName" @change="onUserNameChanged"/>
    <q-btn label="Click Me" @click.once="clickMe"
    @mouseover="onMouseHover"
    @mouseout="onMouseOut"
    :style="buttonStyle"/>
     -->
     <q-btn @click="incrementNumber" label="Incerement" class="bg-yellow"></q-btn>
     <MyButton class="q-pa-sm q-ma-md"/>
     <ul>
      <li v-for="(alphabet, index) in alphabets"><p>{{ index }}  {{ alphabet }}</p></li>
     </ul>
  </q-page>
</template>

<script>
//class="flex flex-center"
import MyButton from "components/f-button.vue"
//import MyButton from "../components/f-button.vue"
export default {
  name: 'PageIndex',
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
  components:{
    MyButton,
  },
  data(){
    return {
      imagePath: "~assets/quasar-logo-vertical.svg",
      letter: "My name is Gabriel",
      userName: "",
      buttonStyle: "background:black; color:red;",
      text_color: true,
      x: 1,
      alphabets: ["A", "B", "C", "D"]
    }
  },
  methods:{
    incrementNumber(){
      var context = this;
      context.x++
      var refs = this.$refs
      var logo1 = this.$refs.logo1
      logo1.style= "width: 400px; height: 400px;"
      console.log(logo1)
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

<style>

#parag {
  font-size:smaller;
}
</style>
