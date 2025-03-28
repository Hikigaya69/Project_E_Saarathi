const mongoose = require('mongoose')
// ...existing code...
const blacklistedTokenSchema = new mongoose.Schema({
    token: {
      type: String,
      required: true,
      unique: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: 86400 // 24 hours in seconds
    }
  });
  
  const blacklistedTokenModel = mongoose.model('BlacklistedToken', blacklistedTokenSchema);
  module.exports=blacklistedTokenModel
  // ...existing code...