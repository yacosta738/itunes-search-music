<template>
  <div class="min-h-screen bg-slate-700 flex flex-col items-center px-4 py-12">
    <!-- Title with good contrast -->
    <h1 class="text-4xl md:text-5xl font-black tracking-widest font-sans text-slate-100 mb-12 text-center">
      Search Music
    </h1>

    <!-- Search form - grouped vertically, centered -->
    <form @submit.prevent="searchItunes(searchText)" class="w-full max-w-4xl flex flex-col items-center gap-8">
      <!-- Search input wrapper -->
      <div class="w-full">
        <div class="bg-white flex items-center rounded-2xl shadow-2xl overflow-hidden">
          <input
            class="flex-1 py-4 px-8 text-gray-800 leading-tight focus:outline-none text-xl md:text-2xl placeholder-gray-400"
            id="search"
            v-model="searchText"
            type="text"
            placeholder="Search for your favorite songs, artists or albums"
          />
          <button
            @click="searchItunes(searchText)"
            type="submit"
            class="bg-slate-600 text-white rounded-full mx-3 p-3 hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400 transition-colors duration-200 flex items-center justify-center"
            aria-label="Search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Results grid -->
      <div v-if="data.results && data.results.length > 0" class="w-full">
        <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <TheShowAlbum :album="album" v-for="album in data.results" :key="album.artistId" />
        </section>
      </div>

      <!-- Empty state with illustration -->
      <div v-else class="flex flex-col items-center gap-6 mt-8">
        <img
          src="./assets/acosta.png"
          alt="Music illustration"
          class="w-64 md:w-80 lg:w-96 opacity-90"
        />
        <p class="text-slate-300 text-lg md:text-xl font-medium text-center max-w-md">
          Search for your favorite songs, artists or albums
        </p>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref, toRefs} from "vue";
import {itunesSearch} from "./services/iTunesAPI";
import {ItunesTypes} from "./types/ItunesTypes.interface";
import TheShowAlbum from "./components/TheShowAlbum.vue";

export default defineComponent({
  name: "App",
  components: {
    TheShowAlbum
  },
  setup() {
    let albums = reactive<{ data: ItunesTypes }>({ data: {} });
    let searchText = ref("");
    const searchItunes = async (search: string): Promise<void> => {
      albums.data = await itunesSearch(search);
      console.log("data", albums);
    };

    return { searchItunes, ...toRefs(albums), searchText };
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 0;
}
</style>
