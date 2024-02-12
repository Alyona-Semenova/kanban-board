<!--Компонент-обертка для svg-изображений-->

<template>
    <span
        role="img"
        aria-hidden="true"
        :style="config"
        @click.stop="eventUp($event)"
    >
      <slot></slot>
    </span>
  </template>
  
  <script>
  export default {
    name: "IconWrapper",
    props: {
      color: String,
      width: {
        type: String,
        required: false,
      },
      height: {
        type: String,
        required: false,
      },
    },
    computed: {
      /**
       * Конфигурация изображения
       * @returns {{color: *, display: string, width: *, fontSize: string, height: *}}
       */
      config() {
        return {
          color: this.color,
          width: this.width,
          height: this.height,
          display: 'inline-flex',
          fontSize: 'inherit',
        }
      }
    },
  
    methods: {
      eventUp(e) {
        this.$emit('eventUp', e);
      }
    }
  };
  </script>
  