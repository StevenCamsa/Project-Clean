const editCitiesEntity = () => {
    return function edit({
        city_name,
        country_id,

    } = {}) {
        if (!city_name) {
            throw new Error("Please Enter City.")
        }
        if (!country_id) {
            throw new Error("Please Enter Country.")
        }

        return Object.freeze({
           getCityName: () => city_name,
           getCountryId: () => country_id,

        });
    };
};

module.exports = editCitiesEntity;