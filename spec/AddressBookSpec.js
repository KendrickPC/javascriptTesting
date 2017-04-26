describe('Address Book', function() {
	var addressBook = new AddressBook();
		thisContact = new Contact();

	beforeEach(function() {

	});

	it('should be able to add a contact', function() {
		// Take the OOJS approach
		// Represent a new addressBook
		addressBook.addContact(thisContact);
		expect(addressBook.getContact(0)).toBe(thisContact);
	});
	it('should be able to delete a contact', function() {
		addressBook.addContact(thisContact);
		addressBook.deleteContact(0);

		expect(addressBook.getContact(0)).not.toBeDefined();
	});
});

