function calculateSquare (value:number):number{
    return value * value
}

console.log(calculateSquare(3))

const calculateTriangleArea = (base:number, height:number):number => {
    return base * height / 2
}

console.log(`Area is ${calculateTriangleArea(5,10)}`)