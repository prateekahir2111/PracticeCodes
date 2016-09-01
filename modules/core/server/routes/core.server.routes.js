'use strict';

module.exports = function(app){

        var controller = require('../controllers/core.server.controller');

    // Contact collection and creation
    app
        .route('/api/contact')
            .get(controller.getContacts)
            .post(controller.createContact);

    // Update and delete operations
    app
        .route('/api/contact/:contactId')
        .put(controller.updateContact);

    app.param ('contactId', controller.validateContactIdAndForward)
}