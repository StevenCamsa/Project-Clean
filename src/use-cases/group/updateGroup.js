const{editGroup} = require('../../entity/group/index')

const updateGroup = ({ groupdb, citiesdb, countrydb }) => {
    return async function put({ group_id, ...info} = {}) {
        const result = editGroup(info);

        const {group_name, city_id, country_id } = info

        const exists = await groupdb.isExisting(group_name, city_id, country_id)
        .catch(e=>console.log(e))

        if(exists.rowCount > 0){
            throw new Error("Group already exists")
        }
        const cityExists = await citiesdb.isCitiesExisting(city_id)
        .catch(e=>console.log(e))

        if(cityExists.rowCount == 0){
            throw new Error("City does not exist")
        }

        const countryExist = await countrydb.isCountryExisting(country_id)
        .catch(e=>console.log(e))

        if(countryExist.rowCount == 0){
            throw new Error("Country does not exist")
        }

        const results = await groupdb.updateGroup({
            group_id: group_id,
            group_name: result.getGroupName(),
            city_id: result.getCityId(),
            country_id: result.getCountryId()  
        });
       
        if (results) {
            return {message: "Group Updated Successfully", results}
        } else {
            throw new Error("Group Not Updated")
        }
    };
};

module.exports = updateGroup;