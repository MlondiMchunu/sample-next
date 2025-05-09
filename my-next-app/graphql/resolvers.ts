import { db } from "./data";
import { WeatherInterface } from "@/mongoose/weather/interface";
import { findByZip, updateByZip } from "@/mongoose/weather/services";


/*declare interface WeatherInterface {
    zip: string;
    weather: string;
    tempC: string;
    tempF: string;
    friends: string[];
}*/

export const resolvers = {
    Query: {
        weather: async (_: any, param: WeatherInterface) => {
            let data = await findByZip(param.zip);
            return [data];
           // return [db.find((item) => item.zip === param.zip)];
        }
    },
    Mutation: {
        weather: async (_: any, param: { data: WeatherInterface }) => {
            return [db.find((item) => item.zip === param.data.zip)];
        }
    }
};