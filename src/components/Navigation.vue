<template>
  <div
    :class="
      sidebarOpen
        ? 'open w-64 translate-x-0 ease-out transition-medium'
        : 'close w-auto -translate-x-full ease-in transition-medium'
    "
  >
    <button @click="sidebarOpen = !sidebarOpen" class="text-gray-600" v-if="sidebarOpen">
      <svg class="h-6 w-6" fill="none" viewbox="0 0 24 24">
        <path
          d="M4 6h16M4 12h16M4 18h7"
          stroke-linecap="round"
          stroke-width="2"
          stroke="currentColor"
        />
      </svg>
    </button>
    <div v-if="!sidebarOpen">
      <div class="-mx-3 pl-3 pr-1 flex items-center justify-between">
        <span class="text-indigo-200">
          Logo
        </span>
        <button
          @click="sidebarOpen = !sidebarOpen"
          class="text-gray-700"
        >
          <svg class="h-6 w-6" fill="none" viewbox="0 0 24 24">
            <path
              d="M6 18L18 6M6 6L18 18"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
            />
          </svg>
        </button>
      </div>
      <nav class="mt-8">
        <h3 class="text-xs font-semibold text-purple-200 uppercase tracking-wide">
          Components
        </h3>
        <div class="mt-2 -mx-3">
          <router-link
            class="link-navigation"
            :class="selected ? 'text-white' : 'text-white'"
            to="/home"
            >Home</router-link
          >
          <router-link
            v-for="routes in links"
            v-bind:key="routes.id"
            :aria-selected="selected === routes.id"
            class="link-navigation"
            :class="
              selected === routes.id ? 'text-white' : 'text-white'
            "
            :to="`${routes.page}`"
            >{{ routes.text }}</router-link
          >
          <!-- <a
        href="#"
        class="flex justify-between items-center px-3 py-2 bg-gray-200 rounded-lg"
        ><span class="text-sm font-medium text-gray-900">All</span
        ><span class="text-xs font-semibold text-gray-700">36</span></a
      > -->
        </div>
        <!-- <h3
      class="mt-8 text-xs font-semibold text-gray-600 uppercase tracking-wide"
    >
      Tags
    </h3>
    <div class="mt-2 -mx-3">
      <a href="#" class="flex justify-between items-center px-3 py-2 rounded-lg"
        ><span class="text-sm font-medium text-gray-700">Bug</span></a
      >
    </div>
    <button
      class="mt-2 -ml-1 flex items-center text-sm font-medium text-gray-600"
    >
      <svg fill="none" viewbox="0 0 24 24" class="h-5 w-5 text-gray-500">
        <path
          d="M12 7v10m5-5H7"
          stroke-linecap="round"
          stroke-width="2"
          stroke="currentColor"
        ></path></svg
      ><span class="ml-1">New Project</span>
    </button> -->
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      links: [
        {
          id: 0,
          text: "Colors",
          page: "/Colors"
        },
        {
          id: 1,
          text: "Typography",
          page: "/Typography"
        },
        {
          id: 2,
          text: "Buttons",
          page: "/Buttons"
        },
        {
          id: 3,
          text: "Card",
          page: "/Card"
        }
      ],
      sidebarOpen: false
    };
  }
};
</script>
<style></style>
