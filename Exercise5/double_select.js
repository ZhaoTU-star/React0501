const items = [
    {
      name: "apple",
      category: "fruit"
    },
    {
      name: "Cucumber",
      category: "vegetable"
    },
    {
      name: "Banana",
      category: "fruit"
    },
    {
      name: "Celery",
      category: "vegetable"
    },
    {
      name: "orange",
      category: "fruit"
    },
    {
      name: "sausage",
      category: "meat"
    },
    {
      name: "bacon",
      category: "meat"
    }
  ];
  
  const categorySelect = document.getElementById("category-select");
  const itemSelect = document.getElementById("item-select");
  const selectedItem = document.getElementById("selected-item");
  
  // Populate category select with unique category values from items array
  const categories = Array.from(new Set(items.map(item => item.category)));
  categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.text = category;
    categorySelect.appendChild(option);
  });
  
  // Populate item select based on selected category
  categorySelect.addEventListener("change", e => {
    const selectedCategory = e.target.value;
    itemSelect.innerHTML = "";
    const filteredItems = items.filter(item => item.category === selectedCategory);
    filteredItems.forEach(item => {
      const option = document.createElement("option");
      option.value = item.name;
      option.text = item.name;
      itemSelect.appendChild(option);
    });
  });
  
  // Update selected item text when an item is selected
  itemSelect.addEventListener("change", e => {
    const selected = e.target.value;
    selectedItem.innerText = selected ? `${selected}` : "No item selected";
  });
  
