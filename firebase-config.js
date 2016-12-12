var firebaseConfig = {
  apiKey: "AIzaSyDI5o9MDkzCYXDzIkBHrVpT3Ydxap9vTbA",
  authDomain: "savelife-c18fb.firebaseapp.com",
  databaseURL: "https://savelife-c18fb.firebaseio.com",
};

firebase.initializeApp(firebaseConfig);

var store = firebase.database().ref()

function storeValue(name, value) {	
  store.child(name).set(value)
}

function addListItem(name, value) {		
  store.child(name).push(value)
}

function onNewListItem(name, callback) {		
  store.child(name).on("child_added", function(data) {
    callback(data.val())
  })
}

function deleteValue(name) {	
  store.child(name).remove()
}

function onNewValue(name, callback) {	
  store.child(name).child(name).on("value", function(data) {		
    callback(data.val());
  })
}