class Circle{
    #Radius;
    #Color;
    constructor(radius = 1.0, color = "red"){
        this.radius = radius;
        this.color = color;
        this.#Radius = 2.88;
        this.#Color = "Black";
    }
    get Radius(){
        return this.#Radius;
    }
    get radius_1(){
        return this.radius
    }
    set radius_1(r){
        if(r <= 0){
            console.log("zero is wrong");
            this.radius = this.radius;
        }else{
            this.radius=this.radius;
        }
    }
    get Color(){
        return this.#Color;
    }
    get color_1(){
        return this.color; 
    }
    set color_1(clr){
        if(clr != ["Red","Yellow","Blue","Black","White"]){
            console.log("Only Red, Yellow, Blue, Black and white colors are available")
        }else{
            console.log("Check color");
            this.color =this.color
        }
    }    
    get toString(){
        return `"Circle [radius=${this.radius},color=${this.color}]"`;
    }
    get area(){
        let areaResult = Math.PI * this.radius * this.radius
        return areaResult.toFixed(2);
    }
    get circumFerence(){
        let circumResult = 2 * Math.PI * this.radius;
        return circumResult.toFixed(2);
    }
}

const cir1 = new Circle(); // Object creation
console.log(cir1); //printing object

const cir2 = new Circle("2.75"); // radius value changed the new object
console.log(cir2);

const cir3 = new Circle(7.7,"Black");
console.log(cir3);

cir3.radius_1 = 0;
console.log(cir3);

cir3.color_1 = "Pink";
console.log(cir3);

console.log(cir3.toString);

console.log("area = ",cir3.area);

console.log("Circumference = ",cir3.circumFerence)


