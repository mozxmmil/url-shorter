import mongoose from "mongoose";
const connectdb = async()=>{
        try {
      await  mongoose.connect(process.env.MONGOOSE)
      .then(()=>{
        console.log(`data base connected`);
      })
    }
 catch (error) {
    console.log(error);
}
}

export default connectdb;