import start from './GetStarted.vue';
import '../../assets/css/main.css';

export default {
  title: 'Get Started',
  component: start,
  argTypes: {
    label: {
      table: {
        disable: true
      }
    }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { start },
  template: '<start @onClick="onClick" v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};
