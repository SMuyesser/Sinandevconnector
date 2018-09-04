const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose =require('mongoose');
const User = mongoose.model('users');
const keys = require('../config/keys');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
	passport.use(
		new JwtStrategy(opts, (jwt_payload, done) => {
		User.findById(jwt_payload.id)
			.then(user => {
				if(user) {
					return done(null, user); // if user if found there is no error so null and return user
				}
				return done(null, false); //if user is not found still no error so null and return false
			})
			.catch(err => console.log(err));
	}));
};