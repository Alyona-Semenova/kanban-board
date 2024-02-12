<!-- Компонент колонки -->

<template>
    <div class="item-column">
        <div class="item-column__header" :style="{ backgroundColor: headerColor }">
            <div class="item-column__header-text">
                {{ headerText }}
            </div>
        </div>

        <div class="item-column__content" v-for="task in tasks" :key="task.id">
            <ItemCard @openContextMenu="openContextMenu" :task="task" />
        </div>

    </div>
</template>
  
<script>
import ItemCard from './ItemCard.vue';

export default {
    name: 'ItemColumn',
    components: {
        ItemCard,
    },

    props: {
        headerColor: {
            type: String,
            reqiure: true,
        },

        headerText: {
            type: String,
            reqiure: true,
        },
        statusId: {
            type: Number,
            require: true,
        },
    },

    computed: {
        tasks() {
            return this.$store.getters.tasksByStatus(this.statusId);
        }
    },

    methods: {
        openContextMenu(e) {
            this.$emit('openContextMenu', e);
        }
    },



}

</script>
  
  
<style lang="scss" scoped>
.item-column {
    // border: 1px solid blue;
    flex: 4;
    height: 100%;
    position: relative;

    min-width: 177px;

    &__header {
        height: 32px;
        border: 1px solid #E3E5E8;
        border-bottom: none;
        border-radius: 8px 8px 0 0;
        display: flex;
        justify-content: center;
        align-items: center;

        &-text {
            color: #1C2530;
            font-size: 14px;
            font-weight: 584;
            line-height: 17.5px;
        }
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 8px;

        height: calc(100% - 50px);
        border: 1px solid #E3E5E8;
        border-top: none;
        border-radius: 0 0 8px 8px;
        padding: 8px 16px 8px 8px;

        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-width: thin;
    }
}
</style>