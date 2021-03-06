'use strict';


var config = require('../../config.js');
var Log = require('log');

// globals
var log = new Log(config.logLevel);

exports.getList = function (request, response) {
  response.send(
    [
      {
        "category" : "Starter",
        "options" :
        [
          {
            "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ7Ap8AJT8KDpyLjVgBPyl7HowYywG0OhX53l7Evqa1ZBm4Gxok",
            "name": "Garden salad vinagrette dressing",
            "description": "bla bla bla"
          },
          {
            "img": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTQ4L8kB3kT8ERAtleMOAB1c5vWjsgX1HY2NiKAjMrWH1aT2a5Oxg",
            "name": "Coconut curry butternut squash sup",
            "description": "bla bla bla"
          }
        ]
      },
      {
        "category" : "Main",
        "options" :
        [
          {
            "img": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTnaOD-YkNT_u4xl4I5QTK4xTg4ajZWOiRnqACrwlw-elWoVemS",
            "name": "Steak",
            "description": "bla bla bla"
          },
          {
            "img": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTC-1CU4_mTVZMfcdMRS3eZnRa4hB_0jzMAagvPUnwaGU1jKvmv",
            "name": "Fish",
            "description": "bla bla bla"
          }
        ]
      }
    ]
  );
}
