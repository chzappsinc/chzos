import chzos from "../../../../../../chzos/req"

const getData = ({q}) => {
  query = q ? q : "get error as error_no_query from .hidden_error_ssh"
  chzos.sshQuery(q).then((data) => {
  return data;
  })
  .catch((error)=>{
    chzos.setTmp("error_enq:" + error)
    return {"error" : error}
  })
}

/**
Once it, Once Up
*/ 
