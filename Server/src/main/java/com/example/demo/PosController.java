package com.example.demo;


import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class PosController {

    @Autowired
    PosService posService;


    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/pos/findAll")
    public ResponseEntity<Object> list() {
        List<Pos> p = posService.findAll();
        return new ResponseEntity<>(p, HttpStatus.OK);
    }

    @PostMapping("/pos")
    public ResponseEntity<Object> create(@RequestBody Pos pos){
        pos.setDate(new Date(System.currentTimeMillis()));
        posService.create(pos);
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("message","Pos created successfully");
        return  new ResponseEntity<>(jsonObject, HttpStatus.CREATED);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/pos/{id}")
    public ResponseEntity<Object> deletePos(@PathVariable("id") int id){
        Map<String,String> res = new HashMap<>();
       posService.deletePos(id);
       res.put("message","delete successful");
        return new ResponseEntity<>(res, HttpStatus.OK);
    }
    }
