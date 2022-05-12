//Contenir la logique métier 
const fonctions = require('../users/functions');


// exports.getThing = (req, res) => {
//     res.json([
//         {titre: "Votre requete a été bien reçue",
//          note: "10"   
//         },
//         {titre: "Votre requete a été bien reçue2",
//          note: "11"   
//         }
//     ]);
    
// }

exports.addUser = (req, res, next) => {
    fonctions.addUser(req.body);
    res.json(req.body);
}

exports.updateUser = (req, res, next) => {
    fonctions.updateUser(req.body);
}

exports.getUsers = () => {
    fonctions.getUsers;
}

exports.deleteUser = (req, res, next) => {
    fonctions.deleteUser(req.body.id);
}