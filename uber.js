class uberPriceCalc{
    #perkilometer;
    #perHourwait;
    constructor
    (
    name = "Suresh",
    baseFee = 18,
    distance = 1,
    duration = 1

    )
    {
        this.name = name;
        this.baseFee = baseFee;
        this.distance = distance; 
        this.vehicleType = "Car";    
        this.#perkilometer = 15,
        this.#perHourwait = 20,
        this.duration =duration

    }

    calculate(){
        const distFare = this.distance * this.#perkilometer;
        const timeFar = this.duration * this.#perHourwait;
        const totalFare = this.baseFee + distFare + timeFar;
        console.log(`Hi Suresh !!! Your uber Fare is Rs. ${totalFare}`);
    }
    get Distance(){
        return this.distance;
    }
    set Distance(distance){
        return this.distance = distance;
    }
    get Duration(){
        return this.duration;
    }
    set Duration(duration){
        return this.duration;
    }
    
}

const suresh = new uberPriceCalc();
suresh.distance =2;
suresh.calculate();