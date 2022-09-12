const student = {
    name: "Rakibul Hasan",
    Id :2011122181,
    subject:"Physics " ,
    courses:["Mch & Prop of Matter", 'Ecy ', 'Wvs', "MP-1"],
    exam : function (){
        console.log(this.courses)
        this.courses.map(course => `${this.name} is participating Exam on ${course}`)
    }

}

const obj = Object.entries
console.log(student.exam())