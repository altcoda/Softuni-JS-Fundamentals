const phonebook = require('../phonebook');

module.exports = {
  index(req, res) {
    let contacts = phonebook.getContacts();
    res.render('index', { contacts });
  },
  addPhonebookPost(req, res) {
    phonebook.addContact(req.body.name, req.body.number);
    res.redirect('/');
  }
}