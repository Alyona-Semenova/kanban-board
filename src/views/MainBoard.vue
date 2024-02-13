<template>
  <div class="main-board">
    <div class="main-board__container">
      <item-column :header-color="'#FF99E9'" :header-text="'На согласовании'" @openContextMenu="openContextMenu"
        :status-id="1" />
      <item-column :header-color="'#66B8FF'" :header-text="'Новые'" @openContextMenu="openContextMenu" :status-id="2" />
      <item-column :header-color="'#FFD466'" :header-text="'В процессе'" @openContextMenu="openContextMenu"
        :status-id="3" />
      <item-column :header-color="'#53C666'" :header-text="'Готово'" @openContextMenu="openContextMenu" :status-id="4" />
      <item-column :header-color="'#F76E85'" :header-text="'Доработать'" @openContextMenu="openContextMenu"
        :status-id="5" />

      <template v-if="contextMenu">
        <ContextMenu :contextMenuPosition="contextMenuPosition" @closeContextMenu="closeContextMenu"
          @deleteCard="openModal" @editCard="editCard" />
      </template>


      <Notification @closeNotification="closeNotification"></Notification>

      <ModalWindow v-if="modalWindow" :textTask="currentTask.title" @deleteCard="deleteCard" @closeModal="closeModal">
      </ModalWindow>
      <div v-if="modalWindow" class="overlay"></div>
    </div>



  </div>
</template>

<script>
import ContextMenu from '@/components/ContextMenu.vue';
import ItemColumn from '@/components/ItemColumn.vue';
import Notification from '@/components/Notification.vue';
import ModalWindow from '@/components/modals/ModalWindow.vue';

export default {
  name: 'MainBoard',
  components: {
    ModalWindow,
    ItemColumn,
    ContextMenu,
    Notification
  },

  data() {
    return {
      modalWindow: false, // открыто ли сейчас модальное окно 
      contextMenu: false, // открыто ли сейчас контекстное меню
      contextMenuPosition: { // координаты для открытия контекстного меню
        left: null,
        top: null,
      },

      currentTask: {}, // текущая задача в которой открыто контектное меню 
    }
  },


  methods: {
    /**
     * Открыть конетекстное меню
     * @param {*} objForContextMenu 
     */
    openContextMenu(objForContextMenu) {
      this.currentTask = objForContextMenu.task;
      this.contextMenuPosition.left = objForContextMenu.e.clientX;
      this.contextMenuPosition.top = objForContextMenu.e.clientY;
      this.contextMenu = !this.contextMenu;
    },

    /**
     * Закрыть контекстное меню
     */
    closeContextMenu() {
      this.contextMenu = false
    },

    /**
     * Открыть модальное окно
     */
    openModal() {
      this.modalWindow = true;
    },

    /**
     * Закрыть модальное окно
     */
    closeModal() {
      this.modalWindow = false;
    },

    /**
     * Удалить карточку
     */
    deleteCard() {
      this.$store.dispatch('deleteCard', this.currentTask);
      this.closeModal();
    },

    /**
     * Редактировать карточку
     */
    editCard() {
      this.$store.dispatch('editCard', this.currentTask);
    },

    /**
     * Закрыть уведомление 
     */
     closeNotification(id) {
      this.$store.commit("DELETE_NOTIFICATION", id)
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
  width: calc(100% - 50px);
  margin: 0 auto;

  &__container {
    display: flex;
    column-gap: 8px;
    flex: 1;
    height: 100%;
  }
}

// Затемнение окна при открытии модалки
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.6;
  z-index: 50;
}


.overlay::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>