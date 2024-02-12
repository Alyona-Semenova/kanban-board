

<template>
    <!-- <div v-if="notifications.length" class="notification__wrapper">
        <div v-for="({ text, type }, i) in notifications" :key="i" :class="`notification notification--${type}`">
            <span>{{ text }}</span>
        </div>
    </div> -->

    <div v-if="notifications.length" class="notification__wrapper">


        <div v-for="({ title, text, type }, i) in notifications" :key="i" :class="`notification notification--${type}`">
            <div class="notification__label" />
            <div v-if="type == 'success'" class="notification__icon-notification">
                <NotificationSuccessIcon :width="'24px'" :height="'24px'" />
            </div>
            <div v-if="type == 'error'" class="notification__icon-notification">
                <NotificationErrorIcon :width="'24px'" :height="'24px'" />
            </div>

            <div class="notification__icon">
                <CloseIcon :color="'#86949E'" :width="'16px'" :height="'16px'" />
            </div>

            <div class="notification__text">
                <span> {{ title }} </span>
                <span> {{ text }} </span>
            </div>
        </div>


    </div>
</template>
  
<script>
import NotificationErrorIcon from './icons/NotificationErrorIcon.vue'
import NotificationSuccessIcon from './icons/NotificationSuccessIcon.vue'
import CloseIcon from './icons/CloseIcon.vue';
import { mapState } from 'vuex';
export default {
    name: 'NotificationComponent',
    components: {
        CloseIcon,
        NotificationSuccessIcon,
        NotificationErrorIcon,
    },

    computed: {
        ...mapState(['notifications'])
    }
};

</script>
  
<style lang="scss" scoped>
.notification {
    box-sizing: border-box;
    max-width: 100%;
    padding: 16px;
    text-align: center;
    color: #1C2530;
    border: 1px solid #E3E5E8;
    border-radius: 8px;
    background: white;
    width: 100%;
    position: relative;
    display: flex;

    &__text {
        margin: 0 16px 0 40px;
        height: 100%;
        width: calc(100% - 50px);
        text-align: left;
        display: flex;
        flex-direction: column;
        gap: 8px;
        word-wrap: break-word;
        position: relative;

        & span:first-child {
            font-weight: 584;
        }

        & span:last-child {
            font-weight: 400;
        }
    }

    &__icon {
        position: absolute;
        top: 8px;
        right: 8px;
        cursor: pointer;

        &-notification {
            position: absolute;
            top: 16px;
            left: 16px;
        }
    }

    &__label {
        border-radius: 8px 0 0 8px;
        width: 8px;
        height: 100%;

        position: absolute;
        top: 0;
        left: 0;
    }

    &__wrapper {
        display: flex;
        flex-direction: column-reverse;
        gap: 5px;

        height: 76px;
        position: fixed;
        z-index: 9999;
        bottom: 0;
        right: 0;
        width: 420px;
        padding: 10px;
    }

    &--info {
        .notification__label {
            background: #3D86F4;
        }
    }

    &--error {
        .notification__label {
            background: #F53D5C;
        }
    }

    &--success {
        .notification__label {
            background: #22C33D;
        }
    }

    &--warning {
        .notification__label {
            background: #FFD466;
        }
    }
}
</style>