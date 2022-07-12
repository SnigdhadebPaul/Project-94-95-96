const firebaseConfig = {
  apiKey: "AIzaSyCS8x2PJe9nv-nBpD_-CczVT7QVEXW0kyI",
  authDomain: "kwitter-99e5a.firebaseapp.com",
  databaseURL: "https://kwitter-99e5a-default-rtdb.firebaseio.com",
  projectId: "kwitter-99e5a",
  storageBucket: "kwitter-99e5a.appspot.com",
  messagingSenderId: "525858024295",
  appId: "1:525858024295:web:c6d2457312f2be3ba59dc2",
  measurementId: "G-B94F7PSHSL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome  " + user_name + "!";






function addRoom() {
  
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
