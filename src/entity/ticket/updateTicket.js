const updateTicketEntity = () => {
    return function edit({
        city_id,
        country_id,
        member_id,
        flight_id

    } = {}) {
        if (!city_id) {
            throw new Error("Please Enter City.")
        }
        if (!country_id) {
            throw new Error("Please Enter Country.")
        }
        if (!member_id) {
            throw new Error("Please Enter Member.")
        }
        if (!flight_id) {
            throw new Error("Please Enter Flight.")
        }

        return Object.freeze({
            getCityId: () => city_id,
            getCountryId: () => country_id,
            getMemberId: () => member_id,
            getFlightId: () => flight_id
        });
    };
};

module.exports = updateTicketEntity;