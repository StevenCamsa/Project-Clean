const deleteFlight = ({ flightdb }) => {
    return async function patch({ flight_id } = {}) {
        const results = await flightdb.deleteFlight(flight_id)
        .catch(e => console.log("error", e));
       
        if (results) {
            return {message: "Flight Deleted Successfully", results}
        } else {
            throw new Error("FLight not deleted")
        }
    };
};

module.exports = deleteFlight;