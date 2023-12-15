// controllers/userController.js

//const User = require(''); // Assurez-vous d'importer votre modèle d'utilisateur

const signup = async (userData) => {
  try {
    // Votre logique pour valider et créer l'utilisateur
    const user = new User({
      nom_joueur: userData.username, // Assurez-vous que votre modèle correspond à ces propriétés
      // Autres propriétés de l'utilisateur...
    });

    // Enregistrez l'utilisateur dans la base de données
    const savedUser = await user.save();

    // Retournez le résultat, par exemple, l'ID de l'utilisateur créé
    return { success: true, userId: savedUser.id, message: 'Inscription réussie' };
  } catch (error) {
    console.error('Erreur lors de l\'inscription dans le contrôleur :', error);
    throw new Error('Erreur lors de l\'inscription');
  }
};

module.exports = {
  signup,
  // Ajoutez d'autres fonctions liées aux utilisateurs si nécessaire
};
