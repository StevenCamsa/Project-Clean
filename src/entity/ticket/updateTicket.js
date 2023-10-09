const updateTicketEntity = () => {
    return function edit({
        city_id,
        country_id,
        user_id,
        flight_id

    } = {}) {
        if (!city_id) {
            throw new Error("Please Enter City.")
        }
        if (!country_id) {
            throw new Error("Please Enter Country.")
        }
        if (!user_id) {
            throw new Error("Please Enter User.")
        }
        if (!flight_id) {
            throw new Error("Please Enter Flight.")
        }

        return Object.freeze({
            getCityId: () => city_id,
            getCountryId: () => country_id,
            getUserId: () => user_id,
            getFlightId: () => flight_id
        });
    };
};

module.exports = updateTicketEntity;