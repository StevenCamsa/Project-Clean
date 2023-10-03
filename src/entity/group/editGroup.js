const editGroupEntity = () => {
    return function make({
        group_name,
        country_id,
        city_id


    } = {}) {
        if (!group_name) {
            throw new Error("Please Enter a Group Name.")
        }
        if (!country_id) {
            throw new Error("Please Enter a Country.")
        }
        if (!city_id) {
            throw new Error("Please Enter a City.")
        }



        return Object.freeze({
              getGroupName: () => group_name,
              getCountryId: () => country_id,
              getCityId: () => city_id
 
        });
    };
};

module.exports = editGroupEntity;