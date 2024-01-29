package com.example.demo.controller;

import com.example.demo.dto.ResultDTO;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/data")
public class DataController {

    @GetMapping("")
    public ArrayList<ResultDTO> getData() {

        String csvFilePath = "static/Mobile_Food_Facility_Permit.csv";
        ArrayList<ResultDTO> result = new ArrayList<ResultDTO>();
        try (Reader reader = new FileReader(csvFilePath);
             CSVParser csvParser = CSVFormat.DEFAULT.withFirstRecordAsHeader().parse(reader)) {

            for (CSVRecord record : csvParser) {
                // 使用列名访问数据

                List<String> list = record.toList();
                ResultDTO obj = new ResultDTO();
                int index = 0;
                obj.setLocationid(list.get(index++));
                obj.setApplicant(list.get(index++));
                obj.setFacilityType(list.get(index++));
                obj.setCnn(list.get(index++));
                obj.setLocationDescription(list.get(index++));
                obj.setAddress(list.get(index++));
                obj.setBlockLot(list.get(index++));
                obj.setBlock(list.get(index++));
                obj.setLot(list.get(index++));
                obj.setPermit(list.get(index++));
                obj.setStatus(list.get(index++));
                obj.setFoodItems(list.get(index++));
                obj.setX(list.get(index++));
                obj.setY(list.get(index++));
                obj.setLatitude(list.get(index++));
                obj.setLongitude(list.get(index++));
                obj.setSchedule(list.get(index++));
                obj.setDayshours(list.get(index++));
                obj.setNoisent(list.get(index++));
                obj.setApproved(list.get(index++));
                obj.setReceived(list.get(index++));
                obj.setPriorPermit(list.get(index++));
                obj.setExpirationDate(list.get(index++));
                obj.setLocation(list.get(index++));
                obj.setFire_Prevention_Districts(list.get(index++));
                obj.setPolice_Districts(list.get(index++));
                obj.setSupervisor_Districts(list.get(index++));
                obj.setZip_Codes(list.get(index++));
                obj.setNeighborhoods_old(list.get(index++));

                result.add(obj);
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
        return result;
    }
}
