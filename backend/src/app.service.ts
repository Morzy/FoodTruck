import { Injectable } from '@nestjs/common';
import * as ExcelJS from 'exceljs';
import { ResultDTO } from './result.dto';
// const ExcelJS = require('exceljs');

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }



  async getData() {
    try{
      const workbook = new ExcelJS.Workbook();
      const worksheet = await workbook.csv.readFile('./public/Mobile_Food_Facility_Permit.csv',{sheetName:"Mobile_Food_Facility_Permit"});
      const headerRow = worksheet.getRow(1);
      let headers = [];
      for(let i  = 1 ; i < worksheet.columnCount+1; i++){
        headers.push(headerRow.getCell(i).value);
      }
      const rows = worksheet.getRows(2,worksheet.rowCount);
      const result:ResultDTO[] = [];
      rows.forEach((row)=>{
        const obj = {}; 
        for(let i  = 1 ; i < headers.length+1; i++){
          obj[headers[i-1]]= row.getCell(i).value;
        }
        //@ts-ignore
        result.push(obj);
      })
      return result;
    }catch(e){
      console.log(e)
    }
    
  }

}
