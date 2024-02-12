<!-- Иконка для уведомлений -->

<script>
import IconWrapper from "./IconWrapper.vue";

export default {
    name: "NotificationSuccessIcon",
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
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_906_66)">
                <circle cx="12" cy="12" r="12" fill="#22C33D" />
                <path d="M16.8 8.39996L10.2 15L7.19998 12" stroke="white" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_906_66">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    </IconWrapper>
</template>