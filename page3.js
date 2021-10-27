var firebaseConfig = { apiKey: "AIzaSyBQyjrjTsIQsGMGcgu-cr1HjszcHi5ZWMk", authDomain: "testkwitter.firebaseapp.com", databaseURL: "https://testkwitter.firebaseio.com", projectId: "testkwitter", storageBucket: "testkwitter.appspot.com", messagingSenderId: "624653701634", appId: "1:624653701634:web:2cb9a8bd873f17d92d8d1b" }; firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS
var user_name=localStorage.getItem("user_namekey");
var room_name=localStorage.getItem("room_namekey");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      var msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      namekey:user_name,
      messagekey:msg,
      likekey:0
      });
document.getElementById("msg").value="";
}

function logout(){
      localStorage.removeItem("roomdivkey");
      localStorage.removeItem("user_namekey");
      localStorage.removeItem("room_namekey");
      window.location="page1.html";
}