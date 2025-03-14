import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const authController = express.Router();

// Login route (AUTHENTICATION)
authController.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find user by username
        const user = await userModel.findOne({
            where: { username }
        });

        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        // Check if password matches
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: 'Invalid credentials'
            });
        }

        // Create a JWT token
        const token = jwt.sign(
            { userId: user.id, username: user.username },
            'your_jwt_secret', // Use an environment variable here for better security
            { expiresIn: '1h' } // Expiry time
        );

        // Return token in response
        res.json({
            message: 'Login successful',
            token
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error occurred during login',
            error: error.message
        });
    }
});
