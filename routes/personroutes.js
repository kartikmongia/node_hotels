const express=require('express');
const router=express.Router();
const person=require('./../models/person');


router.post('/',async(req,res)=>{

    try{
        const data=req.body;// assuming request body contains the person data
        const newperson=new person(data);// create a new person document using monguse model
        const response=await newperson.save();// save the new person to database
        console.log('data saved');
        res.status(200).json(response);
        
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});

    }
})

router.get('/',async (req,res)=>{
    try{
        const data=await person.find();
        console.log('data fetched');
        res.status(200).json(data);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});

    }
}
)

router.get('/:workType', async(req,res)=>{
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
)

router.put('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;//extract the id from URL parameter
        const updatedPersonData=req.body;//updated data for the person
        
        const response=await person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true,// return the updated document
            runValidators:true,//run mangoose validation
        })
        if(!response){
            return res.status(404).json({error:'person not found'});
        }
        console.log('data updated');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server errpr'});

    }
})
router.delete('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;

        const response=await person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error:'person not found'});
        }
        console.log('data deleted');
        res.status(200).json({message:'person deleted success'});

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server errpr'});


    }
})


module.exports=router;






