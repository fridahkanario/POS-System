package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PersonService {

    @Autowired
    PersonRepository personRepository;


    public Person create(Person person) {
        return personRepository.save(person);

    }

    public void saveOrUpdate(Person person) {
        personRepository.save(person);
    }


    public boolean login(Person person) {
        try {
            Person x =  personRepository.findPersonByUsername(person.getUsername());
            System.out.println(x);
            if (person.getPassword().equals(x.getPassword()) && x != null){
                return true;
            }
        } catch (Exception e) {
            System.out.println("Error");
        }
        return false;
    }

    public List<Person> findAll() {
        List<Person> people = new ArrayList<>();
        people = personRepository.findAll();
        return people;
    }
}
