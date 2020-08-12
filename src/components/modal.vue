<template>
  <div>
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <p>{{mensaje}}</p>
        </div>
      </div>
      <button class="modal-close" @click="$emit('close')"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  data() {
    return {
      mensaje: "Lorem lorem lorem"
    };
  }
};
</script>