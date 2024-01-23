/*var fs=require('fs');
var os =require('os');

var user=os.userInfo();
console.log(user);

fs.appendFile('greeting.txt','hi'+user.username+'!',()=>{
    console.log('file is created');
});
console.log(fs)*/


/*const notes=require('./notes.js');
var _ =require('lodash');


console.log('server price is available');



var age=notes.age;


var data=["person","person",1,2,1,2,'name','age','2'];
var filter=_.uniq(data);
console.log(filter);


var result=notes.addNumber(age+17,10);
console.log(age);
console.log('result is now '+result);

console.log(_.isString('kartik'));*/



/*const jsonString ='{"name":"kartik","age":78}';
const jsonObject=JSON.parse(jsonString);
console.log(jsonObject.name);


const objectToConvert={
    name:"kam",
    age:87
};
const json=JSON.stringify(objectToConvert);
console.log(json);*/



const express = require('express')
const app = express();
const db=require('./db');


const bodyParser=require('body-parser');
app.use(bodyParser.json());

//const person=require('./models/person');
const MenuItem=require('./models/MenuItem');





app.get('/', function (req, res) {
  res.send('Hello World')
})

/*app.get('/chicken',  (req, res) =>{
    res.send('Hello kartik')
  })

app.post('/items',(req,res)=>{
    res.send('data is saved');
})  */


//app.post('/person',async(req,res)=>{
   /* const data=req.body;

    const newperson=new person(data);
   /* newperson.name=data.name;
    newperson.age=data.age;
    newperson.work=data.work;
    newperson.email=data.email;
    newperson.save((error,savedperson)=>{
        if(error){
            console.log('error saving person',error);
            res.status(500).json({error:'internet servic error'})
        }else{
            console.log('data saved successfully');
            res.status(200).json(person);
        }
    })*/
   /* try{
        const data=req.body;// assuming request body contains the person data
        const newperson=new person(data);// create a new person document using monguse model
        const response=await newperson.save();// save the new person to database
        console.log('data saved');
        res.status(200).json(response);
        
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});

    }
})*/
// get method to gert the person
/*app.get('/person',async (req,res)=>{
    try{
        const data=await person.find();
        console.log('data fetched');
        res.status(200).json(data);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});

    }
}
)*/

/*app.post('/MenuItem',async(req,res)=>{
    try{
        const data=req.body;
        const newMenu=new MenuItem(data);
        const response=await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }

    app.get('/menu',async (req,res)=>{
        try{
            const data=await MenuItem.find();
            console.log('data fetched');
            res.status(200).json(data);
    
        }catch(err){
            console.log(err);
            res.status(500).json({error:'Internal server error'});
    
        }
    }
    )
})*/
   /* app.get('/person/:workType', async(req,res)=>{
        try{
        const workType=req.params.workType;
        if(workType=='chef' || workType=='manager' || workType=='waiter'){
            const response=await person.find({work:workType});
            console.log('response fetched');
            res.status(200).json(response);


        }else{
            res.status(404).json({error:'Invalid work Type '});

        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});

    }
    }
    )*/
   










const personroutes=require('./routes/personroutes');

const menuitemroutes=require('./routes/menuitemroutes');

app.use('/person',personroutes);
app.use('/menu',menuitemroutes);



app.listen(3000,()=>{
    console.log('listening on port 3000');
})