<!-- Иконка "Добавить" -->

<script>
import IconWrapper from "./IconWrapper.vue";

export default {
    name: "AddIcon",
    components: {
        IconWrapper,
    },
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
    methods: {
        eventUp() {
            this.$emit('eventUp');
        }
    }
};
</script>

<template>
    <IconWrapper :color="color" :width="width" :height="height" @eventUp="eventUp">
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.8 4.16667V15.8333M4.96671 10H16.6334" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
    </IconWrapper>
</template>