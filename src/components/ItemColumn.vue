<!-- Компонент колонки -->

<template>
    <div class="item-column">
        <div class="item-column__header" :style="{ backgroundColor: headerColor }">
            <div class="item-column__header-text">
                {{ headerText }}
            </div>
        </div>

        <div class="item-column__content" @drop="onDrop" @dragover.prevent @dragenter.prevent>
            <ItemCard v-for="task in tasks" :key="task.id" :task="task" :draggable="draggable"
                @dragstart.native="startDrag($event, task.id)" @openContextMenu="openContextMenu" />

            <template v-if="isAddingCard">
                <AddCard :status-id="statusId" @closeEdit="closeEdit" />
            </template>


            <div v-if="!isAddingCard" class="item-column__add" @click="addCard">
                <AddIcon :color="'#3D86F4'" />
                <div class="item-column__add-text">
                    Добавить
                </div>
            </div>

        </div>


    </div>
</template>
  
<script>
import AddCard from './AddCard.vue';
import AddIcon from './icons/AddIcon.vue';
import ItemCard from './ItemCard.vue';

export default {
    name: 'ItemColumn',
    components: {
        ItemCard,
        AddIcon,
        AddCard,
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

    data() {
        return {
            isAddingCard: false
        }
    },

    computed: {
        tasks() {
            return this.$store.getters.tasksByStatus(this.statusId);
        }
    },

    methods: {
        /**
         * Открыть контекстное меню
         * @param {} objForContextMenu 
         */
        openContextMenu(objForContextMenu) {
            this.$emit('openContextMenu', objForContextMenu);
        },

        /**
         * Добавить задачу
         */
        addCard() {
            this.isAddingCard = true;
        },

        /**
         * Закрыть редактирование 
         */
        closeEdit() {
            this.isAddingCard = false;
        },

        /**
         * Разрешаем перетаскивание элемента (если нужны ограничивающие условия - пишем их сюда)
         */
        draggable() {
            return "draggable";
        },


        startDrag(evt, task) {
            evt.dataTransfer.dropEffect = "move";
            evt.dataTransfer.effectAllowed = "move";
            evt.dataTransfer.setData("task", task);
        },

        onDrop(evt) {
            this.dropTasks(evt.dataTransfer.getData("task"));
        },

        /**
         * Отправляем в стор событие по изменению карточки
         *  taskId - идентификатор элемента, который перетаскиваем
         *  this.statusId - идентификатор колонки куда перетаскиваем элемент 
         * @param {*} taskId
         */
        dropTasks(taskId) {
            this.$store.dispatch("editCard", { id: taskId, status: this.statusId });
        },
    },



}

</script>
  
  
<style lang="scss" scoped>
.item-column {
    flex: 5;
    height: 100%;
    position: relative;
    min-width: 177px;
    max-width: calc(100vw / 5);

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

    &__add {
        display: flex;
        gap: 4px;
        align-items: center;
        cursor: pointer;

        &-text {
            color: #3D86F4;
            font-size: 14px;
            line-height: 18px;
            font-weight: 400;
        }
    }
}
</style>