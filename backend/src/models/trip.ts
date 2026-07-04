import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";

import { sequelize } from "../config/sequelize";
import { Itinerary } from "../types/trip.types";

class Trip extends Model<InferAttributes<Trip>, InferCreationAttributes<Trip>> {
  declare id: CreationOptional<string>;

  declare destination: string;

  declare days: number;

  declare budget: number;

  declare interests: string[];

  declare itinerary: CreationOptional<Itinerary | null>;
}

Trip.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    destination: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    days: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    budget: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    interests: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false,
    },

    itinerary: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
  },
  {
    sequelize,

    tableName: "trips",

    timestamps: true,
  },
);

export default Trip;
