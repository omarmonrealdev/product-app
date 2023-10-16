const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const { findById } = require('../services/user');

passport.use(
  new Strategy({
    secretOrKey: process.env.JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  }, 
  async function (payload, done) {
    const user = await findById(payload.id);

    if (!user) {
      return done({message: 'El usuario no existe en la base de datos'});
    }
      
    done(null, user); //se crea el request.user (el usuario que inicio sesion)
  })
);

module.exports = passport.authenticate('jwt', { session: false });

//llevamos este middleware a las rutas que queremos proteger (routers)