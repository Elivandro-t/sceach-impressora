import {Model,DataTypes} from "sequelize";
import {sequelize} from "../instances/database";
export interface userInstances extends Model{
    id:number;
    password:number
    user:string
}
export const User = sequelize.define<userInstances>("User",{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    user:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.INTEGER
    }
    
},{
    tableName:"users",
    timestamps:false
}
)
