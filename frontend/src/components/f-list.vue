<template>
    <div class="q-pa-md">
      <q-list bordered>

        <q-item clickable v-ripple
        v-for="item in listItems"
        :key="item.name">

          <q-item-section avatar>
            <q-icon :color="item.color" :name="item.name" />
          </q-item-section>
  
          <q-item-section>{{ item.description }}</q-item-section>

        </q-item>
  
        
 
      </q-list>
    </div>
  </template>

<script>
export default {
    props: {
        listItems: {
            type: Array,
            default: () => []
        }
    },
    data(){
        return {
        }
    }
}
</script>