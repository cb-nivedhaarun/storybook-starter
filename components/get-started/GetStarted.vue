<template>
  <div>
    <div class="py-10">
      <h1 class="text-lg leading-6 font-medium text-gray-900">Get Started</h1>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">If you want to add a new image to our repo, please fill the form below and generate the code required</p>
    </div>
    <div>
      <form id="form" class="space-y-8 divide-y divide-gray-200 sm:border-t sm:border-gray-200">
        <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
            <div class="space-y-6 sm:space-y-5">
              <div class="sm:grid sm:grid-cols-3 sm:gap-4">
                <label for="svg" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> SVG </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <textarea id="svg" name="svg" rows="3" class="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"></textarea>
                  <p class="mt-2 text-sm text-gray-500">Please add the minified version of svg</p>
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="width" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Width </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <input type="text" name="width" id="width" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="height" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Height </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <input type="text" name="height" id="height" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Name </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <input type="text" name="name" id="name" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                </div>
              </div>

              <div role="group" aria-labelledby="label-variant">
                <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline sm:border-t sm:border-gray-200 sm:pt-5">
                  <div>
                    <div class="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700" id="variant">Variant</div>
                  </div>
                  <div class="sm:col-span-2">
                    <div class="max-w-lg">
                      <div class="mt-4 space-y-4">
                        <div class="flex items-center">
                          <input @click="generateId" id="push-regular"  name="regular" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                          <label for="push-regular" class="ml-3 block text-sm font-medium text-gray-700"> Regular </label>
                        </div>
                        <div class="flex items-center">
                          <input @click="generateId" id="push-primary" name="primary" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                          <label for="push-primary" class="ml-3 block text-sm font-medium text-gray-700"> Primary </label>
                        </div>
                        <div class="flex items-center">
                          <input @click="generateId" id="push-inverted" name="inverted" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                          <label for="push-inverted" class="ml-3 block text-sm font-medium text-gray-700"> Inverted </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="id" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> ID </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <input type="text" name="id" id="id" disabled class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="category" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Category </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <select id="category" name="category" class="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md border-2 py-4 px-2">
                    <option>social-icon</option>
                    <option>chargebee-logo</option>
                    <option>case-study-image</option>
                    <option>payment-gateway-logo</option>
                    <option>g2-badges</option>
                    <option>integration-logo</option>
                    <option>customer-logo</option>
                    <option>partner-logo</option>
                  </select>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="pt-5">
          <div class="flex">
            <div @click="generateCode" class="ml-3 inline-flex justify-center py-2 px-10 border border-transparent shadow-sm text-md font-medium rounded-md text-white bg-cb-secondary-orange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Generate</div>
          </div>
        </div>
      </form>

      <div class="mt-8">
        <div class="mt-1 sm:mt-0 sm:col-span-2 flex gap-3">
          <textarea id="texttocopy" name="copy" class="max-w-2xl h-36 mb-3 shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md">
          </textarea>
          <!-- <button id="copy" @click="copyText" class="bg-black h-10 mt-8 px-4 py-2 text-white">COPY</button> -->
          <a href="javascript:void(0)" @click="copyText" id="font-sora text-sora-6xl font-bold" class="bg-cb-light-green text-cb-dark-green w-32 h-14 rounded-md flex items-center justify-center cursor-pointer relative brand-color">
            Copy
            <span id="tooltip" class="text-white bg-black rounded-md px-3 absolute hidden">Copied</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'start',

  props: {

  },

  methods: {
    generateId(e) {
      var variant = e.target.name
      var name = document.getElementById('name').value
      document.getElementById('id').value = name+'--'+variant

    },

    generateCode() {
      const form = document.getElementById('form');
      const formData = new FormData(form);
      var data = '{\n'
      let count = 0
      for (const [key, value] of formData) {
        count++
        if(count == 5){
          data += `variant: '${key}',\n`
        }
        if(count == 6){
          data += `id: '${document.getElementById('id').value}',\n`
          data += `${key}: '${value}',\n`
        }
        else{
          if(value != 'on'){
            data += `${key}: '${value}',\n`
          }
        }
      }
      data += '},'
      document.getElementById('texttocopy').value = data
    }, 

    copyText(e) {
      const textToCopy = document.getElementById(`texttocopy`);
      navigator.clipboard.writeText(textToCopy.value);
      document.getElementById("form").reset();
      textToCopy.value = ''
      e.currentTarget.children.tooltip.classList.add('tooltip--active')
      this.hideTooltip(e)
    },

    hideTooltip(e) {
      setTimeout(function() {
        e.target.children.tooltip.classList.remove('tooltip--active')
      }, 1000);
    },

  },

  mounted() {
    // const copybutton = document.getElementById(`copy`);
    // copybutton.addEventListener(`click`, function (event) {
    //   const textToCopy = document.getElementById(`texttocopy`);
    //   navigator.clipboard.writeText(textToCopy.value);
    // });
  }
};  
</script>
