import { Schema, model, Model, connection} from "mongoose";
type UserType = {
    cidade: string,
    rua: string,
    impressora:string,
    code:string,
    ip:string,
    modelo:string,
    status:boolean,
};

const schema = new Schema<UserType>({
    cidade:String,
    rua:String,
    impressora:String,
    code:String,
    ip:String,
    modelo:String,
    status:{type:Boolean, required:true},
    
  });

const modelName: string = 'impressora';
export default (connection && connection.models[modelName]) ?
    connection.models[modelName] as Model<UserType>
     :
    model<UserType>(modelName, schema);