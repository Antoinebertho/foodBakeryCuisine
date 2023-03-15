//Importe le module http-status-codes qui fournit une liste de codes d'état HTTP.
const httpStatus = require("http-status-codes");

//Exporte un objet qui contient les trois fonctions middleware suivantes.
module.exports = {
    /*La première fonction middleware est appelée logErrors et prend quatre paramètres. Si une erreur se produit dans une requête, cette fonction affiche l'erreur dans la console et appelle la fonction middleware suivante. */
  logErrors: (error, req, res, next) => {
    /*Affiche l'erreur dans la console en utilisant la méthode error de l'objet console.
    next(error);: Appelle la fonction middleware suivante en transmettant l'objet erreur. */
    console.error(error.stack);
    next(error);
  },
  /*La deuxième fonction middleware est appelée pageNotFoundError et prend deux paramètres. Si une demande est effectuée pour une page qui n'existe pas, cette fonction renvoie une erreur 404 (Page non trouvée) et affiche un message d'erreur.*/
  pageNotFoundError: (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.render("error");
  },
  /*La troisième fonction middleware est appelée internalServerError et prend quatre paramètres. Si une erreur se produit dans l'application, cette fonction affiche l'erreur dans la console, renvoie une erreur 500 (Erreur interne du serveur) et affiche un message d'erreur. */
  internalServerError: (error, req, res, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log(`ERROR occurred: ${error.stack}`);
    res.status(errorCode);
    res.send(`${errorCode} | Sorry, our application is experiencing a problem!`);
  }
};