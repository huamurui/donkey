<script setup>
import { ref, toRaw } from 'vue'
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  save: {
    type: Function,
    required: true,
  },
})
// for draft edit... deepclone might be much more esaier than other
const draftData = ref(JSON.parse(JSON.stringify(props.data)))
</script>

<template>
  <div class="greetings">
    <div>
      data: {{ data }}
    </div>
    <div>
      draftData: {{ draftData }}
    </div>
    <button @click="draftData.count++">draft-data++</button>
    <button @click="$emit('change', JSON.parse(JSON.stringify(draftData)));">
      emit draft-data to data</button>
    <button @click="save(JSON.parse(JSON.stringify(draftData)))">
      prop save draft-data to data
    </button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
