const calaisRequester = (httpRequester, config) => {
    return {
        getTextInfo: (text) => {    
            return httpRequester.request({
                url: config.url,
                headers: {
                    'x-ag-access-token': config.accessToken,
                    'content-type': config.contentType,
                    'outputFormat': config.outputFormat,
                },
                method: 'POST',
                data: text
            });
        },
    };
};

module.exports = calaisRequester;