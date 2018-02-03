module.exports = (calaisRequester) => {
    const getForEndUserDisplayItems = (data) => {
        const result = {};

        for (let key in data) {
            if (data[key].forenduserdisplay == 'true') {
                result[key] = data[key];
            }
        }

        return result;
    };

    const getTopics = (data) => {
        const result = [];

        for (let key in data) {
            const currentItem = data[key];
            
            if (currentItem._typeGroup == 'topics') {
                result.push({
                    name: currentItem.name,
                    score: currentItem.score,
                });
            }
        }

        return result;
    };

    const getSocialTags = (data) => {
        const result = [];

        for (let key in data) {
            const currentItem = data[key];
            
            if (currentItem._typeGroup == 'socialTag') {
                result.push({
                    name: currentItem.name,
                    importance: currentItem.importance,
                });
            }
        }

        return result;

    };

    const getIndustryTags = (data) => {
        const result = [];

        for (let key in data) {
            const currentItem = data[key];
            
            if (currentItem._typeGroup == 'industry') {
                result.push({
                    name: currentItem.name,
                    relevance: currentItem.relevance,
                });
            }
        }

        return result;

    };

    const getProcessedData = (calaisData) => {
        // const reccomendedItems = getForEndUserDisplayItems(calaisData);
        const reccomendedItems = calaisData;

        const topics = getTopics(reccomendedItems);
        const socialTags = getSocialTags(reccomendedItems);
        const industryTags = getIndustryTags(reccomendedItems);

        return {
            topics,
            socialTags,
            industryTags,
        };
    };

    return {
        getTextInfo(text) {
            return calaisRequester.getTextInfo(text)
                .then((response) => {
                    const responseData = response.data;                    
                    const endUserData = getProcessedData(responseData);

                    return Promise.resolve(endUserData);
                })
                .catch((err) => {
                    return Promise.reject();
                });
        },
    };
};
