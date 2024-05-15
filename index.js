import yamlConfig from 'node-yaml-config';
import startScrap from './scraper/index.js';
import { Sequelize } from 'sequelize';
import initModels from './model/init-models.js';
import axios from 'axios';
import chord from './model/chord.js';

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

const {artistName, songChords} = await startScrap(config)

const client = axios.create({
  baseURL: config['chordhub-api']['base-url'],
  timeout: 30 * 1000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})


async function uploadChord(artistName, songChords, client) {
  const artist = await client.post('/artist', {
    name: artistName
  }).then(response => response.data)

  songChords.forEach(async chord => {
    await client.post('/chord', {
      title: chord.title,
      slug: chord.slug,
      chord: chord.chord,
      artist_id: artist.artist.id
    })
  });

  console.log("\nChord succesfully uploaded!");
}

uploadChord(artistName, songChords, client)