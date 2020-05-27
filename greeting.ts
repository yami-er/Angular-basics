function sayHello(person: string): string {
    return "Hello, " + person;
   }
   var user = "Super Student";
   document.getElementById("para").innerHTML = sayHello(user);

    //interface
    interface PersonOptions{
        firstName: string;
        lastName: string;
        age?: number;
        phoneNumber?:number;
        state? : string;   
    }
         

   //create class
   class Person{
       private firstName: string;
        private lastName: string;
        private age: number;
        private phoneNumber:number;
        private state : string;
        private zipCode: number;
        private occupation: string;
        private hourlyWage: number;
        private certs: string[];
        
        
        //constractor 

        constructor(firstName: string, lastName: string, age: number ,
             phoneNumber:number , state:string, zipcode: number, occupation: string ,hourlyWage: number ,certs?: string[] ){
                 this.firstName= firstName;
                 this.lastName= lastName;
                 this.age= age;
                 this.phoneNumber= phoneNumber;
                 this.state= state;
                 this.zipCode = zipcode;
                 this.occupation = occupation;
                 this.hourlyWage = hourlyWage;
                 if(certs){
                     this.certs = certs;
                 }
                 else{
                     this.certs =[];
                 }

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
                return this.hourlyWage;
            }
            getCerts():string[]{
                return this.certs;
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
             setHourly(hourlyWage:number): void{
                 this.hourlyWage= hourlyWage;
             }
             setCerts(certs:string[]) : void{
                 this.certs= certs;
             }

             //several combination methods

             fullName(): string{
                 return this.firstName + " " + this.lastName  
             } 
             address(): string{
                 return this.getState() + " " + this.getZipCode()
             }

             ageOccupation():string{
                 return this.getAge.toString() + " " + this.getOccupation
             }


                //wedge calculator
              weeklyWage(hour?: number): number {
                  let wage = 0;
                if (hour) {
                    wage = hour * this.hourlyWage;
                } else {
                     wage= 40 * this.hourlyWage;
                }
                return wage; 
            }
            
            //add certs method

            addCerts(...newCerts:string[]): void{
               this.certs.push(...newCerts) 
            }

            //function that implemets interface
            //function createSquare(config: SquareConfig): { color: string; area: number } {
            personInfo(employee: PersonOptions): {
                firstName: string;
                lastName: string;
                age?: number;
                phoneNumber?:number;
                state? : string;} {
                    let emp = {
                        firstName:"Jonathan",
                        lastName:"Smith",
                        age:25,
                        phoneNumber:3800000000,
                        state:"MD"
                    };
                    emp.firstName = employee.firstName;
                    emp.lastName = employee.lastName;
                    if(employee.age){
                        emp.age = employee.age;
                    }
                    if(employee.phoneNumber){
                        emp.phoneNumber = employee.phoneNumber;
                    }
                    if(employee.state){
                        emp.state = employee.state;
                    }
                
                    return emp;
                }
            
              
         }
            //assigning the combination method to people

             let employee1 = new Person(
                 "Anna",
                 "King",
                  29,
                  7040000000,
                 "NC",
                 27264,
                 "Developer",
                 50,
                 ["MBA", "CSM", "MCSD"]
             );

             let employee2 = new Person(
                "Sam",
               "Jackson",
               30,
               3010000000,
               "NC",
               28227,
              "Jav Developer",
              50
            );
            //output employee1
            document.getElementById("section1").innerHTML = employee1.fullName();
            document.getElementById("section2").innerHTML = employee1.address();
            document.getElementById("section3").innerHTML = employee1.weeklyWage(50).toString();
            employee1.addCerts("Java","Angular");
            document.getElementById("section4").innerHTML = employee1.getCerts().join();
            let employee = {
                firstName:employee1.getFirstName(),
                lastName:employee1.getLastName(),
                age:employee1.getAge()
                
            };
            document.getElementById("section5").innerHTML = employee1.personInfo(employee).phoneNumber.toString();

            // output employee2
            document.getElementById("section6").innerHTML = employee2.fullName();
            document.getElementById("section7").innerHTML = employee2.address();
            document.getElementById("section8").innerHTML = employee2.weeklyWage().toString();
            employee2.addCerts("Angular");
            document.getElementById("section9").innerHTML = employee2.getCerts().join();

            

            

        
           
        

            

            
 
    