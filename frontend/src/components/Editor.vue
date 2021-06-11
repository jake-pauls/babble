<template>
  <div>
    <div class="firepad" id="firepad-container"></div>
  </div>
</template>

<script>
  import brace from 'brace'
  global.ace = brace
  global.ace.require = global.ace.acequire
  import Firepad from 'firepad'
  import { connectToFirebase, getFirepadReference } from '../utils/firebaseUtils.js'

  export default {
    name: 'Start',
    async mounted() {
      connectToFirebase()
      let firepadReference = getFirepadReference()

      let editor = global.ace.edit('firepad-container')

      let session = editor.getSession()
      session.setUseWrapMode(true)
      session.setUseWorker(true)
      session.setMode('ace/mode/javascript')

      Firepad.fromACE(firepadReference, editor, {
        defaultText: '// Welcome to Babble!'
      })
    }
  }
</script>

<style scoped>
  .firepad {
    height: 450px;
    width: 450px;
  }
</style>
