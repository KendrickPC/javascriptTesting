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
// accepts the index and returns the element of that array with the index
AddressBook.prototype.getContact = function(index) {
	return this.contacts[index];
}

AddressBook.prototype.deleteContact = function(index) {
	this.contacts.splice(index, 1);
}