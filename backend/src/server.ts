import dotenv from "dotenv";

dotenv.config();

import app from "./app";
import { connectDatabase } from "./config/database";
import { sequelize } from "./config/sequelize";
import "./models/trip";

const PORT = process.env.PORT || 3001;

async function startServer() {
  await connectDatabase();

  await sequelize.sync({ alter: true });

  console.log("Tables synchronized");

  const server = app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });

  const gracefulShutdown = async () => {
    console.log("\nShutting down gracefully...");
    server.close(async () => {
      await sequelize.close();
      process.exit(0);
    });
  };

  process.on("SIGTERM", gracefulShutdown);
  process.on("SIGINT", gracefulShutdown);

  server.on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.error(`Port ${PORT} is already in use. Retrying in 2 seconds...`);
      setTimeout(() => {
        server.close();
        startServer();
      }, 2000);
    }
  });
}

startServer();
