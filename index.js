const express = require("express");
const app = express()
const data = require("./data.json")
const fs = require("fs");

var JSONfile =  
{
    WriteObj: function(object) // method made to write into "data.json" an object 
    {
        fs.writeFileSync("./data.json", JSON.stringify(object));
    },
    ReadObj: function() //method made to return data.json as an object
    {
       return JSON.parse(fs.readFileSync("./data.json","utf-8"));
    }
    
}

app.use(express.json());

app.get("/clients",function(req,res){ //get 
    
    console.log("G E T")
    res.json(JSONfile.ReadObj()) //sends as rsponse data.json

});

app.get("/clients/:id",function(req,res){//get by id

    console.log("G E T   B Y   I D")
    const { id } = req.params; //id is got by id
    const client = data.find(cli => cli.id == id)// client receives an object from data.json filtered by the required client id
    if(!client){return res.status(204).json()} //if the id is not found returns ststus 204
    res.json(client) //sends as response client object

});

app.post("/clients",function(req,res){ //post]

    console.log("P O S T")
    let client = JSONfile.ReadObj()//client receives data.json as an object
    const {name,email,address:{street,suite,city}} = req.body; //name email and address object get their values from them requisition body 

    const nextId = ((client.length)+1).toString();//calculates the next id
    console.log(`nextId = ${nextId}`)

    let newClient = //new client object is created with id aready set
    {
        id:nextId,
        name,
        email,
        address:
        {
            street,
            suite,
            city
        }

    }

    for(var prop in newClient) //sweeps newClients properties
    { 
        if(newClient[prop] === undefined)// if atribute hasn't been sent in request its settled as an empty charecter ""
        {
            newClient[prop] = "";
            console.log(`${prop} incompleto`);          
        }
        else 
        {    
            for(var prop_ in newClient.address) //sweeps newClient.address
            {
            if(newClient.address[prop_] === undefined){newClient.address[prop_] = ""} // if NewClient.address properties are not set receives an empty charecter ""
            }
        
        }
    }

    client.push(newClient); //adds newClient to the client object

    JSONfile.WriteObj(client);//writes client into data.json

    res.json(newClient);//sends newClient as a response

});


app.put("/clients/:id",function(req,res){//put by id

    console.log("P U T")
    const {id} = req.params;//gets id from request parameters
    const client = data.find(cli => cli.id === id);//client receives the id requested object in data.json
    console.log(client)
    if(!client){return res.status(204).json()};//if the id is not found returns ststus 204

    const {name,email,address:{street,suite,city}} = req.body;//name email and address object get their values from them requisition body 

    let newClient = //new client object is created with requisition body properties 
    {
        id:client.id,
        name,
        email,
        address:
        {
            street,
            suite,
            city
        }

    }

    const dataObj = JSONfile.ReadObj()//dataObj receives data.json as an object
    const index = dataObj.findIndex(cli => cli.id === id);//index receives dataObj id index 
    console.log(dataObj[index]) 
    dataObj[index] = newClient;//dataObj at the id index receives newClient
    console.log(dataObj[index])
    JSONfile.WriteObj(dataObj)//writes dataObj into data.json
    res.json(newClient);
   
});

app.delete("/clients/:id",function(req,res){//delete by id

    console.log("D E L E T E")
    const dataObj = JSONfile.ReadObj()//dataObj receives data.json as an object
    const {id} = req.params;//gets id from request parameters
    const ClientToDeleteIndex = dataObj.findIndex(cli => cli.id === id);//finds id index into dataObj
    const client = dataObj.find(cli => cli.id === id);//client receives the index of id into dataObj

    console.log(client)
    if(!client){return res.status(204).json()};//if id is not found returns 204

    var newDataObj = dataObj.filter(e => e.id != id);//newDataObj receives dataObj without the deleted id object

    JSONfile.WriteObj(newDataObj);//writes into data.json newDataObj

    res.json(dataObj[ClientToDeleteIndex])//sends the deleted object as a response

});


app.listen(3000,function() {//sets 3000 gates listener

    console.log("S E R V E R   I S   N O W   R U N N I N G")

})