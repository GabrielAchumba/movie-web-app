<template>
    <q-page>
      <Introduction/>
      <Cards
      :cardItems="cards"/>
    </q-page>
</template>

<script>
import Introduction from "../components/introduction.vue";
import Cards from "../components/cards/cards.vue";
export default {
    components:{
      Introduction,
      Cards
    },
    props:{
      listOfObjects:{
        type: Array,
        default: () => []
      }
    },
    watch:{
      listOfObjects(newProp, oldProp){
        var context = this;
        if(newProp.length > 0){
          context.cards = newProp.map((row) => {
            return {
              ...row,
              style: `background-image: url(${row.bgImg});  width: 100%; height: 400px; max-width: 240px; object-fit: fill; background-repeat: no-repeat, repeat; background-position: center; background-size: cover;`
            }
          })
        }else{
          context.cards = context.cards.map((row) => {
            return {
              ...row,
              style: `background-image: url(${context.img_jpg(row.bgImg)});  width: 100%; height: 400px; max-width: 240px; object-fit: fill; background-repeat: no-repeat, repeat; background-position: center; background-size: cover;`
          }
      })

        }
      }
    },
    data(){
      return {
        cards:[
          {title: "No Hard Feelings", style: "", bgImg: "img1", cls: "q-pa-sm q-ma-sm cardleave", rating: "6/10", category:"Commedy", cardShow: false},
          {title: "Hitmen", style: "", bgImg: "img2", cls: "q-pa-sm q-ma-sm cardleave", rating: "7/10", category:"Roamnce", cardShow: false},
          {title: "Spider-Man", style: "", bgImg: "img3", cls: "q-pa-sm q-ma-sm cardleave", rating: "4/10", category:"Action", cardShow: false},
          {title: "Ride On", style: "", bgImg: "img4", cls: "q-pa-sm q-ma-sm cardleave", rating: "4/10", category:"Horror", cardShow: false}
        ]
      }
    },
    methods:{
      img_jpg(fileUrl){
            try{
                var images = require.context('../statics/images/', false, /\.jpg$/)
                return images('./' + fileUrl + ".jpg")
            }catch(e){
                return ""
            }
        },
    },
    created(){
      var context = this;
      context.cards = context.cards.map((row) => {
        return {
          ...row,
          style: `background-image: url(${context.img_jpg(row.bgImg)});  width: 100%; height: 400px; max-width: 240px; object-fit: fill; background-repeat: no-repeat, repeat; background-position: center; background-size: cover;`
        }
      })
    }
}
</script>
