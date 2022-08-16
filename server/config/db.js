const mongoose=require('mongoose')
const connectionParams={
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true ,
    // useFindAndModify: false 
}
mongoose.connect(process.env.DATABASE,connectionParams )
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));


