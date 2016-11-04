var Sequelize = require('sequelize');
var config = require('./config');

function TodoRepository() {
  var sequelize = new Sequelize('TodoDB', config.DB_USER, config.DB_PASSWORD, {
    host: config.DB_HOST,
    dialect: 'mariadb',

    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });

  var Todo = sequelize.define('todo', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    text: Sequelize.STRING,
    done: Sequelize.BOOLEAN
  }, {
    timestamps: false
  });

  Todo.sync().then(function() {
    console.log('DB Connection successful');
  }).catch(function(error){
    console.log('DB Connection unsuccessful', error);
  });

  var list = function(){
    return Todo.findAll();
  }

  function getById(id){
    return Todo.findById(id);
  }

  function create(todo){
    return Todo.create(todo);
  }

  function update(id, todo){
    return Todo.update(todo, {
      where: {
        id: id
      }
    });
  }

  function remove(id){
    return Todo.destroy({
      where: {
        id: id
      }
    });
  }

  return {
    list: list,
    getById: getById,
    create: create,
    update: update,
    remove: remove
  };
}

module.exports = TodoRepository();