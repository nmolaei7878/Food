const path = require("path");

module.exports = {
  IS_PROD: process.env.NODE_ENV === "production",
  IS_DEBUG_MODE: process.env.DEBUG_MODE === "true",
  PORT: process.env.PORT || 4000,
  PATHS: {
    PUBLIC_DIR: process.env.PUBLIC_URL,
    ROOT_DIR: path.join(process.cwd(), "./"),
    APP_DIR: path.join(process.cwd(), "src/"),
    BUILD_DIR: path.join(process.cwd(), "dist", "."),
    OUTPUT_DIR: path.join(process.cwd(), "dist"),
  },
};
