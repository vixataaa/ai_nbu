module.exports = ({ textData }) => {
    return {
        homePage(req, res) {
            return res.render('index');
        },

        getTextInfo(req, res) {
            const getReccomendedItemsOnly = false;

            return textData.getTextInfo(req.body.text, !getReccomendedItemsOnly)
                .then((textInfo) => {
                    return res.render('index', {
                        context: {
                            textInfo,
                            text: req.body.text,
                        },
                    });
                })
                .catch((err) => {
                    return textData.getTextInfo(req.body.text, getReccomendedItemsOnly)
                        .then((textInfo) => {
                            return res.render('index', {
                                context: {
                                    textInfo,
                                    text: req.body.text,
                                },
                            });
                        });
                });
        },
    };
};
