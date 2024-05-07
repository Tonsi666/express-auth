const { StatusCodes } = require("http-status-codes");

function authMiddleWare(req, res, next) {
  // Middleware soll Access Token auslesen und die dekodierten Informationen an den jeweiligen Endpunkt weitergeben
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(StatusCodes.FORBIDDEN).send("No Token provided!");
  }
  try {
    const decodeAccessToken = AccessTokens.decodeAccessToken(token);
    req.user = decodeAccessToken;
  } catch (e) {
    return res
      .status(StatusCodes.FORBIDDEN)
      .send("Something is wrong with your token");
  }

  return next();
}

module.exports = authMiddleWare;
