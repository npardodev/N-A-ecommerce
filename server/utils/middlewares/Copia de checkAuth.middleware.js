const { ADMIN } = require('../constants/auth.js');

const checkAuth = (req, res, next) => {

    //leeria el token
    const token = req.header("auth-token");
    if (!ADMIN)
        return res.status(400).send("Acceso denegado");
    try {
        //const verified = jwt.verify(token, process.env.jwtSecret);
        //req.user = verified;
        // SIGNIFICA que ADMIN == TRUE
        next();
    } catch (err) {
        res.status(400).send({
            error: "Autorizacion falla, error en token"
        });
    }
};

module.exports = checkAuth;