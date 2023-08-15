export default class User{
  constructor({id=null, firstName, lastName, email, password}) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.password = password
    this.id = id
  }
}

export const userConverter = {
  toFirestore: (user) => {
    return {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    }
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data()
    const u = new User({...data})
    u.id = snapshot.id
    return u
  },
}