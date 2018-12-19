'use strict';
module.exports = (sequelize, DataTypes) => {
  const CUSTOMER_HOTEL_RATE = sequelize.define('CUSTOMER_HOTEL_RATE', {
    customer_username: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    hotel_name: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    hotel_location: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    rate: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {});
  CUSTOMER_HOTEL_RATE.associate = function (models) {
    CUSTOMER_HOTEL_RATE.belongsTo(models.CUSTOMER, {
      as: 'customer_username_foreignkey',
      foreignKey: 'customer_username',
      onDelete: 'cascade'
    });
    var sql = "ALTER TABLE customer_hotel_rates "+
    "ADD FOREIGN KEY (hotel_name) REFERENCES hotels(hotel_name),"+
    "ADD FOREIGN KEY (hotel_location) REFERENCES hotels(hotel_location),"+
    "ADD FOREIGN KEY (customer_username) REFERENCES customers(customer_username)";
   // sequelize.query(sql);
    // CUSTOMER_HOTEL_RATE.belongsTo(models.HOTEL, {
    //   as:'hotel_name_foreignkey',
    //   foreignKey: 'hotel_name',
    //   onDelete: 'cascade'
    // });
    // CUSTOMER_HOTEL_RATE.belongsTo(models.HOTEL, {
    //   as:'hotel_location_foreignkey',
    //   foreignKey: 'hotel_location',
    //   onDelete: 'cascade'
    // });
    // associations can be defined here
  };
  return CUSTOMER_HOTEL_RATE;
};