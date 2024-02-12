<!-- Компонент карточки  -->

<template>
    <div class="item-card">
        <div class="item-card__content">

            <div class="item-card__text">
                {{ task.title }}
            </div>
            <div class="item-card__more">
                <MoreIcon :color="iconColor ? '#3D86F4' : '#86949E'" @eventUp="openContextMenu" />
            </div>
        </div>
    </div>
</template>


<script>
import MoreIcon from './icons/MoreIcon.vue';

export default {
    name: 'ItemCard',
    components: {
        MoreIcon,
    },
    props: {
        task: {
            type: Object,
            requires: true,
        },
    },
    data() {
        return {
            iconColor: false,
        }
    },

    methods: {
        openContextMenu(e) {
            this.iconColor = !this.iconColor;
            let objForContextMenu ={
                e: e,
                task: this.task,
            }

            this.$emit('openContextMenu', objForContextMenu);
        }
    }
}
</script>

  
<style lang="scss" scoped>
.item-card {
    width: 100%;
    min-height: 34px;
    border: 1px solid #E3E5E8;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    &__content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px;
        position: relative;
    }

    &__text {
        width: calc(100% - 25px);
        text-align: left;
        font-size: 14px;
        color: #1C2530;
    }

    &__more {
        cursor: pointer;
        position: absolute;
        top: 10px;
        right: 6px;
    }
}
</style>