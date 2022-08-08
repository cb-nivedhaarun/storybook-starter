<template>
  <div>
    <div class="py-10">
      <h1 class="text-lg leading-6 font-medium text-gray-900 sm:border-b sm:border-gray-200 sm:pb-5">{{label}}</h1>
    </div>
    <div>
      <div class="flex gap-5">
        <a id="#FF3300" href="javascript:void(0)" @click="copyText" class="bg-cb-primary-orange text-white w-32 h-20 rounded-md flex items-center justify-center cursor-pointer relative brand-color">
          #FF3300
          <span id="tooltip" class="text-white bg-black rounded-md px-3 absolute hidden">Copied</span>
        </a>
        <a id="#FF523B" href="javascript:void(0)" @click="copyText" class="bg-cb-secondary-orange text-white w-32 h-20 rounded-md flex items-center justify-center cursor-pointer brand-color">
          #FF523B
          <span id="tooltip" class="text-white bg-black rounded-md px-3 absolute hidden">Copied</span>
        </a>
        <a id="#012A38" href="javascript:void(0)" @click="copyText" class="bg-cb-dark-green text-white w-32 h-20 rounded-md flex items-center justify-center cursor-pointer brand-color">
          #012A38
          <span id="tooltip" class="text-white bg-black rounded-md px-3 absolute hidden">Copied</span>
        </a>
        <a id="#BFF90B" href="javascript:void(0)" @click="copyText" class="bg-cb-light-green text-cb-dark-green w-32 h-20 rounded-md flex items-center justify-center cursor-pointer brand-color">
          #BFF90B
          <span id="tooltip" class="text-white bg-black rounded-md px-3 absolute hidden">Copied</span>
        </a>
        <a id="#E0DBC6" href="javascript:void(0)" @click="copyText" class="bg-cb-tan text-cb-dark-green w-32 h-20 rounded-md flex items-center justify-center cursor-pointer brand-color">
          #E0DBC6
          <span id="tooltip" class="text-white bg-black rounded-md px-3 absolute hidden">Copied</span>
        </a>
        <a id="#EFEFEF" href="javascript:void(0)" @click="copyText" class="bg-cb-grey text-cb-dark-green w-32 h-20 rounded-md flex items-center justify-center cursor-pointer brand-color">
          #EFEFEF
          <span id="tooltip" class="text-white bg-black rounded-md px-3 absolute hidden">Copied</span>
        </a>
        <a id="#A2C1C4" href="javascript:void(0)" @click="copyText" class="bg-cb-blue text-cb-dark-green w-32 h-20 rounded-md flex items-center justify-center cursor-pointer brand-color">
          #A2C1C4
          <span id="tooltip" class="text-white bg-black rounded-md px-3 absolute hidden">Copied</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'colors',

  props: {
    label: {
        type: String,
        default: "Brand"
    },
  },

  methods: {
    copyText(e) {
      const textToCopy = e.currentTarget.id
      navigator.clipboard.writeText(textToCopy);
      e.currentTarget.children.tooltip.classList.add('tooltip--active')
      this.hideTooltip(e)
    },

    hideTooltip(e) {
      setTimeout(function() {
        e.target.children.tooltip.classList.remove('tooltip--active')
      }, 1000);
    }

  },

  mounted() {

  }
};  
</script>
<style>
  .tooltip--active{
    display: block !important;
  }
</style>
