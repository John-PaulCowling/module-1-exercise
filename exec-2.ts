interface Iperson{
    name: string
    age: number
    email:string
}

class Person implements Iperson
{
    name:string
    age:number
    email:string

    constructor(name: string, age:number, email: string)
    {
        this.name = name
        this.age = age
        this.email = email
    }

    sayHello(): void {
        console.log(`Hello ${this.name}` )
    }

}

new Person("Fred",1,"fred@gmail.com").sayHello()

new Person("Frank",1,"Frank@gmail.com").sayHello()
new Person("Sam",1,"Sam@gmail.com").sayHello()
