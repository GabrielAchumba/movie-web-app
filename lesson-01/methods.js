/* function myFirstVoid() {

} */


const myFirstVoid = (name = "Gabriel") => {
    console.log("My name is " + name)
}

const anothername = "James"
const x = myFirstVoid(anothername)

console.log(x)

const myFirstFunction = (name = "Gabriel") => {
    return "My name is " + name
}

//x = (-b +- sqrt(b^2 -4ac))/2a

//x^2 + 5x + 6
//ax^2 +bx +c
//a = 1; b = 5; c =6

//x = (-b + sqrt(b^2 -4ac))/2a
//x = (-b - sqrt(b^2 -4ac))/2a
const ans = myFirstFunction()
console.log(ans)

const quadSolver = (a, b, c) => {
    let ans = {
        x1:  (-b + Math.sqrt(Math.pow(b, 2) -4 * a * c))/2 * a,
        x2: (-b - Math.sqrt(Math.pow(b, 2) -4 * a * c))/2 * a,
    }

    return ans
}

console.log(quadSolver(1, 5, 6))