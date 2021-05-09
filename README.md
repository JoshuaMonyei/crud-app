
## CRUD-App

A simple express application that: Connects to a database, Creates a payload and can get, update and delete the data created. 

https://zuricrud-app.herokuapp.com/


## Acknowledgements

 - [Beginner friendly Node.js tutorials](https://www.youtube.com/playlist?list=PLxuUHF3OiqfUi3RmnpaZHTh1qIXHzDMb8)
 - [Deploying to heroku](https://devcenter.heroku.com/categories/nodejs-support)

  
## API Reference

#### Create a new intern in the database


```http
  POST /https://zuricrud-app.herokuapp.com/interns
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `req.body{name, email, country}`      | `string` | **Required**. name, email and country of intern |

#### Get all interns in the database
```http
  GET /https://zuricrud-app.herokuapp.com/interns
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `null` | `query` | Gets a list of interns that match filter  |

#### Fetch a single intern attributes.

```http
  GET /https://zuricrud-app.herokuapp.com/:${internId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of intern to fetch |

#### Update values of an intern already in the database

```http
  PUT /https://zuricrud-app.herokuapp.com/:${internId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. value of name,email and country of intern you wish to update.  |

#### Delete values of an intern already in the database

```http
  DELETE /https://zuricrud-app.herokuapp.com/:${internId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of intern to Delete |



 

  
