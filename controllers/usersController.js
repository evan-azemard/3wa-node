import User from '../models/User.js';

//Récupérer tout les utilisateurs
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (!users.length) {
            return res.json({ message: "Users not found" });
        }
        return res.json(users);
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" })
    }
}

//Créer un nouvelle utilisateur
export const createUser = async (req, res) => {
    const { email, username, lastname, password } = req.body;
    try {
        const newUser =  new User({
            email,
            username,
            lastname,
            password
        });

        newUser.save();
        return res.status(201).json({ message: 'User has been created' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

//Récupérer un utilisateur pas son ID
export const getUserById = async (req, res) => {
    return res.status(200).json(req.user)
}

//Mettre à jour un utilisateur par son ID
export const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.update, { new: true });
        if (!updatedUser) return res.status(404).json({ error: "User not found" });

        return res.json({ message: 'User updated successfully', updatedUser });

    } catch (error) {
        return res.status(500).json({ message: error.message  })
    }
}

//Supprimer un utilisateur par son ID
export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
            
        await Message.deleteMany({ user_id: id });
        
        const userResult = await User.deleteOne({ _id: id });

        if (userResult.deletedCount === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(203).json({ message: 'User has been deleted' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' })
    }
}
