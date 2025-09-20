const sql = require("mssql/msnodesqlv8");

const config = {
    server: process.env.DB_SERVER || "localhost",
    database: process.env.DB_NAME || "StudentManagement",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true,   // Windows Auth
        encrypt: false,
        trustServerCertificate: true,
    },
};

async function getConnection() {
    try {
        const pool = await sql.connect(config);
        console.log("✅ Connected to SQL Server (Windows Authentication)");
        return pool;
    } catch (err) {
        console.error("❌ Database connection failed:", err);
        throw err;
    }
}

module.exports = { sql, getConnection };
