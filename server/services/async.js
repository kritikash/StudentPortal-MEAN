//checking working of async

const async = require('async');

async.parallel([
    function(callback) {
      setTimeout(function() {
        console.log('Task One');
        callback(null, 1);
      }, 200);
    },
    function(callback) {
      setTimeout(function() {
        console.log('Task Two');
        callback(null, 2);
      }, 100);
    }
  ],
  function(err, results) {
    console.log(results);  //task two, task1 [1,2]
  });


  async.parallel({
    task1: function(callback) {
      setTimeout(function() {
        console.log('Task One');
        callback(null, 1);
      }, 200);
    },
    task2: function(callback) {
      setTimeout(function() {
        console.log('Task Two');
        callback(null, 2);
      }, 100);
      }
  }, function(err, results) {
    console.log(results); // { task2: 2, task1: 1 }
 
  });

  async.series([
    function(callback) {
      console.log('one');
      callback(null, 1);
    },
    function(callback) {
      console.log('two');
      callback(null, 2);
    },
    function(callback) {
      console.log('three');
      callback(null, 3);
    }
  ],
  function(err, results) {
    console.log(results);
    // results is now equal to [1, 2, 3]
  });
  
  async.series({
    1: function(callback) {
      setTimeout(function() {
        console.log('Task 1');
        callback(null, 'one');
      }, 200);
    },
    2: function(callback) {
      setTimeout(function() {
        console.log('Task 2');
        callback(null, 'two');
      }, 300);
    },
    3: function(callback) {
      setTimeout(function() {
        console.log('Task 3');
        callback(null, 'three');
      }, 100);
    }
  },
  function(err, results) {
    console.log(results);
    // results is now equal to: { 1: 'one', 2: 'two', 3:'three' }
  });  
