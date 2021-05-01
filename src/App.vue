<template>
  <div>
    <h1 class="text-5xl font-black tracking-widest font-sans">Search Music</h1>
    <form @submit.prevent="searchItunes(searchText)" class="flex flex-col justify-center items-center bg-gray-200 dark:bg-gray-700 bg-cover">
      <div class="p-4 md:p-8 md:w-3/4">
        <div class="bg-white flex items-center rounded-full shadow-xl">
          <input class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none text-3xl" id="search"
                 v-model="searchText" type="text" placeholder="Search">

          <div class="p-4">
            <button @click="searchItunes(searchText)"
                    class="bg-gray-500 text-white rounded-full p-2 hover:bg-gray-400 focus:outline-none w-12 h-12 flex items-center justify-center">
              <img src="https://img.icons8.com/pastel-glyph/64/000000/search--v2.png" alt="Search"/>
            </button>
          </div>
        </div>
      </div>
      <div v-if="data.results">
        <section class="grid grid-cols-1 sm:grid-cols-4 gap-4 p-5 mx-4">
          <TheShowAlbum :album="album"  v-for="album in data.results" :key="album.artistId"/>
        </section>
      </div>
      <div class="flex justify-center items-center" v-else>
        <img src="src/assets/acosta.png" alt="acosta"/>
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
