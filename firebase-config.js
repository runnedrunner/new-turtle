var firebaseConfig = {
  apiKey: "AIzaSyBrfu07aQsQW8pQOBYEFZDd3eNCuFqqNgI",
  authDomain: "testproject-40728.firebaseapp.com",
  databaseURL: "https://testproject-40728.firebaseio.com"	
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