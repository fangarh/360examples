import { createApp } from "vue";
import PointDisplay from "./vue/coords.vue";

export default {
  mountCmd: async (e: Context) => {
    const rootElm = e.el as HTMLElement;
    rootElm.innerHTML = '';
    const mountPoint = document.createElement('div');
    rootElm.appendChild(mountPoint);

    const app = createApp(PointDisplay, { context: e });
    app.mount(mountPoint);
  }
}
