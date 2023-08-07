<template>
    <q-layout view="hHh lpR fFf" class="bg-primary">
        <q-header style="height: 70px;" elevated>
            <q-toolbar class="bg-primary text-white">
                <img :src="img_png('Picture2')">
                <p v-if="!resizeKey" class="text-h6 text-secondary q-pa-md">HD movies at the smallest file size.</p>
                <q-space/>
                <q-input 
                    dark 
                    rounded 
                    outlined 
                    v-model="searchText"
                    :dense="true"
                    :placeholder="quickSearch"
                    >
                    <template v-slot:prepend>
                    <q-avatar>
                        <q-icon name="search" />
                    </q-avatar>
                    </template>
                </q-input>
                <q-btn v-if="!resizeKey" label="Home" :size="btnSize" flat class="text-secondary" no-caps></q-btn>
                <q-btn v-if="!resizeKey" label="4K" :size="btnSize" flat class="text-positive" no-caps></q-btn>
                <q-btn v-if="resizeKey" label="4K" :size="btnSize" flat class="text-positive" no-caps></q-btn>
                <q-btn v-if="!resizeKey" label="Trending" :size="btnSize" flat class="text-secondary" no-caps></q-btn>
                <q-icon v-if="resizeKey" name="leaderboard" flat :size="btnSize" class="text-secondary" no-caps></q-icon>
                <q-btn v-if="!resizeKey" label="Browse Movies" :size="btnSize" flat class="text-secondary" no-caps></q-btn>
                <q-icon v-if="resizeKey" name="view_list" :size="btnSize" flat class="text-secondary" no-caps></q-icon>
                
                
                <q-btn v-if="!resizeKey" label="Login" :size="btnSize" flat no-caps></q-btn>
                <q-icon v-if="resizeKey" name="person" :size="btnSize" flat no-caps></q-icon>
                <q-separator vertical/>
                <q-btn v-if="!resizeKey" label="Register" :size="btnSize" flat no-caps></q-btn>
                <q-space/>
            </q-toolbar>
        </q-header>

        <q-page-container class="bg-primary">
            <router-view/>
        </q-page-container>
    </q-layout>
</template>

<script>
export default {
    computed:{
        quickSearch(){
            var context = this;
            if(context.resizeKey === true) return ""
            else return "Quick search"
        }
    },
    data(){
        return {
            btnSize: "md",
            resizeKey: false,
            searchText: ""
        }
    },
    methods:{   
        img_png(fileUrl){
            try{
                var images = require.context('../statics/logos/', false, /\.png$/)
                return images('./' + fileUrl + ".png")
            }catch(e){
                return ""
            }
        },
        onResize(e) {
            const width = window.innerWidth;
            var content = this;
            content.resizeKey = false
            if(width < 900) {
                content.resizeKey = true;
            }
        },
    },
    created() {
      window.addEventListener("resize", this.onResize);
  },
  destroyed() {
      window.removeEventListener("resize", this.onResize);
  },
}
</script>