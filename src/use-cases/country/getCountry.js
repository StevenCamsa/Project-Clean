const getCountry = ({ countrydb }) => {
    return async function get(){
        return await countrydb.getCountry();
    };
    
};

module.exports = getCountry;