const {makeFlight} = require('../../entity/flight/index')

const createFlight = ({ flightdb }) => {
    return async function create(flightInfo) {
        const flight = makeFlight(flightInfo);

        const {flight_number} = flightInfo

        const flightNumber = generateFlightNumber()

        const exists = await flightdb.isExisting(flight_number)
        .catch(e=>console.log(e))
        
        if(exists.rowCount > 0){
            throw new Error("flight number already Exist")
        }

        const result = await flightdb.createFlight({
            flight_number: flightNumber,
            airline_carrier: flight.getAirlineCarrier(),
            country_id: flight.getCountryId(),
            city_id: flight.getCityId()
        })
        .catch(e => console.log(e));

        if (result) {
            return {message: "Flight Created Successfully", result}
        } else {
            throw new Error("Flight Not Created")
        }
    };
}

function generateFlightNumber() {
    const airlineCodes =  ['DL', 'AA', 'UA', 'LH', 'AF', 'BA']

    const randomAIRLINE = Math.floor(Math.random() * airlineCodes.length)
    const airlineCode = airlineCodes[randomAIRLINE]
    
    const minFlightNumber = 100
    const maxFlightNumber = 999
    const flightNumber = Math.floor(Math.random() * (maxFlightNumber - minFlightNumber + 1)) + minFlightNumber

    return `${airlineCode}-${flightNumber}`
}
module.exports = createFlight