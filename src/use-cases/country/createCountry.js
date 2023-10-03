const {makeCountry} = require('../../entity/country/index');

const createCountry = ({ countrydb }) => {
    return async function create(countryinfo) {
        const country = makeCountry(countryinfo);

        const {country_name} = countryinfo

        const exists = await countrydb.isExisting(country_name)
        .catch(e=>console.log(e))

        if(exists.rowCount > 0){
            throw new Error("Country already exists")
        }

        const result = await countrydb.createCountry({
            country_name: country.getCountryName(),

        })
        .catch(e => console.log(e));

        if (result) {
            return {message: "Country Created Successfully", result}
        } else {
            throw new Error("Country Not Created")
        }
    };
}

module.exports = createCountry