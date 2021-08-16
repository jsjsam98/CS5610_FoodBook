// Atlas:
// mongo mongo mongodb+srv://shangjun:jsjsamm@cluster0.ojh7b.mongodb.net/foodbook_user scripts/init.mongo.js

db.users.remove({});

const issuesDB = [
    {
      "user_nmae": "Sam",
      "user_id": "1000",
      "user_psw": "jsjsam",
      "records": [
        {
          "foodlist": ["food1", "food2", "food3"],
          "food_total_calorie": 1000,
          "date": "2021-08-10"
        },
        {
          "foodlist": ["food4", "food5", "food6"],
          "food_total_calorie": 2000,
          "date": "2021-08-11"
        }
      ]
    },
    {
      "user_nmae": "Yang",
      "user_id": "1001",
      "user_psw": "jsjsam",
      "records": [
        {
          "foodlist": ["food1", "food2", "food3"],
          "food_total_calorie": 1000,
          "date": "2021-08-10"
        },
        {
          "foodlist": ["food4", "food5", "food6"],
          "food_total_calorie": 2000,
          "date": "2021-08-11"
        }
      ]
    }
  ];

db.foodbook_user.insertMany(issuesDB);
const count = db.foodbook_user.count();
print('Inserted', count, 'users');

