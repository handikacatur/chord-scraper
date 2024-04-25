import yamlConfig from 'node-yaml-config';
import startScrap from './scraper/index.js';
import { Sequelize } from 'sequelize';
import initModels from './model/init-models.js';

function getConfig() {
  return yamlConfig.load('./.config.yaml')
}
const config = getConfig();

// Init DB
const DBUsername = config['database']['username']
const DBPassword = config['database']['password']
const DBHost = config['database']['host']
const DBPort = config['database']['port']
const DBName = config['database']['db-name']
const sqlOption = {
  define: {
    define: {
      underscored: true,
      freezeTableName: true
    },
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
    },
    logging: (msg) => {
      console.log(msg);
    },
    timezone: process.env.TZ || 'Asia/Jakarta',
  }
}
const sequelize = new Sequelize(`postgres://${DBUsername}:${DBPassword}@${DBHost}:${DBPort}/${DBName}`, sqlOption)

initModels(sequelize)

startScrap(config);