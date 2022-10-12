// module.exports = Post;
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create pur Post model
class  Post extends Model {}

// create fields/colums for Post model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryLey: true,
      autoIncrement: truncate
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
},
{
  sequelize,
  freezeTablename: true,
  underscored: true,
  modelName: 'post'
}
);

module.exports = Post;