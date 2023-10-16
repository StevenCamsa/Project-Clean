const {makeGroup} = require('../../entity/group/index');

const createGroup = ({ groupdb, citiesdb, countrydb }) => {
    return async function create(groupInfo) {
        const group = makeGroup(groupInfo);

        const {group_name, city_id, country_id } = groupInfo

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

       
        const result = await groupdb.createGroup({
            group_name: group.getGroupName(),
            city_id: group.getCityId(),
            country_id: group.getCountryId()

        })
        .catch(e => console.log(e));

        if (result) {
            return {message: "Group Created Successfully", result}
        } else {
            throw new Error("Group Not Created")
        }
    };
}

module.exports = createGroup