<template>
    <div>
    <div>
      <h1>This is the Editor view</h1>
    </div>
    <div class="firepad" id="firepad-container"></div>
  </div>
</template>

<script>
  import brace from "brace";
  // firepad requires ace globally
  global.ace = brace;
  global.ace.require = global.ace.acequire;
  import Firepad from "firepad";
  import { connectToFirebase, getFirepadReference } from "../utils/firebaseUtils.js";

  export default {
    name: 'Start',
    mounted() {
        // Connect to firebase and give firepad a reference
        connectToFirebase();
        let firepadReference = getFirepadReference();

        // Instantiate ace editor
        let editor = global.ace.edit("firepad-container");

        // Start ace session
        let session = editor.getSession();
        session.setUseWrapMode(true);
        session.setUseWorker(true);
        session.setMode("ace/mode/javascript");

        // Create firepad instance
        Firepad.fromACE(firepadReference, editor, {
            defaultText: "// Welcome to Babble!"
        });
    }
  }
</script>

<style scoped>
.firepad {
  width: 700px;
  height: 450px;
}
</style>
