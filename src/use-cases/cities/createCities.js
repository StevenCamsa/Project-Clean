const {makeCities} = require('../../entity/cities/index');

const createCities = ({ citiesdb }) => {
    return async function create(cityInfo) {
        const city = makeCities(cityInfo);
      

        const {city_name} = cityInfo

        const exists = await citiesdb.isExisting(city_name)
        .catch(e=>console.log(e))
        

        if(exists.rowCount > 0){
            throw new Error("City already exists")
        }

        const result = await citiesdb.createCities({
            city_name: city.getCityName(),
            country_id: city.getCountryId(),
        })
        .catch(e => console.log(e));

        if (result) {
            return {message: "City Created Successfully", result}
        } else {
            throw new Error("City Not Created")
        }
    };
}

module.exports = createCities