const express = require("express");
const faker = require('faker');
const app = express();
app.use( express.json() );
app.use( express.urlencoded({extended: true}) );
const port = 8000;




class User{
    constructor(){
        this._id = Math.floor(Math.random() * (100 - 1 + 1) + 1)
        this.firstName= faker.name.firstName();
        this.lastName= faker.name.lastName();
        this.phoneNumber= faker.phone.phoneNumber();
        this.email= faker.internet.email();
        this.password= faker.random.words();
    }
}

class Company{
    constructor(){
        this._id = Math.floor(Math.random() * (100 - 1 + 1) + 1)
        this.name= faker.company.companyName();
        this.address={
            "street": faker.address.streetName(),
            "city": faker.address.city(),
            "state": faker.address.state(),
            "zipCode": faker.address.zipCode(),
            "country": faker.address.country()
        }
    }
}

app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
})

app.get("/api/users/new", (req, res) => {
    res.json(new User());
})

app.get("/api/user/company", (req, res) => {
    res.json([new User(), new Company()])
})





const server = app.listen(port, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);