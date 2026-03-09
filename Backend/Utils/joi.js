const joi = require("joi");

const userSchema = joi.object({
    firstName:joi.string().min(3).max(100).required(),
    surName:joi.string().min(3).max(100).required(),
    lastName:joi.string().min(3).max(100).required(),
    email:joi.string().email().required(),
    password:joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
})

module.exports = userSchema;