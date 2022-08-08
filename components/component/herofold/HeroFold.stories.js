import HeroFold from './HeroFold';
import '../../../assets/css/main.css';

export default {
  title: 'Components/Hero/Hero-without-form',
  component: HeroFold,
  argTypes: {
    version: {
      control: { type: 'select' },
      options: ['version-1', 'version-2', 'version-3'],
    },
  },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
    design: {
      type: "figma",
      url: "https://www.figma.com/file/MXtdpxrbpUMOeXmRWkQlVY/Storybook?node-id=0%3A1",
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HeroFold },
  template:
    '<hero-fold v-bind="$props"/>',
});

export const Version1 = Template.bind({});
Version1.args = {
  version: 'version-1',
};

export const Version2 = Template.bind({});
Version2.args = {
  version: 'version-2',
};

export const Version3 = Template.bind({});
Version3.args = {
  version: 'version-3',
};
