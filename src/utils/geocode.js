const request = require('request')

const geocode = (address, callback) => {
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiaXNoaXRha3VuZGFsaXlhIiwiYSI6ImNrdDh4cGU4azE2c2gydnBkanE0dDUybjMifQ.OmPoNgNw0gI2lQqFVQx2-g&limit=1'

    request({url /*url: url*/ , json: true},(error, {body} /*response*/) =>{
        
        if(error){
            callback('unable to connect to location services', undefined)
        }        
        else if(body.features.length === 0){
            callback('unable to find location',undefined)
        }
        else{
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
        
        
    })
}

module.exports= geocode