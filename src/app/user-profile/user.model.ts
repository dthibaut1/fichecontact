export class User {
/*   name : string;
  firstName : string;
  age : number;
  quote : string;
  photo : string;

  constructor(
    name: string,
    firstName: string,
    age : number,
    quote : string,
    photo : string
    ) {
      this.name = name;
      this.firstName = firstName;
      this.age = age;
      this.quote = quote;
      this.photo =photo;
  }
 */

  // OU selon recommandation typescript
  constructor(
    private _name: string,
    private _firstName: string,
    private _age: number,
    // private _ageVisible: boolean = true,
    private _quote : string,
    private _photo : string
  ) { }

  get name(): string {
    return this._name
  }

  get firstName(): string {
    return this._firstName
  }

  get age(): number {
    return this._age
  }

  // get ageVisible(): boolean {
  //   return this._ageVisible
  // }

  // set ageVisible(isVisible) {
  //   this._ageVisible = !isVisible
  // }

  get quote(): string {
    return this._quote
  }

  set quote(newQuote) {
    this._quote = newQuote;
  }

  get photo(): string {
    return this._photo
  }

}
