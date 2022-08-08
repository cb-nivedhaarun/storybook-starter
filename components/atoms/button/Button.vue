<template>
  <button :id="primary ? 'primary' : 'secondary'" :class="classes" :style="style">{{ label }}</button>
</template>

<script>

export default {
  name: 'my-button',

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  computed: {
    classes() {
      return {
        'z-10 px-12 py-4 rounded-md text-sera font-semibold': true,
        'bg-cb-light-green text-cb-dark-green': this.primary,
        'text-cb-light-green border-2 border-cb-light-green': !this.primary,
      };
    },
    style() {
      return {
      };
    },
  },

  methods: {
    copyText(textToCopy) {
      console.log(textToCopy)
      // const textToCopy = e.currentTarget.classList.toString()
      navigator.clipboard.writeText(textToCopy);
      // document.getElementById('tooltip').classList.add('tooltip--active')
      // this.hideTooltip()
    },

    hideTooltip() {
      setTimeout(function() {
        document.getElementById('tooltip').classList.remove('tooltip--active')
      }, 1000);
    }
  },

  mounted() {
     let self = this
      window.onload = function() {
        var primaryButton = document.getElementById('primary')
        var secondaryButton = document.getElementById('secondary')
        if(primaryButton){
          primaryButton.addEventListener(`click`, function (event) {
            self.copyText(`<Button :label="'Get a Demo'" :primary="true" />`)
          });
        }
        else{
          secondaryButton.addEventListener(`click`, function (event) {
            self.copyText(`<Button :label="'Get a Demo'" :primary="false" />`)
          });
        }
      }
    }
};
</script>
