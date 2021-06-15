const User = require('../models/User');

module.exports = {
 async store(req,res){
      const {email} = req.body; 
      
      console.log('user')
      let user = await User.findOne({ email });
      if (!user){
        user = await User.create({ email });

      }
 
     //const user = await User.create({email})
     return res.json(user);
}
};