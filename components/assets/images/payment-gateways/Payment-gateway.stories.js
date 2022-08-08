import SocialIcon from './Payment-gateway.vue';
import '../../../../assets/css/main.css';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Assets/Images/Payment-Gateways',
  component: SocialIcon,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['regular', 'inverted', 'primary'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SocialIcon },
  template: '<social-icon @onClick="onClick" v-bind="$props" />',
});

export const Regular = Template.bind({});
Regular.args = {
  label: 'Colour - Regular',
  variant: 'regular'
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Colour - Primary',
  variant: 'primary'
};

export const Inverted = Template.bind({});
Inverted.args = {
  label: 'Colour - Inverted',
  variant: 'inverted'
};

// export const Css = Template.bind({});
// Css.args = {
//   exportType: 'css',
//   label: 'Export for CSS'
// };

