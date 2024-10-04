import {createRouter, createWebHistory} from 'vue-router';
import LoopPlanner from "@/views/LoopPlanner.vue";
import Add from "@/views/Add.vue";
import Edit from "@/views/Edit.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
          path: "/",
          name: "loop",
          component: LoopPlanner
      },
      {
          path: "/add/:id",
          name: "add",
          component: Add
      },
      {
          path: "/edit",
          name: "edit",
          component: Edit
      }
  ]
})

export default router;