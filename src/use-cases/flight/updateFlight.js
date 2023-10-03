const{editFlight} = require("../../entity/flight/index");

const updateFlight = ({ flightdb }) => {
    return async function put({ flight_id, ...info } = {}) {
        const result = editFlight(info);

        const results = await flightdb.updateFlight({
            flight_id: flight_id,
            airline_carrier: result.getAirlineCarrier(),
            country_id: result.getCountryId(),
            city_id: result.getCityId()
        })
        
        if (results) {
            return {message: "Flight Updated Successfully", results}
        } else {
            throw new Error("Flight Not Updated")
        }
    };
};

module.exports = updateFlight;