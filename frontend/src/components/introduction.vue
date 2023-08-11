<template>
  <div class="row text-center">
    <div class="col-12 q-pa-sm text-white">{{ title }}</div>
    <p class="col-12 q-pa-sm text-white">{{ description }}</p>
    <div class="col-12 q-pa-sm text-center">
      <a class="q-pa-sm text-blue" href="https://www.google.com">{{ link1 }}</a>
    </div>
    <div class="col-12 q-pa-sm text-center">
      <div class="row flex flex-center">
        <a class="q-pa-sm text-blue" href="https://www.google.com">{{ link2 }}</a>
        <q-separator vertical/>
        <a class="q-pa-sm text-blue" href="https://www.google.com">{{ link3 }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type: String,
      default: "Download YTS YIFY movies: HD smallest size"
    },
    description:{
      type: String,
      default:"Welcome to the official YTS.MX website. Here you can browse and download YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. YTS Movies Torrents."
    },
    link1:{
      type: String,
      default: "IMPORTANT - YTS.MX is the only new official domain for YIFY Movies"
    },
    link2:{
      type: String,
      default: "YTSMX_UPDATES"
    },
    link3:{
      type: String,
      default: "Upcoming: ELEMENTAL (2023)"
    },
  }
}
</script>
