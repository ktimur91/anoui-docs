<script setup>
// import { AnoIcon } from '@ano-vue3/ui/components'

// Methods
function openModal(el) {
  document.querySelector(`#${el}`).showModal()
}
function closeModal(el) {
  document.querySelector(`#${el}`).close()
}
</script>

<template>
  <div>
    <button class="btn md primary" @click="openModal('dialog')">open modal</button>

    <dialog id="dialog" class="dialog">
      <button class="btn md primary" @click="closeModal('dialog')">close</button>
      <button class="btn md primary" @click="openModal('dialog2')">open modal</button>

      <div class="dialog-content">
        <p v-for="item of 1000" :key="item">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis nesciunt aliquid voluptates nostrum
          pariatur dolorum consequuntur, maiores illo harum unde necessitatibus eos nihil obcaecati beatae saepe
          placeat, ea dolore fugiat?
        </p>
      </div>
    </dialog>
    <dialog id="dialog2" class="dialog">
      <button class="btn md primary" @click="closeModal('dialog2')">close</button>
      dialog
      <div class="dialog-content">
        <p v-for="item of 5" :key="item">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis nesciunt aliquid voluptates nostrum
          pariatur dolorum consequuntur, maiores illo harum unde necessitatibus eos nihil obcaecati beatae saepe
          placeat, ea dolore fugiat?
        </p>
      </div>
    </dialog>
  </div>
</template>

<style lang="scss">
.dialog-content {
  overflow-y: auto;
}
// dialog::backdrop {
//   background-color: rgb(0 0 0 / 95%);
// }
dialog {
  max-height: calc(100vh - 200px);
  // width: 500px;
  border-radius: 10px;
  background-color: #333;
  color: #fff;
  padding: 30px;

  animation: fade-out 0.3s ease-out;
}

dialog[open] {
  display: grid;
  animation: fade-in 0.3s ease-out;
}

dialog[open]::backdrop {
  animation: backdrop-fade-in 0.3s ease-out forwards;
}

/* Animation keyframes */

@keyframes fade-in {
  0% {
    opacity: 0;
    // transform: scaleY(0);
    display: none;
  }

  100% {
    opacity: 1;
    // transform: scaleY(1);
    display: grid;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
    // transform: scaleY(1);
    display: grid;
  }

  100% {
    opacity: 0;
    // transform: scaleY(0);
    display: none;
  }
}

@keyframes backdrop-fade-in {
  0% {
    background-color: rgb(0 0 0 / 0%);
  }

  100% {
    background-color: rgb(0 0 0 / 80%);
  }
}
</style>
