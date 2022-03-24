<template>
  <button type="button" 
    :class="classes" 
    :style="styles">

    <i v-if="icon && iconType=='fontawesome'" :class="fontawesome"></i>
    <span v-if="icon && iconType=='svg'" class="c-btn_icon" v-html="iconSvg"></span>
    {{ label }}

  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    size: {
      type: String,
    },
    theme: {
      type: String,
    },
    outline: {
      type: Boolean,
      default: false
    },
    hover: {
      type: Boolean,
      default: false
    },
    hoverType: {
      type: String,
      default: 'Re'
    },
    arrow: {
      type: Boolean,
      default: false
    },
    arrowType: {
      type: String,
      default: 'Line'
    },
    arrowDirection: {
      type: String,
      default: 'Right'
    },
    icon: {
      type: Boolean,
      default: false
    },
    iconType: {
      type: String,
    },
    fontawesome: {
      type: String,
      default: 'far fa-file-pdf'
    },
    iconSvg: {
      type: String,
    },
    rounded: {
      type: Boolean,
      default: false
    },
    extraClassName: {
      type: String,
    },
    styles: {
      type: String,
    }
  },

  computed: {
    classes() {
      return {
        'c-btn': true,
        [`c-btn--${this.theme}`]: this.theme && !this.outline,
        [`c-btn--${this.theme}Outline`]: this.outline,
        [`c-btn--${this.size}`]: true,
        [`c-btn--arrow${this.arrowType}${this.arrowDirection}`]: this.arrow,
        [`c-btn--hover${this.hoverType}`]: this.hover,
        [`c-btn--icon`]: this.icon,
        [`c-btn--rounded`]: this.rounded,
        [`${this.extraClassName}`]: this.extraClassName
      };
    }
  },

  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
};
</script>