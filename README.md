### Setup 
```
git clone - https://github.com/Abhijeet9868/rest_mock.git
``` 
npm install 

### Create a store.json file with some data
```json
{
  "posts": [
    { "id": 0, "title": "title1", "author": "c1q", "views": 31 }
  ],
  "authors": [
    { "id": 1, "First_name": "COMMMERCE", "Last_name": "IQ" , "posts": 45 }
  ],
}
```

### Start Node Server
* > npm start


### Routes supported
* GET    http://localhost:5000/posts
* GET    http://localhost:5000/posts/1 
* POST   http://localhost:5000/posts
* PUT    http://localhost:5000/posts/1
* DELETE http://localhost:5000/posts/1

### Run Test
* > npm test

### Features
* Uses a logging middleware 
* Supports dynamic entities
