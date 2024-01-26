<template>
    <q-layout view="hHh lpR fFf" class="bg-primary">
        <q-header style="height: 70px;" elevated>
            <q-toolbar class="bg-primary text-white">
                <img :src="img_png('Picture2')">
                <p v-if="!resizeKey" class="text-h6 text-secondary q-pa-md">HD movies at the smallest file size.</p>
                <q-space/>
                <div class="row bg-white text-left" style="min-width: 300px">
                    <span class="col-12">
                        <q-input  
                            outlined 
                            v-model="searchText"
                            :dense="true"
                            :placeholder="quickSearch"
                            @change="onMostRecentSearches"
                            >
                            <template v-slot:append>
                            <q-avatar>
                                <q-icon name="search" 
                                class="text-black"
                                @click="onSearchMovie"/>
                            </q-avatar>
                            </template>
                        </q-input>
                        <q-menu v-show="isOnSearch" 
                        class="col-12"
                        style="min-width: 300px" >
                            <q-list style="min-width: 300px" >
                                <q-item 
                                v-for="item in mostRecentSearches"
                                :key="item.id"
                                clickable v-close-popup>
                                    <q-item-section>{{ item.title }}</q-item-section>
                                </q-item>
                            </q-list>
                        </q-menu>
                    </span>
                </div>
            </q-toolbar>
        </q-header>

        <q-page-container class="bg-primary">
            <router-view
            :listOfObjects="movies"/>
        </q-page-container>
    </q-layout>
</template>

<script>
import { get_omdb } from "../backend/omdd_services";
import { post, get } from "../backend/services";
import { filterList } from "../utility/searchList";
export default {
    computed:{
        quickSearch(){
            var context = this;
            if(context.resizeKey === true) return ""
            else return "Search for a movie ..." 
        }
    },
    data(){
        return {
            btnSize: "md",
            resizeKey: false,
            searchText: "",
            movies: [],
            mostRecentSearches: [],
            isOnSearch: false,
            searchValue: ""
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
        async onMostRecentSearches (e){
            var context = this;
            context.isOnSearch = true;
            context.searchValue = e.target._value;
            const payload = {
                url: "searchValue",
                req: {
                    searchValue: context.searchValue
                }
            }
            response = await post(payload) 
            console.log("response: ", response);
            if(response.data){
                context.mostRecentSearches = response.data.map((row) => {
                    return {
                        id: row.id,
                        title: row.searchValue
                    }
                }) 
            }
            
            context.mostRecentSearches = filterList(context.searchValue);
            console.log("context.isOnSearch: ", context.isOnSearch);
            let response = await get_omdb({
                url: `?s=${e.target._value}&apikey=2711d78a`
            })
            context.isOnSearch = false;
        },
        async onSearchMovie (){
            var context = this;
            let response = await get_omdb({
                url: `?s=${context.searchValue}&apikey=2711d78a`
            })

            if (response.data.Search) {
               context.movies = response.data.Search.map((row) => {
                    return {
                        title: row.Title,
                        style: "",
                        bgImg: row.Poster,
                        cls: "q-pa-sm q-ma-sm cardleave", 
                        rating: row.Year, 
                        category: row.Type, 
                        cardShow: false

                    }
                });
                console.log("movies: ", context.movies);
                const payload = {
                    url: "searchValue",
                    req: {
                        searchValue: context.searchValue
                    }
                }
                response = await post(payload) 
                console.log("response: ", response);
            }else{
                context.movies = [];
            }
            context.isOnSearch = false;
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