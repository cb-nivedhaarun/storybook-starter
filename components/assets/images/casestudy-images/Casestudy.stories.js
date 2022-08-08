import Casestudy from './Casestudy.vue';
import '../../../../assets/css/main.css';

export default {
  title: 'Assets/Images/Case-Study Images',
  component: Casestudy,
  argTypes: {
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Casestudy },
  template: '<casestudy v-bind="$props" />',
});

export const Images = Template.bind({});
Images.args = {
  variant: 'regular'
};

