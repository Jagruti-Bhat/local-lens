import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { connectDatabase } from "./config/database";
import { sequelize } from "./config/sequelize";
import "./models/trip";

const PORT = Number(process.env.PORT) || 5000;

async function startServer() {
  try {
    // Connect to PostgreSQL
    await connectDatabase();

    // Sync models
    await sequelize.sync({ alter: true });

    console.log("✅ Tables synchronized");

    // Start Express server
    const server = app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

    // Graceful shutdown
    const gracefulShutdown = async () => {
      console.log("\n🛑 Shutting down gracefully...");

      server.close(async () => {
        try {
          await sequelize.close();
          console.log("✅ Database connection closed");
        } catch (err) {
          console.error("Error closing database:", err);
        }

        process.exit(0);
      });
    };

    process.on("SIGINT", gracefulShutdown);
    process.on("SIGTERM", gracefulShutdown);

    server.on("error", (err: any) => {
      console.error("Server Error:", err);
      process.exit(1);
    });
  } catch (err) {
    console.error("❌ Failed to start server");
    console.error(err);
    process.exit(1);
  }
}

startServer();
