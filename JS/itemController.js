// Create a ItemsController class
class ItemsController {
    // Set up the items and currentId property in the contructor
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }

    // Create the addItem method
    addItem(name, quantity, price) {
        const item = {
            // Increment the currentId property
            id: this.currentId++,
            name: name,
            quantity: quantity,
            price: price
        };

        // Push the item to the items property
        this.items.push(item);
    }
}