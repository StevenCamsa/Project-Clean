const getFlight = ({ flightdb }) => {
    return async function get(){
        return await flightdb.getFlight();
    };
    
};

module.exports = getFlight;