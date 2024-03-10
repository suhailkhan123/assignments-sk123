const transactions = [
    {
        id: 1,
        timestamp: 1656076800000,
        price: 10,
        category: 'Food',
        itemName: 'Pizza',
    },
    {
        id: 2,
        timestamp: 1656259600000,
        price: 20,
        category: 'Food',
        itemName: 'Burger',
    },
    {
        id: 3,
        timestamp: 1656019200000,
        price: 15,
        category: 'Clothing',
        itemName: 'T-Shirt',
    },
    {
        id: 4,
        timestamp: 1656364800000,
        price: 30,
        category: 'Electronics',
        itemName: 'Headphones',
    },
    {
        id: 5,
        timestamp: 1656105600000,
        price: 25,
        category: 'Clothing',
        itemName: 'Jeans',
    },
];
console.log(calculateTotalSpentByCategory(transactions));
function calculateTotalSpentByCategory(transactions) {
    let result = [];
    transactions.forEach((transaction) => {
        const { category, price } = transaction;

        // Check if the category already exists in the result array
        const existingRecord = result.find((item) => { return item.category == category });
        if (existingRecord) {
            // If the category already exists, update the totalSpent of the first occurrence
            existingRecord.totalSpent += price;
        } else {
            // If the category doesn't exist, add a new record
            result.push({
                category,
                totalSpent: price
            });
        }
    });
    return result;
  }
  