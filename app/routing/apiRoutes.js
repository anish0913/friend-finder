var buddy = require("../app/data/friends");

module.exports = function(app) {
 
  //GET
  app.get("/api/friends", function(req, res) {
    res.json(buddy);
  });

  //POST
  app.post("/api/friends", function(req, res) {

    var newBuddy = req.body;
  //LOOP
    for (i = 0; i < newBuddy.scores.length; i++){
        newBuddy.scores[i] = parseInt(newBuddy.scores[i]);
    };  

    // MIN AND MAX SCORE
    var bestBuddy = 0;
    var Difference = 40;

  //NESTED LOOP
    for(var i = 0; i < buddy.length; i++) {
      var buddyDifference = 0;
      for(var j = 0; j < buddy[i].scores.length; j++) {
        var difference = Math.abs(newBuddy.scores[j] - buddy[i].scores[j]);
        buddyDifference += difference;
      }

    //Change in MIN
      if(buddyDifference <= Difference) {
        bestBuddy = i;
        Difference = buddyDifference;
      }
    }

    // after finding match, add user to friend array
    buddy.push(newBuddy);

    // send back to browser the best friend match
    res.json(buddy[bestBuddy]); //where does this go too ?
  });
};
