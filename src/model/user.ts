import {Model,DataTypes} from "sequelize";
import {sequelize} from "../instances/database";
export interface userInstances extends Model{
    id:number;
    cidade: string;
    rua:string;
    impressora:string;
    status:boolean;
    modelo:string;
    ip:string;
    code:number;
}
export const User = sequelize.define<userInstances>("User",{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    cidade:{
        type:DataTypes.STRING
    },
    rua:{
        type:DataTypes.STRING
    },
    impressora:{
        type:DataTypes.STRING
    },
    status:{
        type:DataTypes.BOOLEAN
    },
    modelo:{
        type:DataTypes.STRING
    },
    ip:{
        type:DataTypes.STRING
    },
    code:{
        type:DataTypes.INTEGER
    }
},{
    tableName:"impressora",
    timestamps:false
}
)