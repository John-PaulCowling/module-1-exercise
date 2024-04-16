interface Iperson{
    name: string
    age: number
    email:string
}

class Person implements Iperson
{
    constructor(public name: string, public age:number, public email: string) { }

    sayHello(): void {
        console.log(`Hello ${this.name}` )
    }

}

new Person("Fred",1,"fred@gmail.com").sayHello()
new Person("Frank",1,"Frank@gmail.com").sayHello()
new Person("Sam",1,"Sam@gmail.com").sayHello()
