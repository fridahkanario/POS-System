package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;

import java.util.ArrayList;
import java.util.List;

@Service
public class PosService {

    @Autowired
    PosRepository posRepository;

    public List<Pos> findAll() {
        List<Pos> pos1 = new ArrayList<>();
       pos1 = posRepository.findAll();
        return pos1;
    }

    public Pos create(Pos pos) {
        return posRepository.save(pos);
    }

    public void saveOrUpdate(Pos pos) {
        posRepository.save(pos);
    }

    public void deletePos(int id){
        posRepository.deleteById(id);
    }
}
