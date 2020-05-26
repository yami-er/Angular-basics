function sayHello(person: string): string {
    return "Hello, " + person;
   }
   var user = "Super Student";
   document.getElementById("para").innerHTML = sayHello(user);

   //create class
   class person{
       private firstName: string;
        private lastName: string;
        private age: number;
        private phoneNumber:number;
        private state : string;
        private zipCode: number;
        private occupation: string;
        public hourlyWage: number;
        private hourly: number;
        //private certs: string[];
        
        //constractor 

        constructor(firstName: string, lastName: string, age: number ,
             phoneNumber:number , state:string, zipcode: number, occupation: string ,hourly: number ){
                 this.firstName= firstName;
                 this.lastName= lastName;
                 this.age= age;
                 this.phoneNumber= phoneNumber;
                 this.state= state;
                 this.zipCode = zipcode;
                 this.occupation = occupation;
                 this.hourly = hourly;

             }
             //getter
             getFirstName() :string{
                return this.firstName;
            }
            getLastName() :string{
                return this.lastName;
            }
            getAge() :number{
                return this.age;
            }
            getPhoneNumber() :number{
                return this.phoneNumber;
            }
            getState() :string{
                return this.state;
            }
            getZipCode():number{
                return this.zipCode;
            }
            getOccupation():string{
                return this.occupation;
            }
            getHourly():number{
                return this.hourly;
            }
            
             
            //setter
            setFirstName(firstName: string): void{
               this.firstName= firstName
        
            }
            setLastName(lastName: string): void{
                this.lastName=lastName;
         
             }
             setAge(age: number): void{
                this.age=age;
             }
             setPhoneNumber(phoneNumber: number): void{
                this.phoneNumber=phoneNumber;
             }
             setState(state: string): void{
                this.state= state;
             }
             setZipcode(zipcode: number): void{
                this.zipCode= zipcode;
             }
             setOccupation(occupation: string): void{
                this.occupation= occupation;
             }
             setHourly(hourly:number): void{
                 this.hourly= hourly;
             }

             //several combination methods

             fullName(): string{
                 return this.firstName + " " + this.lastName  
             } 
             address(): string{
                 return this.getState + " " + this.getZipCode()
             }

             ageOccupation():string{
                 return this.getAge.toString() + " " + this.getOccupation
             }


                //wedge calculator
             /* weeklyWage(hourly?: number): string {
                if (hourly) {
                    this.hourly = hourly;
                } else {
                    this.hourly = 40;
                }
                return "Weekly wage is $" + this.hourly * this.getHourlyWage() + ".";
            } */
              
         }
            //assigning the combination method to people

             let employee1 = new person(
                 "Anna",
                 "King",
                  29,
                  7040000000,
                 "NC",
                 27264,
                 "Developer",
                 50,
             );

             let employee2 = new person(
                "Sam",
               "Jackson",
               30,
               3010000000,
               "NC",
               28227,
              "Jav Developer",
              50
            );
            //output
            document.getElementById("user1").innerHTML = employee1.fullName();
            document.getElementById("user2").innerHTML = employee2.address();

            

            

        
           
        

            

            
 
    