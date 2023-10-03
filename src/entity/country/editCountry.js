const editCountryEntity = () => {
    return function make({
        country_name


    } = {}) {
        if (!country_name) {
            throw new Error("Please Enter a Country.")
        }


        return Object.freeze({
           getCountryName: () => country_name

 
        });
    };
};

module.exports = editCountryEntity;