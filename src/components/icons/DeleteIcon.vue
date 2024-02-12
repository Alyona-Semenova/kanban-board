<!-- Иконка "Удалить" -->

<script>
import IconWrapper from "./IconWrapper.vue";

export default {
    name: "DeleteIcon",
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
            <path
                d="M2.5 5.00001H17.5M6.66667 5.00001V3.33334C6.66667 2.89131 6.84226 2.46739 7.15482 2.15483C7.46738 1.84227 7.89131 1.66667 8.33333 1.66667H11.6667C12.1087 1.66667 12.5326 1.84227 12.8452 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3452 17.8452C15.0326 18.1577 14.6087 18.3333 14.1667 18.3333H5.83333C5.39131 18.3333 4.96738 18.1577 4.65482 17.8452C4.34226 17.5326 4.16667 17.1087 4.16667 16.6667V5.00001H15.8333Z"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </IconWrapper>
</template>