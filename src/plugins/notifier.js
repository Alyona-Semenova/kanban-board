import notificationTypes from "@/common/enums/notificationTypes";

export default class Notifier {
  #store;
  constructor(store) {
    this.#store = store;
  }

  info(title, text) {
    this.#store.dispatch("createNotification", {
      title,
      text,
      type: notificationTypes.INFO,
    });
  }

  success(title, text) {
    this.#store.dispatch("createNotification", {
      title,
      text,
      type: notificationTypes.SUCCESS,
    });
  }

  error(title, text) {
    this.#store.dispatch("createNotification", {
      title,
      text,
      type: notificationTypes.ERROR,
    });
  }

  warning(title, text) {
    this.#store.dispatch("createNotification", {
      title,
      text,
      type: notificationTypes.WARNING,
    });
  }
}
