/// <reference path="C:\Joyce\Compute24\Compute24\Scripts/jquery-3.2.1.js" />

var config = {
    apiKey: "AIzaSyCTkLo8YEWP6pza2z44lZ417dp5YJD7v3I",
    authDomain: "game24project.firebaseapp.com",
    databaseURL: "https://game24project.firebaseio.com",
    projectId: "game24project",
    storageBucket: "game24project.appspot.com",
    messagingSenderId: "767141719374"
};
var game24 = firebase.initializeApp(config);

var gameoftheday;
game24.database().ref('gameoftheday').on('value', function(snapshot) {
    gameoftheday = snapshot.val();
    $('#btnGOTD').show().css('color','blue');
});

$('#btnGOTD').click(function(e){
    if(gameoftheday)
        $('#inputValues').val(gameoftheday)
    $('#btnGOTD').hide();
})

function SaveGOTD(){
    var gotd = $('#inputValues').val();
    var json = JSON.parse('[' +gotd +']');
    game24.database().ref('gameoftheday').set(json);
}

$('#btnSaveGOTD').click(SaveGOTD);
