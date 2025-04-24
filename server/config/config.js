module.exports = {
  development: {
    username: 'root',
    password: 'password',
    database: 'traffic_db',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: 'password',
    database: 'traffic_db_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: 'password',
    database: 'traffic_db_prod',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
