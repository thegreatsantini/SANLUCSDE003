require('dotenv').config();
var passport = require('passport');
var Strategy = require('passport-goodreads').Strategy;

passport.use(new Strategy({
    consumerKey: process.env.GOODREADS_API_KEY,
    consumerSecret: process.env.GOODREAD_API_SECRET,
    includeEmail: false,
    callbackURL: process.env.BASE_URL + '/auth/return'
},
    function (accessToken, tokenSecret, profile, done) {
        // console.log('profile:\n', profile) 
        done(null, profile)
    }
));

// Configure Passport authenticated session persistence.
// In order to restore authentication state across HTTP requests, Passport needs to serialize users into and deserialize users out of the session. this is as simple as supplying the user ID when serializing, and querying the user record by ID from the database when deserializing.
passport.serializeUser(function (user, done) {
    // console.log('######## serializing user:\n', user);
    done(null, user);
});

passport.deserializeUser(function (id, done) {
    // console.log('####### deserializing user!');
    // db.User.findById(id, function (err, user) {
    //     // console.log('deserialize callback func:', err, user);
    //     if (err) {
    //         // console.log('########## error deserializing user:\n', err);
    //         done(err, null);
    //     }
        // console.log('######## Success deserialize:\n', user);
        console.log(id)
        done(null, user);
    // });
});



module.exports = passport;