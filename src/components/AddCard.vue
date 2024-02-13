<!-- Компонент добавления/редактирования задачи -->

<template>
    <div class="add-card">
        <div class="add-card__content">
            <textarea ref="textarea" v-model="textCard" :placeholder="'Введите текст...'" @input="resize()" @keyup.esc="closeCard"></textarea>

            <div class="add-card__buttons">
                <div class="add-card__buttons-close">
                    <CloseIcon :color="'#F53D5C'" @eventUp="closeCard" />
                </div>
                <div class="add-card__buttons-confirm">
                    <ConfirmIcon :color="'#22C33D'" @eventUp="confirmCard" />
                </div>

            </div>
        </div>


    </div>
</template>


<script>

import ConfirmIcon from './icons/ConfirmIcon.vue';
import CloseIcon from './icons/CloseIcon.vue';

export default {
    name: 'AddCard',
    components: {
        ConfirmIcon,
        CloseIcon
    },
    props: {
        statusId: {
            type: Number,
            require: true,
        }
    },
    data() {
        return {
            textCard: '', // текст задачи
        }
    },


    mounted() {
        let element = this.$refs["textarea"];
        element.focus(); // появляющееся поле ввода сразу в фокусе
    },


    computed: {
        idForNewCard() {
            return this.$store.getters.tasksListLength + 1;
        }
    },

    methods: {
        /**
         * авторесайз для textarea
         */
        resize() {
            let lineHeight = 18; // высота строки
            let element = this.$refs["textarea"];

            element.style.height = "36px";
            element.style.height = element.scrollHeight + lineHeight + "px";
        },

        confirmCard() {
            let task = {
                id: this.idForNewCard,
                title: this.textCard,
                status: this.statusId,

            };
            this.$store.dispatch('addCard', task);

            this.textCard != "" ? this.closeCard() : "";
        },

        closeCard() {
            this.$emit('closeEdit')
        },
    }
}
</script>

  
<style lang="scss" scoped>
.add-card {
    width: 100%;
    border: 1px solid #3D86F4;
    border-radius: 8px;
    display: flex;

    &__content {
        width: 100%;
        min-height: 52px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;

        textarea {
            margin: 8px 20px 8px 8px;
            width: calc(100% - 20px);
            box-sizing: border-box;
            border: none;
            outline: none;
            background-color: white;
            font-size: 14px;
            resize: none;

            &:placeholder {
                color: #86949E;
            }

            &:focus,
            &:active {
                border: none;
                outline: none;
            }


        }




    }



    &__buttons {
        position: absolute;
        right: 4px;
        top: 8px;

        &-confirm {
            width: 20px;
            height: 20px;
            cursor: pointer;
        }

        &-close {
            width: 20px;
            height: 20px;
            cursor: pointer;
        }
    }

}
</style>