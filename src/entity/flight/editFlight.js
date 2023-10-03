const updateFlightEntity = () => {
    return function make({
        airline_carrier,
        country_id,
        city_id


    } = {}) {
        if (!airline_carrier) {
            throw new Error("Please Enter a Airline Carrier.")
        }
        if (!country_id) {
            throw new Error("Please Enter a Country ID.")
        }
        if (!city_id) {
            throw new Error("Please Enter a City ID.")
        }


        return Object.freeze({
            getAirlineCarrier: () => airline_carrier,
            getCountryId: () => country_id,
            getCityId: () => city_id

        });
    };
};

module.exports = updateFlightEntity;