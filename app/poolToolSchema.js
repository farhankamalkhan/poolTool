var mongoose = require('mongoose')

var poolTool = new mongoose.Schema({
  name: {
    type: String
  },

  team: {
    type: Number
  }
},

  {
    collection: 'poolTool'
  }
)

module.exports = mongoose.model('poolTool', poolTool);