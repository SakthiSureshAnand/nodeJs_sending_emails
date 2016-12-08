var models = require("../models");
var sequelize = models.sequelize;
var PropertiesReader = require('properties-reader');
var sqlQuery = PropertiesReader(__dirname+'/../sql_queries/TestActivities_SQL.properties');
module.exports.create_TestNoun = function(TestNoun,callback) {
  console.log('inside the dao layer before sequelize')
  var create_query = sqlQuery._properties.create_TestNoun;
  sequelize.query(create_query, {
    replacements: {
    	persona : TestNoun.persona,
    	personb : TestNoun.personb,
    	created_by : 0,
    	updated_by : 0
    },
    type : sequelize.QueryTypes.INSERT,
    model: models.TestNoun
  }).then(function(testnoun) {
    console.log('Inside then method in sequelize');
		callback(testnoun);
	});
};

// get the data getall test noun
module.exports.getall_testnoun = function(cntrlServce){
  //select * from TestNoun
  var getAlltesnoun = "SELECT * FROM geppetto.new_users where processed = 'requested'";
  //var getAlltesnoun =  "SELECT * FROM nodedebugproj.testnoun where notAllocate like 'f'";
  sequelize.query(getAlltesnoun,{
    type : sequelize.QueryTypes.SELECT,
    model: models.TestNoun
  }).then(function(getallteN){
    console.log('getallteN data =>',getallteN);
    cntrlServce(getallteN);
  });
};


// update the f to t coding 
module.exports.updateAll_testNoun_colmn = function(data,cnteServ){
  console.log('update the f to t',JSON.stringify(data));
  var dataLength = JSON.stringify(data);
  // array of "f" data length
  console.log('length of data =>',data.length);
   var update_query = sqlQuery._properties.update_TestNoun;
   // upadte the false in to trur in to the same table below 
   // for loop execute it ,,,,,
  for(var i=0;i<data.length;i++){
        console.log('for first iteration ',i);
        //data[i].dataValues.processed
        var notAllocateD = data[i].dataValues.processed;
        if(notAllocateD === "requested"){
        console.log('notAllocate data =>',notAllocateD);
        var idD = data[i].dataValues.id;
        var changeToT = "finished";
        console.log('id data to upadete value',idD)
       // var updateQ = "update nodedebugproj.testnoun set notAllocate="+changeToT+" where id="+idD+"";
        sequelize.query(update_query, {
        replacements: {
        id:idD,
        notAllocate : changeToT
        },
    type : sequelize.QueryTypes.UPDATE,
    model: models.TestNoun
  }).then(function() {
    console.log('Inside then method in sequelize');
    cnteServ("updated");
  });     
        } 
  }
};


