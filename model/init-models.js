import { DataTypes } from "sequelize";
import _Chord from "./chord.js";
import _Artist from "./artist.js";

export default function initModels(sequelize) {
  const Chord = _Chord(sequelize, DataTypes);
  const Artist = _Artist(sequelize, DataTypes);

  Artist.hasMany(Chord, {as: 'chords', foreignKey: 'artist_id'});

  return {
    Chord,
    Artist
  }
}