import fs from 'fs';
import { parseString } from 'xml2js';
import util from 'util';
import { Unit, Human } from './Unit.js';

function buildUnits(directory, unit_list) {

    const xml = fs.readFileSync(directory, 'utf8');

    let unit_data = [];
    let parent;

    let offset = unit_list.length;

    parseString(xml, (err, result) => {
        if (err) {
            console.error('Error parsing XML:', err);
            return;
        }

        //console.log(util.inspect(result, { depth: null, colors: true }));

        unit_data = result.UnitConfigurations.UnitConfiguration; //An Array, see how this might be converted into units
    });


    for(let u = 0; u < unit_data.length; u++)
    {
        console.log("----");

        //console.log("Health: " + unit_data[u].Health);

        if(unit_data[u]['$'].type == "human" || unit_data[u]['$'].type == "engineer" || unit_data[u]['$'].type == "mg" || unit_data[u]['$'].type == "medic")  
        {
            parent = unit_data[u]['$'].parentId;

            unit_list[u + offset] = new Human();

            if(parent != null)
            {
                unit_list[u + offset].parent = parent;

                for(let p = 0; p < unit_list.length; p++)
                {
                    let check_name = unit_list[p].name;

                    if(check_name == parent)
                    {
                        unit_list[u + offset].human_inherit(unit_list[p]);
                    }
                }
            }

            unit_list[u + offset].human_copy(unit_data[u]);

            unit_list[u + offset].human_display();

        }
        else
        {
            parent = unit_data[u]['$'].parentId;

            unit_list[u + offset] = new Unit();

            if(parent != null)
            {
                for(let p = 0; p < unit_list.length; p++)
                {
                    let check_name = unit_list[p].name;

                    if(check_name == parent)
                    {
                        unit_list[u + offset].unit_inherit(unit_list[p]);
                    }
                }
            }

            unit_list[u + offset].unit_copy(unit_data[u]);

            unit_list[u + offset].unit_display();
        }

        
        

        /*for(let t in unit_lst[u])
        {
            console.log(unit_lst[u][t]);
        }*/
    }

    return unit_list;

}

export default function unit_read() {
    const unit_list = buildUnits("C:/Users/paliu/Documents/Javascript/Iron Harvest Modding Tool/config/Units_00_Base.xml", []);
    return buildUnits("C:/Users/paliu/Documents/Javascript/Iron Harvest Modding Tool/config/Units_01_Core.xml", unit_list);
}
