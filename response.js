const response = (statusCode, data, message, res) =>{
    res.status(statusCode).json( {
        payload: {
            status_code: statusCode,
            datas: data,
           
        },
        message: message,
        pagination:{
            prev:"sangat bagus",
            next:"berhasil mendapatkan data",
            max:"10"
        }
    })
}

module.exports = response;