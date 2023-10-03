const deleteCities = ({ citiesdb }) => {
    return async function patch({ city_id } = {}) {
        const results = await citiesdb.deleteCities(city_id)
        .catch(e => console.log("error", e));
       
        if (results) {
            return {message: "City Deleted Successfully", results}
        } else {
            throw new Error("City not deleted")
        }
    };
};

module.exports = deleteCities;