function AddressBook() {
	this.contacts = [];
	this.initialComplete = false;
}

AddressBook.prototype.getInitialContacts = function (cb) {
	var self = this;
// boilerplate code to make the code 'act' asynchronously
	setTimeout(function() {
		self.initialComplete = true;
		if (cb) {
			return cb();
		}
	}, 3);
}

// write a new function called addContact that accepts
// a contact as a parameter and pushes this contact
// into the contacts array
AddressBook.prototype.addContact = function(contact) {
		this.contacts.push(contact);
	}
	// solution to 'addressBook.getContact is not a function' error
	// accepts the index and returns the element of that array with the index
AddressBook.prototype.getContact = function(index) {
		return this.contacts[index];
	}
	// writing the deleteContact function using the splice method of an array to 
	// remove an element
AddressBook.prototype.deleteContact = function(index) {
	this.contacts.splice(index, 1);
}