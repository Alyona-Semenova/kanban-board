<!-- Компонент контекстного меню  -->

<template>
    <div class="context-menu" :style="getStyle()" @click="closeContextMenu">
        <div class="context-menu__content">
            <div class="context-menu__item menu-item">
                <div class="menu-item__icon">
                    <EditIcon :color="'#86949E'" />
                </div>
                <div class="menu-item__text">Редактировать</div>
            </div>
            <div class="context-menu__item menu-item" @click="deleteCard">
                <div class="menu-item__icon">
                    <DeleteIcon :color="'#86949E'" />
                </div>
                <div class="menu-item__text">Удалить</div>
            </div>

        </div>

    </div>
</template>


<script>
import EditIcon from './icons/EditIcon.vue';
import DeleteIcon from './icons/DeleteIcon.vue';

export default {
    name: 'ContextMenu',
    components: {
        EditIcon,
        DeleteIcon,
    },

    props: {
        contextMenuPosition: {
            type: Object,
            require: true,
        },
    },


    methods: {
        /**
         * Получение позици модального окна
         */
        getStyle() {
            let left = this.contextMenuPosition.left < 850 ? this.contextMenuPosition.left : this.contextMenuPosition.left - 150;
            let top = this.contextMenuPosition.top + 10;
            return { left: left + 'px', top: top + 'px' }
        },

        /**
         * Закрыть контекстное меню
         */
        closeContextMenu() {
            this.$emit('closeContextMenu')
        },

        deleteCard() {
            this.$emit('deleteCard')
        },
    }
}
</script>

  
<style lang="scss" scoped>
.context-menu {
    width: 144px;
    height: 76px;
    border: 1px solid #E3E5E8;
    border-radius: 8px;
    position: absolute;
    z-index: 1;
    top: 80px;
    background-color: white;
    box-shadow: 0px 9px 44px -21px rgba(0, 0, 0, 0.22);

    &__content {
        margin: 8px 0;
        height: calc(100% - 16px)
    }
}

.menu-item {
    padding: 0 10px;
    display: flex;
    align-items: center;
    column-gap: 8px;
    height: 30px;


    &__text {
        font-size: 14px;
        line-height: 18px;
        color: #1C2530;
        font-weight: 400;
    }

    &:hover {
        background-color: #E1F1FF;
        cursor: pointer;
    }
}
</style>