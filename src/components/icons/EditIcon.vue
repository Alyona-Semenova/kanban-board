<!-- Иконка "Редактировать" -->

<script>
import IconWrapper from "./IconWrapper.vue";

export default {
    name: "EditIcon",
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
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33334 18.3333H17.5M13.3333 1.66667L16.6667 5.00001L7.50001 14.1667H4.16668V10.8333L13.3333 1.66667Z"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </IconWrapper>
</template>