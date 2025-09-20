const bcrypt = require("bcryptjs");
const { getConnection, sql } = require("../config/db");
const User = require("../models/User");
const { v4: uuidv4 } = require("uuid");

async function createUser(req, res) {
    const {
        username,
        password,
        fullName,
        address,
        dateOfBirth,
        cccd,
        email,
        phoneNumber,
        isAdmin,
        zoneCategoryCode
    } = req.body;

    if (!username || !password || !email) {
        return res.status(400).json({ message: "Username, password and email are required" });
    }

    try {
        const pool = await getConnection();

        // Check duplicate username
        const checkUser = await pool
            .request()
            .input("Username", sql.NVarChar, username)
            .query("SELECT 1 FROM Users WHERE UserName = @Username");

        if (checkUser.recordset.length > 0) {
            return res.status(400).json({ message: "Username already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        const newId = uuidv4();

        // Tạo object User
        const newUser = new User({
            id: newId,
            userName: username,
            fullName,
            address,
            dateOfBirth,
            cccd,
            email,
            phoneNumber,
            isAdmin,
            zoneCategoryCode,
            passwordHash: hashedPassword,
            normalizedUserName: username.toUpperCase(),
            normalizedEmail: email.toUpperCase()
        });

        console.log(`New user ID generated: ${newId}`);

        // Insert DB
        await pool.request()
            .input("Id", sql.UniqueIdentifier, newUser.id)
            .input("IsActive", sql.Bit, 1)
            .input("UserName", sql.NVarChar, newUser.userName)
            .input("FullName", sql.NVarChar, newUser.fullName)
            .input("Address", sql.NVarChar, newUser.address)
            .input("DateOfBirth", sql.Date, newUser.dateOfBirth)
            .input("CCCD", sql.NVarChar, newUser.cccd)
            .input("NormalizedUserName", sql.NVarChar, newUser.normalizedUserName)
            .input("Email", sql.NVarChar, newUser.email)
            .input("NormalizedEmail", sql.NVarChar, newUser.normalizedEmail)
            .input("EmailConfirmed", sql.Bit, newUser.emailConfirmed)
            .input("PasswordHash", sql.NVarChar, newUser.passwordHash)
            .input("SecurityStamp", sql.NVarChar, newUser.securityStamp)
            .input("ConcurrencyStamp", sql.NVarChar, newUser.concurrencyStamp)
            .input("PhoneNumber", sql.NVarChar, newUser.phoneNumber)
            .input("PhoneNumberConfirmed", sql.Bit, newUser.phoneNumberConfirmed)
            .input("TwoFactorEnabled", sql.Bit, newUser.twoFactorEnabled)
            .input("LockoutEnd", sql.DateTimeOffset, newUser.lockoutEnd || null)
            .input("LockoutEnabled", sql.Bit, newUser.lockoutEnabled)
            .input("AccessFailedCount", sql.Int, newUser.accessFailedCount)
            .input("ZoneCategoryCode", sql.NVarChar, newUser.zoneCategoryCode)
            .input("IsAdmin", sql.Bit, newUser.isAdmin)
            .input("CreatedAt", sql.DateTime, newUser.createdAt)
            .query(`
                INSERT INTO Users (
                    Id, IsActive, UserName, FullName, Address, DateOfBirth, CCCD,
                    NormalizedUserName, Email, NormalizedEmail, EmailConfirmed,
                    PasswordHash, SecurityStamp, ConcurrencyStamp, PhoneNumber,
                    PhoneNumberConfirmed, TwoFactorEnabled, LockoutEnd,
                    LockoutEnabled, AccessFailedCount, ZoneCategoryCode,
                    IsAdmin, CreatedAt
                )
                VALUES (
                    @Id, @IsActive, @UserName, @FullName, @Address, @DateOfBirth, @CCCD,
                    @NormalizedUserName, @Email, @NormalizedEmail, @EmailConfirmed,
                    @PasswordHash, @SecurityStamp, @ConcurrencyStamp, @PhoneNumber,
                    @PhoneNumberConfirmed, @TwoFactorEnabled, @LockoutEnd,
                    @LockoutEnabled, @AccessFailedCount, @ZoneCategoryCode,
                    @IsAdmin, @CreatedAt
                )
            `);

        res.status(201).json({ message: "User created successfully", userId: newId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
}

module.exports = { createUser };
