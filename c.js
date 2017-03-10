
class Person{

  constructor(dob, doe){
     this._dob = new Date(dob)
     this._doe = new Date(doe)
  }

  dob(){
    return this._dob;
  }

  doe(){
    return new Date(this._doe);
  }

  crd(){
    return this.c
  }

  age_hire(){
    const d1 = this.dob().getFullYear()
    const d2 = this.doe().getFullYear()
    return d2 - d1
  }

}

const p = new Person('12/1/1958','6/30/1992')
console.log(p, p.age_hire())
