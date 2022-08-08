<template>
  <div>
    <div class="py-10">
      <h1 class="text-2xl leading-6 font-medium text-gray-900 sm:border-b sm:border-gray-200 sm:pb-5">{{label}}</h1>
    </div>
    <div class="tab flex justify-center mb-10">
      <button id="sora" class="tablinks active" @click="openTab">Sora</button>
      <button id="inter" class="tablinks" @click="openTab">Inter</button>
    </div>
    <div>
      <div id="sora-section" class="flex flex-col gap-12 tabcontent">
        <div class="grid grid-section sm:border-b sm:border-gray-200 sm:pb-5">
          <div>
            <h3 class="font-semibold font-sora text-sora-2xl text-gray-600 mb-5 pt-3">sora-6xl</h3>
            <a href="javascript:void(0)" @click="copyText" id="font-sora text-sora-6xl font-bold" class="bg-cb-light-green text-cb-dark-green w-32 h-14 rounded-md flex items-center justify-center cursor-pointer relative brand-color">
              Select
              <span id="tooltip" class="text-white bg-black rounded-md px-3 absolute hidden">Copied</span>
            </a>
          </div>
          <div>
            <p class="font-sora text-sora-6xl font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor suscipit accumsan.</p>
          </div>
        </div>
        <div class="grid grid-section sm:border-b sm:border-gray-200 sm:pb-5">
          <div>
            <h3 class="font-semibold font-sora text-sora-2xl text-gray-600 mb-5 pt-3">sora-5xl</h3>
            <a href="javascript:void(0)" @click="copyText" id="font-sora text-sora-5xl font-bold" class="bg-cb-light-green text-cb-dark-green w-32 h-14 rounded-md flex items-center justify-center cursor-pointer relative brand-color">
              Select
              <span id="tooltip" class="text-white bg-black rounded-md px-3 absolute hidden">Copied</span>
            </a>
          </div>
          <div>
            <p class="font-sora text-sora-5xl font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor suscipit accumsan.</p>
          </div>
        </div>
        <div class="grid grid-section sm:border-b sm:border-gray-200 sm:pb-5">
          <div>
            <h3 class="font-semibold text-sora-2xl text-gray-600 mb-5 pt-3">sora-4xl</h3>
            <a href="javascript:void(0)" @click="copyText" id="font-sora text-sora-4xl font-bold" class="bg-cb-light-green text-cb-dark-green w-32 h-14 rounded-md flex items-center justify-center cursor-pointer relative brand-color">
              Select
              <span id="tooltip" class="text-white bg-black rounded-md px-3 absolute hidden">Copied</span>
            </a>
          </div>
          <div>
            <p class="text-sora-4xl font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor suscipit accumsan.</p>
          </div>
        </div>
        <div class="grid grid-section sm:border-b sm:border-gray-200 sm:pb-5">
          <div>
            <h3 class="font-semibold text-sora-2xl text-gray-600 mb-5 pt-3">sora-3xl</h3>
            <a href="javascript:void(0)" @click="copyText" id="font-sora text-sora-3xl font-bold" class="bg-cb-light-green text-cb-dark-green w-32 h-14 rounded-md flex items-center justify-center cursor-pointer relative brand-color">
              Select
              <span id="tooltip" class="text-white bg-black rounded-md px-3 absolute hidden">Copied</span>
            </a>
          </div>
          <div>
            <p class="text-sora-3xl font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor suscipit accumsan.</p>
          </div>
        </div>
        <div class="grid grid-section sm:border-b sm:border-gray-200 sm:pb-5">
          <div>
            <h3 class="font-semibold text-sora-2xl text-gray-600 mb-5 pt-3">sora-2xl</h3>
            <a href="javascript:void(0)" @click="copyText" id="font-sora text-sora-2xl font-bold" class="bg-cb-light-green text-cb-dark-green w-32 h-14 rounded-md flex items-center justify-center cursor-pointer relative brand-color">
              Select
              <span id="tooltip" class="text-white bg-black rounded-md px-3 absolute hidden">Copied</span>
            </a>
          </div>
          <div>
            <p class="text-sora-2xl font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor suscipit accumsan.</p>
          </div>
        </div>
        <div class="grid grid-section sm:border-b sm:border-gray-200 sm:pb-5">
          <div>
            <h3 class="font-semibold text-sora-2xl text-gray-600 mb-5 pt-3">sora-xl</h3>
            <a href="javascript:void(0)" @click="copyText" id="font-sora text-sora-xl font-bold" class="bg-cb-light-green text-cb-dark-green w-32 h-14 rounded-md flex items-center justify-center cursor-pointer relative brand-color">
              Select
              <span id="tooltip" class="text-white bg-black rounded-md px-3 absolute hidden">Copied</span>
            </a>
          </div>
          <div>
            <p class="text-sora-xl font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor suscipit accumsan.</p>
          </div>
        </div>
        <div class="grid grid-section sm:border-b sm:border-gray-200 sm:pb-5">
          <div>
            <h3 class="font-semibold text-sora-2xl text-gray-600 mb-5 pt-3">sora-lg</h3>
            <a href="javascript:void(0)" @click="copyText" id="font-sora text-sora-lg font-bold" class="bg-cb-light-green text-cb-dark-green w-32 h-14 rounded-md flex items-center justify-center cursor-pointer relative brand-color">
              Select
              <span id="tooltip" class="text-white bg-black rounded-md px-3 absolute hidden">Copied</span>
            </a>
          </div>
          <div>
            <p class="text-sora-lg font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor suscipit accumsan.</p>
          </div>
        </div>
        <div class="grid grid-section sm:border-b sm:border-gray-200 sm:pb-5">
          <div>
            <h3 class="font-semibold text-sora-2xl text-gray-600 mb-5 pt-3">sora-sm</h3>
            <a href="javascript:void(0)" @click="copyText" id="font-sora text-sora-sm font-bold" class="bg-cb-light-green text-cb-dark-green w-32 h-14 rounded-md flex items-center justify-center cursor-pointer relative brand-color">
              Select
              <span id="tooltip" class="text-white bg-black rounded-md px-3 absolute hidden">Copied</span>
            </a>
          </div>
          <div>
            <p class="text-sora-sm font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor suscipit accumsan.</p>
          </div>
        </div>
        <div class="grid grid-section sm:border-b sm:border-gray-200 sm:pb-5">
          <div>
            <h3 class="font-semibold text-sora-2xl text-gray-600 mb-5 pt-3">sora-xs</h3>
            <a href="javascript:void(0)" @click="copyText" id="font-sora text-sora-xs font-bold" class="bg-cb-light-green text-cb-dark-green w-32 h-14 rounded-md flex items-center justify-center cursor-pointer relative brand-color">
              Select
              <span id="tooltip" class="text-white bg-black rounded-md px-3 absolute hidden">Copied</span>
            </a>
          </div>
          <div>
            <p class="text-sora-xs font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor suscipit accumsan.</p>
          </div>
        </div>
      </div>
      <div id="inter-section" class="flex-col gap-12 tabcontent hidden">
        <div class="grid grid-section sm:border-b sm:border-gray-200 sm:pb-5">
          <div>
            <h3 class="font-semibold font-inter text-inter-xl text-gray-600 mb-5 pt-3">inter-xl</h3>
            <a href="javascript:void(0)" @click="copyText" id="font-inter text-inter-xl font-bold" class="bg-cb-light-green text-cb-dark-green w-32 h-14 rounded-md flex items-center justify-center cursor-pointer relative brand-color">
              Select
              <span id="tooltip" class="text-white bg-black rounded-md px-3 absolute hidden">Copied</span>
            </a>
          </div>
          <div>
            <p class="font-inter text-inter-xl font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor suscipit accumsan.</p>
          </div>
        </div>
        <div class="grid grid-section sm:border-b sm:border-gray-200 sm:pb-5">
          <div>
            <h3 class="font-semibold font-inter text-inter-lg text-gray-600 mb-5 pt-3">inter-lg</h3>
            <a href="javascript:void(0)" @click="copyText" id="font-inter text-inter-lg font-bold" class="bg-cb-light-green text-cb-dark-green w-32 h-14 rounded-md flex items-center justify-center cursor-pointer relative brand-color">
              Select
              <span id="tooltip" class="text-white bg-black rounded-md px-3 absolute hidden">Copied</span>
            </a>
          </div>
          <div>
            <p class="font-inter text-inter-lg font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor suscipit accumsan.</p>
          </div>
        </div>
        <div class="grid grid-section sm:border-b sm:border-gray-200 sm:pb-5">
          <div>
            <h3 class="font-semibold font-inter text-inter-lg text-gray-600 mb-5 pt-3">inter-md</h3>
            <a href="javascript:void(0)" @click="copyText" id="font-inter text-inter-md font-bold" class="bg-cb-light-green text-cb-dark-green w-32 h-14 rounded-md flex items-center justify-center cursor-pointer relative brand-color">
              Select
              <span id="tooltip" class="text-white bg-black rounded-md px-3 absolute hidden">Copied</span>
            </a>
          </div>
          <div>
            <p class="font-inter text-inter-md font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor suscipit accumsan.</p>
          </div>
        </div>
        <div class="grid grid-section sm:border-b sm:border-gray-200 sm:pb-5">
          <div>
            <h3 class="font-semibold font-inter text-inter-lg text-gray-600 mb-5 pt-3">inter-sm</h3>
            <a href="javascript:void(0)" @click="copyText" id="font-inter text-inter-sm font-bold" class="bg-cb-light-green text-cb-dark-green w-32 h-14 rounded-md flex items-center justify-center cursor-pointer relative brand-color">
              Select
              <span id="tooltip" class="text-white bg-black rounded-md px-3 absolute hidden">Copied</span>
            </a>
          </div>
          <div>
            <p class="font-inter text-inter-sm font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor suscipit accumsan.</p>
          </div>
        </div>
        <div class="grid grid-section sm:border-b sm:border-gray-200 sm:pb-5">
          <div>
            <h3 class="font-semibold font-inter text-inter-lg text-gray-600 mb-5 pt-3">inter-xs</h3>
            <a href="javascript:void(0)" @click="copyText" id="font-inter text-inter-xs font-bold" class="bg-cb-light-green text-cb-dark-green w-32 h-14 rounded-md flex items-center justify-center cursor-pointer relative brand-color">
              Select
              <span id="tooltip" class="text-white bg-black rounded-md px-3 absolute hidden">Copied</span>
            </a>
          </div>
          <div>
            <p class="font-inter text-inter-xs font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor suscipit accumsan.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'typography',

  props: {
    label: {
        type: String,
        default: "Brand"
    },
    breakpoint: {
      type: String,
      default: '1920',
      validator: function (value) {
        return ['1920', '1440', '1024', '768', '<500'].indexOf(value) !== -1;
      },
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
    },

    openTab(e) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      var id = e.currentTarget.id + '-section'
      document.getElementById(id).style.display = "block";
      e.currentTarget.className += " active";
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

  .grid-section{
    grid-template-columns: 1fr 2fr;
  }

  .tablinks{
    background: #F2F2F2;
    padding: 10px 50px;
    font-size: 20px;
  }

  .tablinks.active{
    background: #FF523B;
    color: #fff
  }
</style>
