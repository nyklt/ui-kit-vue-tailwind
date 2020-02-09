<template>
  <div id="app" class="antialiased text-gray-900 h-screen flex">
    <div
      class="inset-y-0 left-0  px-8 py-4 bg-purple-800 border-r overflow-auto lg:static lg:inset-auto lg:translate-x-0 -translate-x-full ease-in transition-medium"
    >
      <Navigation />
    </div>
    <div class="flex-1 min-w-0 flex flex-col bg-white">
      <div class="flex-shrink-0 sm:border-b-2 sm:border-gray-200">
        <Navbar />
      </div>
      <div class="flex-1 overflow-auto mx-auto">
        <div class="container mx-auto">
          <router-view />
        </div>
      </div>
    </div>
    <!-- <File /> -->
    <!-- <Buttons/>
        <Card :destination="destination"/>
        <NewCard :property="property" class="min-h-screen p-16 flex flex-col justify-center" /> -->
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";
// import File from "./components/File";
// import Buttons from "./components/Buttons"
// import Card from "./components/Card";
// import NewCard from "./components/NewCard";

export default {
  name: "app",
  components: {
    Navbar,
    Navigation
    // File,
    // NewCard,
    // Card,
    // Buttons
  },
  state: {
    destination: []
  },
  data() {
    return {};
  },
  props: ["destination", "property", "sidebarOpen"],
  methods: {}
};
</script>

<style src="./styles/tailwind.css"></style>
