import Typography from './Typography.vue';
import '../../../assets/css/main.css';

export default {
  title: 'Style Guide/Typography',
  component: Typography,
  argTypes: {
    label: {
      table: {
        disable: true
      }
    },
    breakpoint: {
      control: { type: 'select' },
      options: ['1920', '1440', '1024', '768', '<500'],
      table: {
        disable: true
      }
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Typography },
  template: '<typography v-bind="$props" />',
});

export const typography = Template.bind({});
typography.args = {
  label: 'Typography',
  breakpoint: '1920'
};
