import chzos from "@hybeck/chzOS"
import loadBalancer from "chzos/config"
const osVersion = chzos.versions.V5

const getData = (query:chzDatabase) => {

  const initQuery = query.init({
    osVersion,
    jsEnbaled : true,
    database : "mongo_8.0",
    location : "ap-south-1",
    extended : true, //false to avoid future billings and its will not overlap if you set billing = false in config
    provider : "hybeck"
  })

  chz.sshQuery(query?.query)
  .then((data) => {
  return data;
  })
  .catch((error)=>{
    chzos.error("db_error:" + error)
    return chz.utils.toJSON({
      error,
      errorMessage : error?.message,
      osVersion,
      beautify:true
     })
  })
  return query?.LoadMS(loadBalancer?.maxMS || 90000 ) ? query?.exit() : query?.exec()
}

/**
Once it, Once Up
*/ 
