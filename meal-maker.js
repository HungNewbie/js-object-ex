const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck) {
        if (typeof mealToCheck === 'string') {
            this._meal = mealToCheck;
        }
    },
    set price(priceToCheck) {
        if (typeof priceToCheck === 'number') {
            this._price = priceToCheck;
        }
    },
    get todaysSpecial() {
        if (typeof this._meal === 'string' && typeof this._price === 'number') {
            return `Welcome to our restaurant. Today we have an incredible deal of ${this._meal} for only ${this._price} dollar.`
        }
        else {
            console.log('Meal or price was not set correctly!')
        }
    }
}
menu.meal = 'ant meat';
menu.price = 516;
console.log(menu.todaysSpecial);
