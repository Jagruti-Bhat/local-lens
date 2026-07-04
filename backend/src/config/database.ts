import { sequelize } from "./sequelize";

export async function connectDatabase() {
  try {
    await sequelize.authenticate();

    console.log("✅ Connected to PostgreSQL");
  } catch (error) {
    console.error("Database Connection Failed");

    console.error(error);

    process.exit(1);
  }
}
