import Vue from "vue";
import * as VueGoogleMaps from "~/node_modules/vue2-google-maps";
import GmapCluster from "vue2-google-maps/dist/components/cluster"; // replace src with dist if you have Babel issues

Vue.component("GmapCluster", GmapCluster);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBoqr9AObKnqkIKBSXNtkDX5-3_9y3SPHw",
    libraries: "drawing"
  },
  installComponents: true
});
