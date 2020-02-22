<template>
  <Portal to="modals">
    <Transition name="fade" appear>
      <div v-show="show" class="modal-backdrop" @click.self="dismiss">
        <div
          class="w-full items-center justify-center flex flex-1 z-50"
          @click.self="dismiss"
        >
          <slot />
        </div>
      </div>
    </Transition>
  </Portal>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    closeable: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    show: {
      immediate: true,
      handler(show) {
        if (show) {
          document.body.style.setProperty('overflow', 'hidden');
        } else {
          document.body.style.removeProperty('overflow');
        }
      },
    },
  },
  created() {
    const escapeHandler = e => {
      if (e.key === 'Escape' && this.show) {
        this.dismiss();
      }
    };
    document.addEventListener('keydown', escapeHandler);
    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', escapeHandler);
      document.body.style.removeProperty('overflow');
    });
  },
  methods: {
    dismiss() {
      if (this.closeable) {
        this.$emit('hide');
      }
    },
  },
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 40;
  background: rgba(0, 0, 0, 0.75);
}

/*.modal-container {*/
/*    @apply .w-full .items-center .justify-center;*/
/*}*/

/*@screen md {*/
/*    .modal-container {*/
/*        @apply .flex-1 .flex;*/
/*    }*/
/*}*/

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
