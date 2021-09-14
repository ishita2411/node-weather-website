const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url='http://api.weatherstack.com/current?access_key=776b4e314bfd66200944aac0f467ec1e&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'&units=f'
    request({url /*url: url*/, json: true},(error, {body}/* response*/) =>{
        if(error){
            callback("can't connect", undefined)
        }
        else if(body.error){
            callback('unable to find location',undefined)
        }
        else{
            callback(undefined,{
                weather: body.current.weather_descriptions[0],
                location: body.location.name+','+ body.location.region + ', '+ body.location.country +'.'
            })
            
        }
    }) 
}

module.exports= forecast