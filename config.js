var config = {
  DB_HOST: process.env.DB_HOST,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_PORT: process.env.DB_PORT || 3306,
  DB_USER: process.env.DB_USER,
  DB_NAME: process.env.DB_NAME
};

module.exports = config;
