# JavaScript Testing


# Notes
<!-- Practice testing my javascript applications using Jasmine. -->
	https://jasmine.github.io/
		version 2.2.0

'it' and 'describe' are an outline to organize the information.

'it' calls are used to define a specification (a container for a test to identify the exact feature tested). 'it' is defining the boundary around the test.  

'describe' calls are used to define a 
suite (group of related specs). Used to provide an organization tool/level of indentation. 


# Red-Green Refactor Cycle 
<!-- Put into use by writing AddressBookSpec.js application -->
	Run SpecRunner.html file for testing

# Step 1
	- Being able to add a contact
	- Write a test for it in the Spec file

# Step 2 
	- Describe a new suite and create a new spec within the suite. 
	- Represent a new addressBook object via the OOJS approach.
	- Added add contact method to my addressBook.
	- Test that 'thisContact' was added to my addressBook.

# Step 3
	- Check SpecRunner.html. Error occurs in line 5. AddressBook is not define. Write a simple constructor function for AddressBook in the source file. 
	- The SpecRunner.html file shows 'Contact is not defined'. 
	- Create a simple constructor function for Contact in the Contact.js source file. 

# Step 4
<!-- helpful solution from stackoverflow -->
	http://stackoverflow.com/questions/36514468/jasmine-throws-one-error-error-timeout-async-callback-was-not-invoked
		- add properties to the class
		- Implement addressBook.addContact is not a function failure by the following lines of code:
<!-- write a new function called addContact that accepts a contact as a parameter and pushes this contact into the contacts array
 -->
# Step 5
	- Fix 'addressBook.getContact is not a function' error
	- All specs are passing and address book should be able to add a contact

# Step 6
<!-- add a 'delete contact' spec feature -->
	- define a new spec with the 'it' method to delete a contact
	- represent addressBook and thisContact variables
	- add contact to addressbook so I can delete it. 

# Step 7
<!-- solve addressBook.deleteContact is not a function issue -->
	- write the deleteContact function using the splice method of an array to remove an element

# Step 8
<!-- remove redundant code -->
	- Learn about Jasmine's beforeEach function. 
		http://stackoverflow.com/questions/17317839/how-to-reuse-beforeeach-aftereach-in-jasmine-js
	- move the addressBook and thisContact variables up to the suite itself. Therefore, this makes both the variables global scope variables and makes them accessible through local scope variables. 

# Step 9
Testing asynchronous code. 
	- We're just going to fake our aynchronous functionality 
		- write a getInitialContacts function
		- use a setTimeout function to make an asynchronous test

# Step 10



<!-- p.s. make sure to do code cleanup from the following link: -->
	https://dirtymarkup.com/ 
























