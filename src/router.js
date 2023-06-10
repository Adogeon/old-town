import { createRouter, createWebHashHistory } from "vue-router";

import TimelinePage from "./components/TimelinePage.vue";
import AmericanPage from "./components/AmericanPage.vue";
import CaliforniosPage from "./components/CaliforniosPage.vue";
import CitationPage from "./components/CitationPage.vue";

const routes = [
	{ path: "/", component: TimelinePage },
	{ path: "/californios", component: CaliforniosPage },
	{ path: "/american", component: AmericanPage },
	{ path: "/citation", component: CitationPage },
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
