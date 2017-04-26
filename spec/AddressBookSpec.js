describe('Address Book', function() {
	it('shold be able to add a contact', function() {
		// Take the OOJS approach
		// Represent a new addressBook
		var addressBook = new AddressBook();
			thisContact = new Contact();

		addressBook.addContact(thisContact);
		expect(addressBook.getContact(0)).toBe(thisContact);
	});
});