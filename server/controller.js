module.exports = {
    getHouses: (request, response, next) => {
        const dbInstance = request.app.get('db')
        
        dbInstance.get_inventory().then(
            inventory => {response.status(200).send(inventory)
                console.log(inventory)}
        )
    },

    addHouse: (request, response, next) => {
       console.log('does this even work')
        const dbInstance = request.app.get('db')
        const {name, address, city, state, zipCode} = request.body
        
        dbInstance.create_inventory([name, address, city, state, +zipCode]).then( (inventory )=>
            response.status(200).send(inventory)
        ).catch(error => console.log('help', error))
    },

    deleteHouse: (request, response, next) => {
        const dbInstance = request.app.get('db')
    }
}