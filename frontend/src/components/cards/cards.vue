<template>
  <div class="row full-width justify-center">
      <q-card
      v-for="(cardItem,i) in cardItems"
      :key="cardItem.title"
      :class="cardItem.cls"
      :style="cardItem.style"
      @mouseover="mouseover(i)"
      @mouseleave="mouseleave(i)">

          <q-card-section v-if="cardItem.cardShow">
              <div class="row text-center">
                  <p class="col-12 q-pa-sm text-white">{{ cardItem.rating }}</p>
                  <p class="col-12 q-pa-sm text-white">{{ cardItem.category }}</p>
                  <div class="col-12 q-pa-sm">
                    <q-btn class="bg-green text-white" label="View Details"></q-btn>
                  </div>
              </div>
          </q-card-section>
      </q-card>
  </div>
</template>

<script>
export default {
  props:{
      cardItems: {
          type: Array,
          default: () => []
      }
  },
  data(){
    return {
      cls: "q-pa-sm q-ma-sm",
    }
  },
  methods:{
      cardClicked(payload){
          this.$emit("gabriel", payload)
      },
      mouseover(i){
          var context = this
          context.cardItems[i].cls = "q-pa-sm q-ma-sm cardhover";
          context.cardItems[i].cardShow = true;


      },
      mouseleave(i){
        var context = this
        context.cardItems[i].cls = "q-pa-sm q-ma-sm cardleave";
        context.cardItems[i].cardShow = false;
      }
  }
}
</script>

<style>
.cardhover {
  border-style: solid;
  border-width: 5px;
  border-color: green;
}


.cardleave {
  border-style: solid;
  border-width: 5px;
  border-color: white;
}
</style>

