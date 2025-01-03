
# chzOS [PAID LIBRARY]
### Current sale : 9034 os and 129M+ Database 
## All datas are saved based on 'Q' system, All datas are saved well

Specially made for shared hosting for fast serving (🥇)

### Info [Working servers]
- Hostgator.in ❎ 
- RazorHost.in ❎
  
ℹ️ **Above Servers will not work with chzOS V5 or above until they are not updates chzOS 0.023 or Above**

- HybeckOS(High speed for chzOS) ✅
- And any VPS (Need to install chzOS) ✅

## Installation

Download chzos latest version from https://bit.ly/3QsBRk4

```bash
  Paste it on 
  ~/home/_env/.chzOS_23.hos
  ~/home/.config/.chzOS_23.cf
```

READ https://chzos.chzapps.com for latest configs


## ChzOS V5 Database 
_its auto integrated and no need any setup_

**Database BaseURL** : `youhost/chzos/confar/db/:dbType/:dbName`

print will be : https://mydomain.com/chzos/confar/db/mongo/mydatabase

As v5 you can use directly on your service 

```typescript
import chzDB from '@hybeck/chzDB'

chzDB.applyFromCloudOS("https://mydomain.com/chzos/confar/db/mongo/mydatabase")

//if failed will throw and error {failed:true, issue : "string"}

const allUsers = await chzDB.find("users",{
username : "hello"
})

const userById = await chzDB.findById("objectId/orMash", "users")

const addNewUser = await chzDB.create("users", {
username :"jazz",
password : "0934034", //autoHash for password as its key is 'password', if you dont want to hash then user passwordV2 as key
})

```




## Features

- Fast Data transfering (For ReactJS, Codeigniter)
- fetch Easy (Fetch data from your own database)
- Customize UI (Easy to customize UI [ReactJS])
- support for react-native-chz


## chzOS database

All datas are saved in encrypted mode 
500lines of data will saved as 726e42b3af54d070a4584e6880404c9abd2ac5dc

- You can configure uri of the database and API from config.json

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
## Database example
#### Example database 1
chzOS 3 or lesser
```js
[
   {key : "2ijoqwdoqjwdoijqwod", database : "users" , data : {name : "bash", class : "1"} },
   {key : "xyz", database : "currentSessions" , data : {browser : "chrome", userid : "eu8ejSUejd"} }
]
```
#### Example database 2 [jsdatabase = true]
chzOS 4 or greater
```js
[
   {
      "users" : [
         {key : "xyz", data : {name : "bash", class : 1}}
         //Update as push
      ],
       "currentSessions" : [
         {key : "yyz", data : {browser : "chromexV12.425", userid : "125"}}
         //Update as push
      ]
   }
]
```
#### Example database 2 [jsdatabase = false]
chzOS 4 or greater
```cpp
$start->users
#"database":"key":"data"
#"users":"xyz":"{name : "bash", class:1}"
#"users":"8AS":"{name : "kadar", class:1}"
#"users":"8MS":"{name : "qutin", class:1}"
$end->users
<!-- current session database -->
$start->currentSession
#"database":"key":"data"
#"currentSession":"chrome":"xyzs"
#"currentSession":"firefox":"xyzs"
$end->currentSession
```

chz engine will help to get query with in 0.01sec or below
```js
cen chzOS = req("../bin/bash"); //Best for bash Database 
cen q = chzOS.query("get * from user")
log(q ? q.toJSON() : log({"error" : "empty_data"}));

//New chzOS 4>
cen chzOS = req("../req/query"); //Faster then older for jsDatabase = true
cen q = chzOS.query("get * from user")
log(q ? q.toJSON() : log({"error" : "empty_data"}));
```
