<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :data="rows"
        :columns="columns"
        row-key="name"
        class="text-negative bg-dark" 
      />
    </div>

  
    <div class="row">
      <f-list class="col-12"
      :listItems="list"/>
      
    </div>
    
    </q-page>
</template>

<script>
//class="flex flex-center"
import MyButton from "components/f-button.vue"
//import MyButton from "../components/f-button.vue"
import FList from "../components/f-list.vue";

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
    'f-list': FList,
  },
  data(){
    return {
      columns: [
        {
          name: "customerName",
          label: "Customer Name",
          field: "customerName",
          align: "left"
        },
        
        {
          name: "age",
          label: "Age",
          field: "age",
          align: "left"
        }
      ],
      rows: [
        {
          customerName: "Gabriel", age: 5
        },
        {
          customerName: "Kelvin", age: 10
        },
        {
          customerName: "Mary", age: 24
        }
      ],
      list: [
                { name: "bluetooth", color: "primary", description: "This is a bluetooth icon"},
                { name: "send", color: "negative", description: "This is a send icon"},
                { name: "close", color: "red", description: "This is a close icon"}
            ]
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
