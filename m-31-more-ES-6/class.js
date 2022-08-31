class Person {
    constructor(name, dept ){
        this.name = name
        this.dept = dept
    }
    gritting(){
        return `Hello, Welcome to This Class ${this.name}. Department of ${this.dept}` 
    }  
}



const rakib = new Person('Rakibul Hasan', 2011122181, 'Physics')

console.log(rakib.gritting())