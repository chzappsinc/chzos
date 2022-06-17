
# chzOS
Specially made for shared hosting for fast serving




## Installation

Download chzos latest version from https://bit.ly/3QsBRk4

```bash
  Paste it on 
  home/chz/.here
```
READ https://chzos.chzapps.com for latest configs


## Features

- Fast Data transfering (For ReactJS, Codeigniter)
- fetch Easy (Fetch data from your own database)
- Customize UI (Easy to customize UI [ReactJS])
- support for react-native-chz


## chzOS database

All datas are saved in encrypted mode

#### Get all items

```http
  GET: https://mydomain/chzOS/api/getall
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get Single Item

```http
   GET: https://mydomain/chzOS/api/items/${database_name}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Custom Query

custom query will help you to get data easly,

#### Example

```http
   GET: https://mydomain/chzOS/api/items/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `c_query` | `string` | **Required**. Custom query |

```js
req = "get name from database where id = 1"
req ? log(req.toJSON()) : log({error : "empty_data"})

```
Out will be `{"name" : "Hello Setven"}` or `{"error" : "empty_data"}`

Upload Data 

#### Example

```http
   PUT : https://mydomain/chzOS/api/items/${database_name}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `method`  | `string` | **Required**. PUT or PUSH |
| `key`     | `string` | **Required**. unique key |
| `data`    | `string` | **Required**. json String |

data example

```js
const data = JSON.stringify({
   name : "name",
   class : "class"
})

fetch(........{
   method : "PUT"
   body : JSON.stringify({
      api_key : "xxxxxx",
      method : "PUT",
      key : "xyz3894", //You can use react-chz Eg below
      data : data
   }),
}).then((res)=>{
   console.log(res)
})

```
Using react-native-chz for easy keyGen

```js
import {randomUUID} from "react-native-chz"
...
method : "PUT",
key : randomUUID()
...

```
