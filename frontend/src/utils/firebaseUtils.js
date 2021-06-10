import firebase from "firebase";

export const connectToFirebase = () => {
    const firebaseConfig = {
        apiKey: process.env.VUE_APP_FB_API_KEY,
        authDomain: process.env.VUE_APP_FB_AUTH_DOMAIN,
        databaseURL: process.env.VUE_APP_FB_DB_URL,
        appId: process.env.VUE_APP_FB_APP_ID,   
    };

    console.log("test");
    console.log(firebaseConfig.apiKey);
    // Ensure firebase is only instantiated once on the client
    if (firebase.apps.length === 0)
        firebase.initializeApp(firebaseConfig);
};

export const getFirepadReference = () => {
    let ref = firebase.database().ref();
    let hash = window.location.hash.replace(/#/g, '');

    // Use hashes in the URL to track editor changes
    if (hash) {
        ref = ref.child(hash);
    } else {
        ref = ref.push();
        window.location = window.location + '#' + ref.key;
    }

    if (typeof console !== 'undefined') {
        console.log('Firebase data: ', ref.toString());
    }

    return ref;
};
