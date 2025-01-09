import fs from 'fs';
import { parseString } from 'xml2js';


import unit_read from 'file:C:/Users/paliu/Documents/Javascript/Iron Harvest Modding Tool/server/unit_reader.js';
import express from 'express';
import cors from 'cors';

const app = express();

let directory = "C:/Users/paliu/Documents/Javascript/Iron Harvest Modding Tool/config/Units_00_Base.xml";
let unit_data;

//const unit_lst = unit_read();

const xml = fs.readFileSync(directory, 'utf8');

parseString(xml, (err, result) => {
    if (err) {
        console.error('Error parsing XML:', err);
        return;
    }

    //console.log(util.inspect(result, { depth: null, colors: true }));

    unit_data = result.UnitConfigurations; //An Array, see how this might be converted into units
});

/*
const json_lst = [];

for(let _u in unit_lst)
{
    json_lst[_u] = JSON.stringify(unit_lst[u]);
}*/

app.use(cors());
app.use(express.json());

app.get('/message', (req, res) => {
    res.json({message:unit_data});
    
});

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });

// ON COMMAND PROMPT: cd Documents/Javascript/Iron Harvest Modding Tool/server

// Then "npm run dev" to run server