package com.example.demo;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name="pos")
public class Pos {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String serialNumber;
    private String make;
    private String owner;
    private Date date;

    public Pos() {
    }

    public Pos(String serialNumber, String make, String owner, Date date) {
        this.serialNumber = serialNumber;
        this.make = make;
        this.owner = owner;
        this.date = date;
    }

    public int getId() {
        return id;
    }

    public Pos setId(int id) {
        this.id = id;
        return this;
    }

    public String getSerialNumber() {
        return serialNumber;
    }

    public Pos setSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }

    public String getMake() {
        return make;
    }

    public Pos setMake(String make) {
        this.make = make;
        return this;
    }

    public String getOwner() {
        return owner;
    }

    public Pos setOwner(String owner) {
        this.owner = owner;
        return this;
    }

    public Date getDate() {
        return date;
    }

    public Pos setDate(Date date) {
        this.date = date;
        return this;
    }
}
