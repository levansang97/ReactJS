// src/models/User.js
export default class User {
    constructor({
        id,
        userName,
        fullName,
        address,
        dateOfBirth,
        cccd,
        email,
        phoneNumber,
        isAdmin,
        zoneCategoryCode,
        passwordHash,
        normalizedUserName,
        normalizedEmail,
        emailConfirmed,
        securityStamp,
        concurrencyStamp,
        phoneNumberConfirmed,
        twoFactorEnabled,
        lockoutEnd,
        lockoutEnabled,
        accessFailedCount,
        createdAt,
    } = {}) {
        this.id = id || null;
        this.userName = userName || "";
        this.fullName = fullName || "";
        this.address = address || "";
        this.dateOfBirth = dateOfBirth || null;
        this.cccd = cccd || "";
        this.email = email || "";
        this.phoneNumber = phoneNumber || "";
        this.isAdmin = isAdmin ?? 0;
        this.zoneCategoryCode = zoneCategoryCode || "";
        this.passwordHash = passwordHash || "";

        this.normalizedUserName = normalizedUserName || (userName ? userName.toUpperCase() : "");
        this.normalizedEmail = normalizedEmail || (email ? email.toUpperCase() : "");
        this.emailConfirmed = emailConfirmed ?? 0;
        this.securityStamp = securityStamp || "";
        this.concurrencyStamp = concurrencyStamp || "";
        this.phoneNumberConfirmed = phoneNumberConfirmed ?? 0;
        this.twoFactorEnabled = twoFactorEnabled ?? 0;
        this.lockoutEnd = lockoutEnd || null;
        this.lockoutEnabled = lockoutEnabled ?? 0;
        this.accessFailedCount = accessFailedCount ?? 0;
        this.createdAt = createdAt || new Date();
    }
}
