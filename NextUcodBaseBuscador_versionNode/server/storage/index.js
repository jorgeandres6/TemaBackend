var fs = require ('fs'),
    path = require ('path')

module.exports{
  consultar: function(){
    var dataPath = __dirname + path.join('data.json')
    return new promise (resolve, reject){
      fs.readFile(dataPath, 'utf8', function(err, readData){
        if(err) reject(err)
        resolve(JSON.parse(readData))
      })
    }
  }
}
