export class Student {
    name: string;

    email: string;

    mobileNumber: number;

    password: string;

    getName():string{
        return this.name;
    }

    setName(name:string){
      this.name = name;
    }

    getEmail():string{
        return this.email;
    }

    setEmail(email:string){
      this.email = email;
    }

    getMobileNumber():number{
        return this.mobileNumber;
    }

    setMobileNumber(mobileNumber:number){
      this.mobileNumber = mobileNumber;
    }

    getPassword():string{
        return this.password;
    }

    setPassword(password:string){
      this.password = password;
    }
}
