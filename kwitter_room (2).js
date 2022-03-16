//ADD YOUR FIREBASE LINKS
    // Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC1kztCJUqlAR4_7WXdQuEl0JmaIPELZzE",
      authDomain: "kwittter-98b1a.firebaseapp.com",
      projectId: "kwittter-98b1a",
      storageBucket: "kwittter-98b1a.appspot.com",
      messagingSenderId: "420061988029",
      appId: "1:420061988029:web:f79f4e7d02ac29d254e3d4"
    };
    
    // Initialize Firebase
 user_name=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";
 function addRoom(){
       room_name=document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
             purpose:"adding room name"
       });
       localStorage.setItem("room_name",room_name);
       window.location="kwitter_page.html";
 }
 function getdata()
 {
       firebase.database().ref("/").on('value',function (snapshot){
             document.getElementById("output").innerHTML=" ";
 snapshot.forEach(function(childsnapshot){
       childKey=childsnapshot.key;
       Room_names=childKey;
       console.log("room name -"+Room_names);
       row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
       });
 });
 } 
 getData();
 function redirectToRoomName(name)
 {
       console.log(name);
       localStorage.setItem("room_name",name);
       window.location="kwitter_page.html";
 }
 
 function logout()
 {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location="Index (2).html";
 }