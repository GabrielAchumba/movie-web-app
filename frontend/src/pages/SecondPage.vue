<template>
    <div class="row">
        <FList class="col-12"
        :listItems="list"/>
    </div>
</template>

<script>
import FList from "../components/f-list.vue"
export default {
    components:{
        FList
    },
    data(){
        return {   
        list: [
                    { name: "search", color: "primary", description: "This is a search icon"},
                    { name: "home", color: "negative", description: "This is a home icon"},
                    { name: "menu", color: "red", description: "This is a menu icon"}
                ]
            }
    }
}
</script>