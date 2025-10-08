<template>
  <q-page class="q-pa-md">
    <q-form @submit="onSubmit" @reset="onReset" ref="myForm">
      <q-input filled v-model="name" label="Name" />
      <q-input filled v-model="surname" label="Surname" />
      <q-checkbox v-model="accept" label="I accept the terms" />
      <div class="q-mt-md">
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const surname = ref('')
const accept = ref(false)

function onSubmit () {
  if (accept.value) {
    alert(`Submitted: ${name.value} ${surname.value}`)
  } else {
    alert('Please accept the terms')
  }
}

function onReset () {
  name.value = ''
  surname.value = ''
  accept.value = false
}
</script>
