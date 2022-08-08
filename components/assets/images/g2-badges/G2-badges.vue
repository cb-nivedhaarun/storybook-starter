<template>
 <div>
    <div class="border-b-2 py-2 mb-5">
      <h1 class="text-2xl	text-gray-700">Chargebee G2 Badges - {{ variant }}</h1>
    </div>
    <div class="grid grid-cols-2">
        <div class="demo-wrapper border-r-2 max-h-screen overflow-scroll">
            <div v-if="variant === 'regular'" id="default" class="demo grid grid-cols-3 gap-5">
                <template v-for="(item, index) in cssArr">
                  <div :key="index" class="p-3 background cursor-pointer" @click="setIndex">
                    <div :style="item.style" :id="index"></div>
                  </div>
                </template>
            </div>
            <div v-if="variant === 'primary'" id="primary" class="demo grid grid-cols-3 gap-5">
                <template v-for="(item, index) in cssArr">
                  <div :key="index" class="p-3 background cursor-pointer" @click="setIndex">
                    <div :style="item.style" :id="index"></div>
                  </div>
                </template>
            </div>
            <div v-if="variant === 'inverted'" id="inverted" class="demo grid grid-cols-3 gap-5">
                <template v-for="(item, index) in cssArr">
                  <div :key="index" class="p-3 background cursor-pointer bg-black" @click="setIndex">
                    <div :style="item.style" :id="index"></div>
                  </div>
                </template>
            </div>
        </div>
        <div>
          <div class="flex flex-col px-2">
            <h3>{{ label }}</h3>
            <div class="flex gap-5">
              <div>
                <input type="radio" id="csslabel" name="tab" value="csslabel" @click="copyCssText" />
                <label for="csslabel">Export for CSS</label>
              </div>
              <div>
                <input type="radio" id="imglabel" name="tab" value="imglabel" @click="copyImgText" />
                <label for="imglabel">Export for Image</label><br>
              </div>
            </div>
            <div class="flex">
              <textarea id="texttocopy" name="texttocopy" rows="4" cols="50" class="border-2 border-slate-300">
              </textarea>
              <button id="copy" class="bg-black px-4 py-2 text-white">COPY</button>
            </div>
          </div>
        </div>
    </div>
    <!-- <div class="cb-storybook-css__g2-best-results--regular"></div>
    <div class="cb-storybook-img__g2-best-usability--regular"></div> -->
 </div>
</template>

<script>
import imageData from '../../../../svg.js'
import library from '../../../../library.js'

export default {
  name: 'badges',

  props: {
    variant: {
      type: String,
      default: 'default',
      validator: function (value) {
        return ['regular', 'inverted', 'primary'].indexOf(value) !== -1;
      }},
    label: {
        type: String,
        default: "Image"
    },
  },

  computed: {
    classes() {
      return {
      };
    },
    style() {
      return {
      };
    },
  },

  data: function () {
      return {
          index: '',
          cssArr: [],
          imagesArr: [],
          imageSelected: false
      }
  },

  methods: {
    setIndex(e) {
      let self = this
      let val = e.target.id;
      self.index = val
      self.imageSelected = true
      let elements = document.getElementsByClassName('background');
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.border="none";
        }
      e.currentTarget.style.border = '2px solid #F0D0C4';
      this.copyCssText();
    },
    copyCssText(e) {
      let self = this
      let val = self.index;
      document.getElementById('texttocopy').innerHTML = 'cb-storybook-css__'+self.cssArr[val].id
    },
    copyImgText(e) {
      let self = this
      let val = self.index;
      document.getElementById('texttocopy').innerHTML = 'cb-storybook-img__'+self.imagesArr[val].id
    },
  },

  mounted() {
    let self = this
    const doc = document

    const symbols = /[\r\n%#()<>?[\\\]^`{|}]/g
    let externalQuotesValue = 'double'

    let data = imageData.filter((item) => (item.category == "g2-badges" && item.variant === self.variant))

    const copybutton = document.getElementById(`copy`);
    copybutton.addEventListener(`click`, function (event) {
        const textToCopy = document.getElementById(`texttocopy`);
        navigator.clipboard.writeText(textToCopy.value);
    });

    function myFunction(val) {
        const value =
            '<svg>' +
            val.svg
                .replace(/background-image:\s{0,}url\(/, ``)
                .replace(/["']{0,}data:image\/svg\+xml,/, ``)
                .replace(/["']\);{0,}$/, ``) +
            '</svg>'
        return getResults(value, val.width, val.height, val.id)
    }

    function getResults(value, width, height, imgid) {
        const namespaced = addNameSpace(value)
        const escaped = encodeSVG(namespaced)
        const resultImage = `data:image/svg+xml,${escaped}`
        const resultCss = `background-image: url("data:image/svg+xml,${escaped}"); width:${width}; height:${height}`

        const csstext = `background-image: url("data:image/svg+xml,${escaped}"); width:${width}; height:${height}`
        const imgtext = `<img src="${resultImage}" alt="" width:${width} height:${height}>`


        self.imagesArr.push({
          src: resultImage,
          width: width,
          height: height,
          copyText: imgtext,
          id: imgid,
        })
        self.cssArr.push({
          style: resultCss,
          copyText: csstext,
          id: imgid,
        })

        return resultCss
    }

    // Namespace
    // ----------------------------------------
    function addNameSpace(data) {
        if (data.indexOf(`http://www.w3.org/2000/svg`) < 0) {
            data = data.replace(/<svg/g, "<svg xmlns='http://www.w3.org/2000/svg'")
        }

        return data
    }

    // Encoding
    // ----------------------------------------
    function encodeSVG(data) {
        // Use single quotes instead of double to avoid encoding.
        if (externalQuotesValue === `double`) {
            data = data.replace(/"/g, `'`)
        } else {
            data = data.replace(/'/g, `"`)
        }

        data = data.replace(/>\s{1,}</g, `><`)
        data = data.replace(/\s{2,}/g, ` `)

        // Using encodeURIComponent() as replacement function
        // allows to keep result code readable
        return data.replace(symbols, encodeURIComponent)
    }

    const newArr = data.map(myFunction)

    let radiobtn = document.getElementById("csslabel");
    radiobtn.checked = true;
  },
};
</script>

