module.exports = ({ app, express, controllers }) => {
    const router = new express.Router();
    const { textController } = controllers;

    router
        .get('/', textController.homePage)
        .post('/', textController.getTextInfo);

    app.use('/', router);
};
