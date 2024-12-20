import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

async function main() {
  await mongoose.connect(config.database as string);

  app.listen(config.port, () => {
    console.log(`car project app listening on port ${config.port}`);
  });
}

main();
