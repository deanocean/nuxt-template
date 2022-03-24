import Button from './Button.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    label: { 
      control: 'text',
      defaultValue: 'Button'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md'
    },
    theme: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      defaultValue: 'primary'
    },
    outline: { 
      control: 'boolean',
    },
    hover: { 
      control: 'boolean',
    },
    hoverType: {
      control: { type: 'select' },
      options: ['Opa', 'Darken', 'Lighten', 'Re'],
    },
    arrow: { 
      control: 'boolean'
    },
    arrowType: {
      control: { type: 'select' },
      options: ['Line', 'Solid'],
    },
    arrowDirection: {
      control: { type: 'select' },
      options: ['Up', 'Right', 'Down', 'Left'],
    },
    icon: { 
      control: 'boolean', 
    },
    iconType: {
      control: { type: 'select' },
      options: ['fontawesome', 'svg'],
    },
    fontawesome: { 
      control: 'text', 
      description: 'https://fontawesome.com/v5.15/icons?d=gallery&p=2&m=free', 
    },
    iconSvg: {
      control: 'text',
    },
    rounded: { 
      control: 'boolean', 
    },
    extraClassName: { 
      control: 'text',
    },
    styles: { 
      control: 'text',
    },
    // onClick: { action: 'onClick' },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button v-bind="$props" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  theme: 'primary',
}

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
};

export const Outline = Template.bind({});
Outline.args = {
  outline: true,
}

export const Secondary = Template.bind({});
Secondary.args = {
  theme: 'secondary',
}

export const HoverOpacity = Template.bind({});
HoverOpacity.args = {
  hover: true,
  hoverType: 'Opa'
}

export const HoverDarken = Template.bind({});
HoverDarken.args = {
  hover: true,
  hoverType: 'Darken'
}

export const HoverLighten = Template.bind({});
HoverLighten.args = {
  hover: true,
  hoverType: 'Lighten'
}

export const HoverReverse = Template.bind({});
HoverReverse.args = {
  hover: true,
  hoverType: 'Re'
}

export const ArrowLine = Template.bind({});
ArrowLine.args = {
  arrow: true,
  arrowType: 'Line'
}

export const ArrowSolid = Template.bind({});
ArrowSolid.args = {
  arrow: true,
  arrowType: 'Solid'
}

export const IconSvg = Template.bind({});
IconSvg.args = {
  icon: true,
  iconType: 'svg',
  iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/></svg>`,
  label: 'ダウンロード'
}

export const IconFontawesome = Template.bind({});
IconFontawesome.args = {
  icon: true,
  iconType: 'fontawesome',
  fontawesome: 'fab fa-apple',
  label: 'fontawesome 5.15.1'
}
IconFontawesome.parameters = {
  docs: {
    description: {
      story: `https://fontawesome.com/v5.15/icons?d=gallery&p=2&m=free`,
    },
  },
};

export const Rounded = Template.bind({});
Rounded.args = {
  rounded: true
}

export const UtilitiesAdded = Template.bind({});
UtilitiesAdded.args = {
  extraClassName: 'u-fz-12 u-w-100'
}

export const InlineStyle = Template.bind({});
InlineStyle.args = {
  style: `border-radius: 10px; box-shadow: 0 0 25px #aaa;`
}