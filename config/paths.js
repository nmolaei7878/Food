const path = require("path");

module.exports = {
  PORT: process.env.PORT || 4000,
  PATHS: {
    ROOT_DIR: path.join(process.cwd(), "./"),
    APP_DIR: path.join(process.cwd(), "src/"),
    BUILD_DIR: path.join(process.cwd(), "dist", "."),
    OUTPUT_DIR: path.join(process.cwd(), "dist"),
  },
};
