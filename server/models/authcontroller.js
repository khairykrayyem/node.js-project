const User = require('../models/userModel'); 

const loginUser = async (req, res) => {
    const { username, email } = req.body;

    try {
        const user = await User.findOne({ name: username, email: email });

        if (!user) {
            return res.status(401).json({ message: 'שם משתמש או דוא"ל שגויים' });
        }

        

        res.status(200).json({ message: 'התחברות הצליחה', userId: user.id /*, token */ });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'אירעה שגיאה' });
    }
};

module.exports = { loginUser };
