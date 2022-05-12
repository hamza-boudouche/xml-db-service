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

exports.addUser = async (req, res, next) => {
    await fonctions.addUser(req.body);
    res.json(req.body);
}

exports.updateUser = async (req, res, next) => {
    await fonctions.updateUser(req.body);
    res.json(req.body);
}

exports.getUsers = async (req, res) => {
    const users = await fonctions.getUsers();
    res.json(users)
}

exports.deleteUser = async (req, res, next) => {
    await fonctions.deleteUser(req.body.id);
    res.json({ id: req.body.id })
}