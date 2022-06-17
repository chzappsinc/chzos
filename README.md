
# chzOS
Specially made for shared hosting for fast serving




## Installation

Download chzos latest version from https://chzos.chzapps.com

```bash
  Paste it on 
  home/chz/.here
```
    
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
| `c_query` | `string` | **Required**. Custom query |

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
Out will be {name : "Hello Setven"}
