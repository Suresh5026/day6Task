class Person {
    constructor(
        name = "Suresh",
        age = 29,
        door_no = "40/71",
        street = "South Street",
        city = "Aruppukottai",
        District = "Virdhunagar",
        state = "Tamil Nadu",
        college = "SSCE",
        Degree = "BE",
        Percentage = 67,
        school = "SBK",
        Board ="12th state borad",
        
        
    )
    {
        this.name = name;
        this.age = age;
        this.door_no =door_no;
        this.street = street;
        this.college = college;
        this.Degree =Degree;
        this.Percentage =Percentage;
        this.school = school
        this.city = city;
        this.District = District;
        this.state = state; 
        this.Board= Board;

    }
    get displayNameAge(){
        return `"Name = ${this.name}, Age = ${this.age}"`
    }
    get displayAddress(){
        return `"street = ${this.street}, city = ${this.city}, district = ${this.District}"`
    }
    get studiesInfo(){
        return `"College = ${this.college}"`
    }
}

const person1 = new Person();
console.log(person1);
console.log(person1.displayNameAge);
console.log(person1.displayAddress);
console.log(person1.studiesInfo);
