<template>
  <div>
    <div class="border-b-2 py-2 mb-5">
      <h1 class="text-2xl	text-gray-700">Casestudy Images</h1>
    </div>
    <div class="grid grid-cols-2 gap-5">
      <div class="grid grid-cols-3 gap-10">
      <template v-for="(item, index) in imagesArr">
        <div :key="index" class="p-3 background" @click="copyImagePath">
          <img :src="item.src" :alt="item.src" class="max-w-xs w-full cursor-pointer" :id="index"/>
          <h3>{{item.name}}</h3>
        </div>
      </template>
      </div>
      <div class="flex max-h-10">
        <div id="texttocopy" class="border-2 border-slate-300 bg-gray-100 w-4/5"></div>
        <button id="copy" class="bg-black px-4 py-2 text-white">COPY</button>
      </div>
    </div>
  </div>
</template>

<script>
import imageData from '../../../../images.js'

export default {
  name: 'casestudy',

  props: {

  },

  data: function () {
    return {
      imagesArr: [],
    }
  },

  methods: {
    copyImagePath(e) {
      let elements = document.getElementsByClassName('background');
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor="#fff";
        }
      e.currentTarget.style.backgroundColor = '#F0D0C4';
      document.getElementById('texttocopy').innerHTML = e.target.alt
    },
  },

  mounted() {
    let self = this;
    console.log(imageData);

    imageData.map((item) => {
      let path = "/" + item
      let name = item.split(".");
      self.imagesArr.push({
        src: path,
        name: name[0]})
    })
  }
};
</script>
