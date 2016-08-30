const path = require('path')
const fs = require('fs')

const logError = err => err && console.log(err)

exports.save = (picturesPath, contents) => {
  // removes header to save to file
  const base64Data = contents.replace(/^data:image\/png;base64,/, '')
  fs.writeFile(path.join(picturesPath, `${new Date()}.png`), base64Data, { encoding: 'base64'}, logError)
}

exports.getPicturesDir = app => {
  return path.join(app.getPath('pictures'), 'photobombth')
}

exports.mkdir = picturesPath => {
  fs.stat(picturesPath, (err, stats) => {
    if(err && err.code !== 'ENOENT')
      return logError(err)
    else if (err || !stats.isDirectory())
      fs.mkdir(picturesPath, logError)
  })
}
