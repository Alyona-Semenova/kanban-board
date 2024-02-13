<!-- Компонент модального окна -->

<template>
    <div class="modal-window">
        <div class="modal-window__content">
            <div class="modal-window__icon">
                <CloseIcon @eventUp="closeModal"></CloseIcon>
            </div>

            <div class="modal-window__title">
                <span>Удалить задачу?</span>
            </div>

            <div class="modal-window__text">
                <span>{{textTask}}</span>
            </div>



            <div class="modal-window__buttons">
                <ItemBtn :text="'Удалить'" @eventUp="deleteCard"></ItemBtn>
                <ItemBtn :text="'Отмена'" @eventUp="closeModal"></ItemBtn>
            </div>
        </div>
    </div>
</template>
  
<script>
import ItemBtn from '../ItemBtn.vue'
import CloseIcon from '../icons/CloseIcon.vue';

export default {
    name: 'ItemColumn',
    components: {
        CloseIcon,
        ItemBtn,
    },

    props: {
        textTask: {
            type: String,
            required: true,
        }
    },

    methods: {
        /**
         * Удалить задачу
         */
        deleteCard() {
            this.$emit("deleteCard")
        },

        /**
         * Закрыть модалку
         */
        closeModal() {
            this.$emit("closeModal")
        }
    }









}

</script>
  
  
<style lang="scss" scoped>
.modal-window {
    width: 500px;
    border-radius: 8px;
    z-index: 100;
    background: #FFFFFF;
    box-shadow: 0px 9px 44px -21px rgba(0, 0, 0, 0.22);

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &__content {
        width: calc(100% - 80px);
        margin: 24px 40px 24px 40px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
        position: relative;


    }

    &__icon {
        position: absolute;
        width: 24px;
        height: 24px;
        right: 0;
        cursor: pointer;
    }


    &__title {
        height: 30px;
        font-weight: 584;
        font-size: 24px;
        line-height: 30px;
    }

    &__text {
        position: relative;
        width: 100%;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        word-wrap: break-word;
        text-align: left;

        span {
            width: 100%;
        }
    }

    &__buttons {
        width: 100%;
        height: 36px;
        display: flex;
        justify-content: space-between;
    }
}
</style>