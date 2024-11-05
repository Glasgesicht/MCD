import { createRouter, createMemoryHistory } from "vue-router";

import generalSettings from "@/views/settings/generalSettings.vue";
import flightSettings from "@/views/settings//flightSettings.vue";
import packageSettings from "@/views/settings/packageSettings.vue";
import waypointsSettings from "@/views/settings/waypoints.vue";

import newbriefing from "@/views/mdc/newbriefing.vue";
import newsteerpoints from "@/views/mdc/newsteerpoints.vue";
import newdatacard from "@/views/mdc/newdatacard.vue";
import newcomms from "@/views/mdc/newcomms.vue";
import Commsmatrix from "@/views/mdc/commsmatrix.vue";

import { useFlightStore } from "@/stores/flightStore";
import { storeToRefs } from "pinia";

const router = createRouter({
  history: createMemoryHistory(),

  routes: [
    {
      name: "generalSettings",
      path: "/generalSettings",
      component: generalSettings,
      meta: {
        canExport: false,
      },
    },
    {
      name: "packageSettings",
      path: "/packageSettings",
      component: packageSettings,
      meta: {
        canExport: false,
      },
    },
    {
      name: "flightSettings",
      path: "/flightSettings",
      component: flightSettings,
      meta: {
        canExport: false,
      },
    },
    {
      name: "waypointsSettings",
      path: "/waypointsSettings",
      component: waypointsSettings,
      meta: {
        canExport: false,
      },
    },
    {
      name: "briefing",
      path: "/briefing",
      component: newbriefing,
      props: {
        pagenr: 1,
      },
      meta: {
        canExport: true,
      },
    },
    {
      name: "datacard",
      path: "/datacard",
      component: newdatacard,
      props: {
        pagenr: 2,
      },
      meta: {
        canExport: true,
      },
    },
    {
      name: "steerpoints",
      path: "/steerpoints",
      component: newsteerpoints,
      props: {
        pagenr: 3,
      },
      meta: {
        canExport: true,
      },
    },
    {
      name: "comms",
      path: "/comms",
      component: newcomms,
      props: {
        pagenr: 4,
      },
      meta: {
        canExport: true,
      },
    },
    {
      name: "commsMatrix",
      path: "/commsMatrix",
      component: Commsmatrix,
      props: {
        pagenr: 5,
      },
      meta: {
        canExport: true,
      },
    },
  ],
});

router.beforeEach((to, from) => {
  const { getFlight } = storeToRefs(useFlightStore());
  if (!getFlight.value) return false;
  return true;
});

export default router;