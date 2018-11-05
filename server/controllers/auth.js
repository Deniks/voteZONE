function requiredLogin(req, res, next) {
  console.log(req.session.passport.user);
  if (req.session && req.session.passport.user) return next()
  else {
    res.redirect('/users/log-in')
    let err = new Error('You must be logged in to view this page.');
    alert(err);
    err.status = 401;
    return next(err);
  }
}
module.exports = requiredLogin;