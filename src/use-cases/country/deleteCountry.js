const deleteCountry = ({ countrydb }) => {
    return async function patch({ country_id } = {}) {
        const results = await countrydb.deleteCountry(country_id)
        .catch(e => console.log("error", e));
       
        if (results) {
            return {message: "Country Deleted Successfully", results}
        } else {
            throw new Error("Country not deleted")
        }
    };
};

module.exports = deleteCountry;