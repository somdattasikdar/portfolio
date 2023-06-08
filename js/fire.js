const firebaseConfig = {
    apiKey: "AIzaSyAWpRNnwdgMC4FwSV4JumoFLMCvFF7UQRg",
    authDomain: "portfolio-daf61.firebaseapp.com",
    databaseURL: "https://portfolio-daf61-default-rtdb.firebaseio.com",
    projectId: "portfolio-daf61",
    storageBucket: "portfolio-daf61.appspot.com",
    messagingSenderId: "751849104284",
    appId: "1:751849104284:web:f0a024cc0c3942098c1e59",
    measurementId: "G-VWVFZ5802R"
};

firebase.initializeApp(firebaseConfig);

const porfolioDB = firebase.dabase().ref('portfolio')

