import MyButton from './Button.vue';
import '../../../assets/css/main.css';

export default {
  title: 'Atoms/Button',
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="copyText" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Get a Demo',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Sign up for free',
};
