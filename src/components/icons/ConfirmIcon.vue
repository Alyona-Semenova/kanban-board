<!-- Иконка "Подтвердить" -->

<script>
import IconWrapper from "./IconWrapper.vue";

export default {
    name: "ConfirmIcon",
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
            <path d="M17.2667 5L8.1 14.1667L3.93333 10" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
    </IconWrapper>
</template>