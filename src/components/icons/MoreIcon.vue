<script>
import IconWrapper from "./IconWrapper.vue";

export default {
    name: "MoreIcon",
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
        eventUp(e) {
            this.$emit('eventUp', e);
        }
    }
};
</script>

<template>
    <IconWrapper :color="color" :width="width" :height="height" @eventUp="eventUp">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53977 10.4602 9.16667 10 9.16667C9.53976 9.16667 9.16667 9.53977 9.16667 10C9.16667 10.4602 9.53976 10.8333 10 10.8333Z"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path
                d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53977 16.2936 9.16667 15.8333 9.16667C15.3731 9.16667 15 9.53977 15 10C15 10.4602 15.3731 10.8333 15.8333 10.8333Z"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path
                d="M4.16667 10.8333C4.6269 10.8333 5 10.4602 5 10C5 9.53977 4.6269 9.16667 4.16667 9.16667C3.70643 9.16667 3.33333 9.53977 3.33333 10C3.33333 10.4602 3.70643 10.8333 4.16667 10.8333Z"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </IconWrapper>
</template>