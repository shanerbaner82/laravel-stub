<template>
  <div class="relative">
    <button
      class="focus:outline-none"
      @click="open = !open"
    >
      <span
        class="mr-4 flex items-center justify-center text-gray-700"
      >
        {{ user.name }}
      </span>
    </button>
    <button
      v-if="open"
      class="fixed top-0 bottom-0 right-0 left-0 h-full w-full focus:outline-none"
      @click="open = false"
    />
    <div
      v-if="open"
      class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg w-64"
    >
      <button
        class="block w-full px-4 py-2 text-gray-600 hover:bg-purple-500 hover:text-white text-lg text-left focus:outline-none"
        @click="logout"
      >
        Logout
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DropdownOptions',
  data() {
    return {
      open: false,
      user: JSON.parse(localStorage.getItem('user')),
    };
  },
  methods: {
    toggleOpen() {
      this.open = !this.open;
    },
    logout() {
      axios.post('/logout').then(() => {
        location.href = '/';
      });
    },
  },
};
</script>

<style scoped></style>
