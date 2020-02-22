<template>
  <div>
    <input
      v-model="search"
      type="search"
      class="rounded-lg border border-gray-300 px-2 py-1 text-lg w-full lg:1/4 placeholder-gray-600"
      placeholder="Search"
    />
    {{ results }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      results: null,
    };
  },
  watch: {
    search(val) {
      axios.get('/api/search?search=' + val).then(data => {
        this.results = data.data;
      });
    },
  },
};
</script>

<style></style>
