const getCities = ({ citiesdb }) => {
    return async function get(){
        return await citiesdb.getCities();
    };
    
};

module.exports = getCities;