<template>
  <div class="main-board">
    <div class="main-board__container">
      <item-column :header-color="'#FF99E9'" :header-text="'На согласовании'" @openContextMenu="openContextMenu" :status-id="1"/>
      <item-column :header-color="'#66B8FF'" :header-text="'Новые'" @openContextMenu="openContextMenu" :status-id="2" />
      <item-column :header-color="'#FFD466'" :header-text="'В процессе'" @openContextMenu="openContextMenu" :status-id="3"/>
      <item-column :header-color="'#53C666'" :header-text="'Готово'" @openContextMenu="openContextMenu" :status-id="4"/>
      <item-column :header-color="'#F76E85'" :header-text="'Доработать'" @openContextMenu="openContextMenu" :status-id="5"/>

      <template v-if="contextMenu">
        <ContextMenu :contextMenuPosition="contextMenuPosition" @closeContextMenu="closeContextMenu" @deleteCard="deleteCard" />
      </template>

    </div>

  </div>
</template>

<script>
import ContextMenu from '@/components/ContextMenu.vue';
import ItemColumn from '@/components/ItemColumn.vue';

export default {
  name: 'MainBoard',
  components: {
    ItemColumn,
    ContextMenu,
  },

  data() {
    return {
      contextMenu: false,
      contextMenuPosition: {
        left: null,
        top: null,
      },

      currentTaskId: null, // идентификатор текущей задачи в которой открыто контектное меню 
    }
  },


  methods: {
    openContextMenu(objForContextMenu) {
      this.currentTaskId = objForContextMenu.taskId;
      this.contextMenuPosition.left = objForContextMenu.e.clientX;
      this.contextMenuPosition.top = objForContextMenu.e.clientY;
      this.contextMenu = !this.contextMenu;
    },

    closeContextMenu() {
      this.contextMenu = false
    },

    deleteCard() {
      this.$store.dispatch('deleteCard', this.currentTaskId);
    }
  }
}
</script>


<style lang="scss">
.main-board {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 20px);

  &__container {
    display: flex;
    column-gap: 8px;
    flex: 1;
    height: 100%;
  }
}
</style>