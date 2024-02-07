### Setup 
```
git clone - https://github.com/Abhijeet9868/rest_mock.git
``` 
npm install 

### Create a store.json file with some data
```json
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
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
