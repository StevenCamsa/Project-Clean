const {editCountry} = require('../../entity/country/index');

const updateCountry = ({ countrydb }) => {
    return async function put({ country_id, ...info } = {}) {
        const result = editCountry(info);

        const results = await countrydb.updateCountry({
            country_id: country_id,
            country_name:result.getCountryName(),  
        });
       
        if (results) {
            return {message: "Country Updated Successfully", results}
        } else {
            throw new Error("Country Not Updated")
        }
    };
};

module.exports = updateCountry;