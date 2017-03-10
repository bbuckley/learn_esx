
export const foobar = 2

import { v4 } from 'node-uuid'

export const CalcCategories = ['Active Modeling','Terminated Modeling','Other']
export const CalcTypes = ['Modeling','UI1','Final','Modeling AB','Term AB']
export const Matrix = {
  database: "DBCERT",
  clnt_id: 12203,
  calcTypes: CalcTypes,
  calcCategories: CalcCategories
}

export class Tc {
  constructor(ssn){
    this.id = v4()
    this.ssn = ssn
  }
}

export class Person {
  constructor(crd, dob, doe, dot){
    this._id = v4()
    this._crd = crd

    this._dob = dob
    this._doe = doe
    this._dot = dot
  }
  id(){
    return this._id
  }
  crd(){ return this._crd }
  dob(){ return this._dob }
  doe(){ return this._doe }
  dot(){ return this._dot }

  ageAt(d = this.crd()){
    if(typeof(d) === 'string'){ d = new Date(d) }
    let b = this.dob()
    if(typeof(b) === 'string'){ b = new Date(b) }
    return d.getFullYear() - b.getFullYear()
  }

  ha(){ return this.ageAt(this.doe()) }
  ta(){ return this.ageAt(this.dot()) }



}
