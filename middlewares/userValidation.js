import User from '../models/User.js'

export const userCreation = (req, res, next) => {
    const { email, username, lastname, password } = req.body;
    if (!email || !username || !lastname || !password) {
        return res.json({ message: "All field required" });
    }
    next();
}

export const emailVerification = async (req, res, next) => {
    const { email } = req.body;
    const searchUserByEmail = await User.findOne({ email: email });
    if (searchUserByEmail) {
        return res.status(400).json({ message: 'Email already taken' })
    }
    next();

}

export const userExists = async (req, res, next) => {
    const id = req.params.id || req.body.id;
    
    if (!id) {
        return res.status(400).json({ message: 'User ID is required' });
    }
    try {
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const userUpdateVerification = async (req, res, next) => {
    const { email, username, lastname, password } = req.body;
    const update = {};

    if (email) update.email = email;
    if (username) update.username = username;
    if (lastname) update.lastname = lastname;
    if (password) update.password = password;

    req.update = update;
    next();

};
