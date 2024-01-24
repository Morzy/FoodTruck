"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const ExcelJS = require("exceljs");
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
    async getData() {
        try {
            const workbook = new ExcelJS.Workbook();
            const worksheet = await workbook.csv.readFile('./public/Mobile_Food_Facility_Permit.csv', { sheetName: "Mobile_Food_Facility_Permit" });
            const headerRow = worksheet.getRow(1);
            let headers = [];
            for (let i = 1; i < worksheet.columnCount + 1; i++) {
                headers.push(headerRow.getCell(i).value);
            }
            const rows = worksheet.getRows(2, worksheet.rowCount);
            const result = [];
            rows.forEach((row) => {
                const obj = {};
                for (let i = 1; i < headers.length + 1; i++) {
                    obj[headers[i - 1]] = row.getCell(i).value;
                }
                result.push(obj);
            });
            return result;
        }
        catch (e) {
            console.log(e);
        }
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map