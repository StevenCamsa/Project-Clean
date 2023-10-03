const {editCities} = require('../../entity/cities/index');

const updateCities = ({ citiesdb }) => {
    return async function put({ city_id, ...info } = {}) {
        const result = editCities(info);

        const results = await citiesdb.updateCities({
            city_id: city_id,
            city_name: result.getCityName(),
            country_id: result.getCountryId(),
            
        });
       
        if (results) {
            return {message: "City Updated Successfully", results}
        } else {
            throw new Error("City Not Updated")
        }
    };
};

module.exports = updateCities;