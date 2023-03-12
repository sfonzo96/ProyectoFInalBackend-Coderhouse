export default class UserDTO {
    constructor(user) {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.age = user.age;
        this.role = user.role;
        this.platform = user.platform;
        this.cart = user.cart;
    }
}
