const mongoose = require('mongoose');
const bcrypt =require('bcrypt');
 
const UserSchema = new mongoose.Schema({
        name:{
            type: String,
            required:true
        },
        email:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true,
            minLength: 8
                    
        }
});

UserSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
});
                               
module.exports = mongoose.model('User', UserSchema);
                                   