var firebaseConfig = { apiKey: "AIzaSyBQyjrjTsIQsGMGcgu-cr1HjszcHi5ZWMk", authDomain: "testkwitter.firebaseapp.com", databaseURL: "https://testkwitter.firebaseio.com", projectId: "testkwitter", storageBucket: "testkwitter.appspot.com", messagingSenderId: "624653701634", appId: "1:624653701634:web:2cb9a8bd873f17d92d8d1b" }; firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
var user_name=localStorage.getItem("user_namekey");
document.getElementById("user_name").innerHTML="HELLO "+user_name;
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purposekey:"AddingRoom"
      });
      localStorage.setItem("room_namekey",room_name);
      window.location="page3.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log(Room_names);
       var room_div='<div class="room_name" id="" onclick="gotoroom(this.id)">'+Room_names+'</div><br>';

       document.getElementById("output").innerHTML+=room_div;
      
      //End code
      });});}
getData();


function gotoroom(div_id){
console.lod(div_id);
localStorage.setItem("roomdivkey",div_id);
window.location="page3.html";
}

function logout(){
      localStorage.removeItem("roomdivkey");
      localStorage.removeItem("user_namekey");
      localStorage.removeItem("room_namekey");
      window.location="page1.html";
}