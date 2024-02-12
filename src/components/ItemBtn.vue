<!-- Компонент кнопки-->

<template>
    <div class="item-btn" @click="eventUp">
        <div class="item-btn__text" >
            <span>{{ text }}</span>
        </div>
    </div>
</template>
  
<script>


export default {
    name: 'ItemBtn',
    props: {
        text: {
            type: String,
            require: true,
        }
    },

    methods: {
        eventUp(){
            this.$emit('eventUp')
        }
    }

}

</script>
  
  
<style lang="scss" scoped>
.item-btn {
    width: 200px;
    height: 36px;
    border: 1px solid #C4CAD4;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &__text {}
}
</style>