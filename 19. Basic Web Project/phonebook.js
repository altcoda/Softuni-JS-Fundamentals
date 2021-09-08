/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/

const Contact = require('./models/Contact');

let contacts = [
	new Contact('Peter', '+359555-134-255'),
	new Contact('Maria', '+359837-653-750'),
	new Contact('John', '+359674-893-256'),
	new Contact('Mary', '+359568-733-005'),
	new Contact('David', '+359577-222-146')
];

let getContacts = () => contacts

let addContact = (name, phone) => {
	let contact = new Contact(name, phone);
	contacts.push(contact)
}

module.exports = { getContacts, addContact };