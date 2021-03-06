import mongoose from 'mongoose';
import express  from 'express';
import cors     from 'cors';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
const PORT = process.env.PORT ||5000;
//'mongodb://localhost/equipments'
mongoose.connect("mongodb+srv://akashhegde2012:Akash2012$@cluster0.lz6jd.mongodb.net/equipments?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        app.listen(PORT,()=>{console.log('Server running in port 5000')});
    })
    .catch((err)=> console.log(err));
mongoose.set('useFindAndModify',false);
const equipmentSchema = mongoose.Schema({
    name:String,
    category:String,
    description:String,
    image:String
});
const createEquipments = async(equipment)=>{
    const newEquipment = new Equipment(equipment);
    await newEquipment.save();
    return newEquipment;
}
const Equipment = mongoose.model('Equipment',equipmentSchema);
app.get('/',(req,res)=>{
    res.send('<h1> Hello to equipment server </h1>');
})
app.get('/equipments', async (req,res)=>{
    const equipments = await Equipment.find();
    res.status(200).json(equipments);
});
app.post('/equipments',async (req,res)=>{
    const equipment = await createEquipments(req.body);
    console.log(equipment.name,equipment.category);
    res.status(201).json(equipment).end();
});
app.delete('/equipments/:id', async(req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('no post with that id');
    const deletedEquipment =await Equipment.findByIdAndDelete(id);
    console.log(id);
    res.json({message:'Post deleted successfully'});
});
app.patch('/equipments/:id',async(req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('no post with that id');
    const updateEquipments = await Equipment.findByIdAndUpdate(id,req.body,{new:true});
    res.json(updateEquipments);
});