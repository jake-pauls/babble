import firebase from 'firebase'

export const connectToFirebase = () => {
  const firebaseConfig = {
    apiKey: process.env.VUE_APP_FB_API_KEY,
    authDomain: process.env.VUE_APP_FB_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_FB_DB_URL,
    appId: process.env.VUE_APP_FB_APP_ID
  }

  if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig)
}

export const getFirepadReference = () => {
  let ref = firebase.database().ref()
  let hash = window.location.hash.replace(/#/g, '')

  if (hash) {
    ref = ref.child(hash)
  } else {
    ref = ref.push()
    window.location = window.location + '#' + ref.key
  }

  return ref
}
