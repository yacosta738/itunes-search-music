<template>
  <div class="bg-slate-800 shadow-xl rounded-2xl p-4 flex flex-col gap-2 hover:shadow-2xl hover:scale-[1.02] transition-all duration-200">
    <!-- Artwork with play overlay -->
    <div class="group relative rounded-xl overflow-hidden">
      <img class="w-full block" :src="album.artworkUrl100" :alt="album.collectionName" />
      <div
        class="absolute inset-0 bg-black/0 group-hover:bg-black/50 flex items-center justify-center transition-all duration-200"
      >
        <a
          :href="album.collectionViewUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-200 text-white"
          aria-label="Play on Apple Music"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
          </svg>
        </a>
      </div>
    </div>

    <!-- Collection type badge -->
    <div class="flex justify-end">
      <span class="bg-slate-600 text-slate-200 text-xs font-semibold px-2 py-1 rounded-md">
        {{ album.collectionType }}
      </span>
    </div>

    <!-- Album info -->
    <div class="flex flex-col gap-1">
      <h3 class="text-slate-100 text-base font-semibold truncate" :title="album.collectionName">
        {{ album.collectionName }}
      </h3>
      <h4 class="text-slate-400 text-sm truncate" :title="album.artistName">
        {{ album.artistName }}
      </h4>
      <p class="text-slate-500 text-xs">{{ album.primaryGenreName }} · {{ album.country }}</p>
      <p class="text-slate-400 text-sm font-medium">
        {{ album.collectionPrice }} {{ album.currency }}
      </p>
    </div>

    <!-- Copyright -->
    <p class="text-slate-600 text-xs mt-2 line-clamp-2">{{ album.copyright }}</p>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import {Result} from "../types/ItunesTypes.interface";

export default defineComponent({
  props: {
    album: {
      type: Object as PropType<Result>,
      required: true
    }
  },
  setup() {
    return {};
  }
});
</script>
