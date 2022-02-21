(function () {

    let ourProducts = [
        { _id: '101', name: 'Slim Jorts', price: '$34.99' },
        { _id: '675', name: 'Triple-Tier Jeans', price: '$79.99' },
        { _id: '426', name: 'High-Waisted Boots', price: '$99.99' },
        { _id: '745', name: '100 Pocket Cargo Pants', price: '$49.99' },
        { _id: '864', name: '0 Pocket Cargo Pants', price: '$48.99' },
        { _id: '017', name: 'Loose-Fit Skinny Jeans', price: '$69.99' },
        { _id: '091', name: 'Transparent Khakis', price: '$29.99' },
        { _id: '096', name: 'Transparent Chinos', price: '$24.99' },
        { _id: '334', name: 'Denim Socks', price: '$854.99' },
    ];

    function productList (items) {
        let list = document.getElementById("myList");
        list.innerHTML = '';
        items.forEach((item)=>{
            let li = document.createElement("li");
            li.innerText = item.name + ' --------- ' + item.price;
            list.appendChild(li);
        })
    }

    productList(ourProducts);


    function orderBy(sortValue) {
        // Sort method varies based on what type of value we're sorting
        var sortedResults = (sortValue === 'name') ?
            ourProducts.sort(function (a, b) { // Strings need to be sorted in a slightly more complex way
                var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                // Sorts alphabetically.  -1 puts it before. 1 puts it after
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            }) :
            ourProducts.sort(function (a, b) { // Numbers a booleans are much simpler.
                // Just need postive or negative number
                // Object properties can be accessed through a string representing their name
                return a[sortValue] - b[sortValue];
            });
        productList(sortedResults);
    }

    document.querySelector('#myDropdown').addEventListener('change', function(event){
        // Event is the JavaScript event that transpired, in our change a CHANGE event.
        // Target is the element it was performed on, useful for when the event targets
        // multiple elements.
        // Value has the name implies is the current value of the input element, if there is one
        orderBy(event.target.value);
    });

    window.onload = function() {
        var sortSel = document.getElementById("sortBy");

        for (var x in ourProducts) {
            sortSel.options[sortSel.options.length] = new Option(x, x);
        }

    }


})(); // Wrap entire file in self executing function.
      // Keeping all variables declared in this file inside a local scope.