import ChargebeeLogo from './ChargebeeLogo.vue';
import '../../../../assets/css/main.css';

export default {
  title: 'Assets/Images/Logo',
  component: ChargebeeLogo,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ChargebeeLogo },
  template: '<chargebee-logo @onClick="onClick" v-bind="$props" />',
});

export const Regular = Template.bind({});
Regular.args = {
  label: 'Colour - Default',
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
