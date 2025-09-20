const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getConnection, sql } = require("../config/db");

async function login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "username and password are required" });
    }

    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("Username", sql.NVarChar, email)
            .query("SELECT * FROM Users WHERE Username = @Username");

        if (result.recordset.length === 0) {
            return res.status(401).json({ message: "Invalid username or password1" });
        }

        const user = result.recordset[0];

        // check mật khẩu hash
        const match = await bcrypt.compare(password, user.PasswordHash);
        if (!match) {
            return res.status(401).json({ message: "Invalid username or password2" });
        }

        // if (password !== user.PasswordHash) {
        //     return res.status(401).json({ message: "Invalid username or password2" });
        // }

        // tạo JWT token
        const token = jwt.sign(
            { userId: user.Id, username: user.Username },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({ message: "Login successful", user, token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
}
module.exports = { login };
