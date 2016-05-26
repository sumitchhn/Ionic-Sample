function createContact(){
	var newContact = navigator.contacts.create({"DisplayName":"Test User"});
	newContact.save(onSuccess, onFailure);
	
	function onSuccess(){
		alert("new contact is added");
	}
	function onFailure(message){
		alert("getting Error"+message+"while saving");
	}
}

function display(){
	document.getElementById("searchField").style.display = "block";	
}
function findContact(){
	var name = document.getElementById("searchField").value;
	var options = new ContactFindOptions();
   options.filter = name;
   options.multiple = true;
   fields = ["displayName"];
   navigator.contacts.find(fields, contactfindSuccess, contactfindError, options);
    
   function contactfindSuccess(contacts) {
      for (var i = 0; i < contacts.length-1; i++) {
         alert("Display Name = " + contacts[i].displayName);
      }
   }
	
   function contactfindError(message) {
      alert('Failed because: ' + message);
   }
}