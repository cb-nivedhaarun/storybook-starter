import Colors from './Colors.vue';
import '../../../assets/css/main.css';

export default {
  title: 'Style Guide/Colors',
  component: Colors,
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
  components: { Colors },
  template: '<colors v-bind="$props" />',
});

export const colors = Template.bind({});
colors.args = {
  label: 'Brand Colours',
};
