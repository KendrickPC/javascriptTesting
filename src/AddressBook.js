function AddressBook () {
	this.contacts = [];
}

// write a new function called addContact that accepts
// a contact as a parameter and pushes this contact
// into the contacts array
AddressBook.prototype.addContact = function(contact) {
	this.contacts.push(contact);
}
// solution to 'addressBook.getContact is not a function' error
AddressBook.prototype.getContact = function(index) {
	return this.contacts[index];
}
