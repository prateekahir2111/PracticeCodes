'use strict';

module.exports = function (app) {
    var controller = require('../controllers/core.server.controller.js');
    var mainController = require('../controllers/main.server.controller.js');
    var hrAuth = require('../controllers/hr.server.controller');
    var bankLoginController = require('../controllers/bank.server.controller');
    var accountController = require('../controllers/account.server.controller');
    var accordian = require('../controllers/accordian.server.controller');
    app
        .route('/')
        .get(mainController.index);
    app
        .route('/api/contact')
        .get(controller.getContacts)
        .post(controller.createContact);

    app
        .route('/api/contact/:id')
        .put(controller.updateContact)
        .get(controller.getContactById)
        .delete(controller.deleteContact);

    app.param('id', controller.validateContactId);
    
    app
        .route('/api/contact/login/:username/:password')
        .get(hrAuth.getCredentials);

    app
        .route('/api/story')
        .get(accordian.getStory)


    app
        .route('/api/contact/banklogin/:emailId/:password')
        .get(bankLoginController.logIn);

    app
        .route('/api/contact/banklogincreate')
        .post(bankLoginController.SignUp);

    app
        .route('/api/contact/bankaccounts/:emailIdsender/:emailIdreceiver/:transferAmount')
        .get(accountController.verifyAcc);


}