function getElementWidth(content, padding, border) {
  // Перетворення рядків на числа шляхом видалення 'px'
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding) * 2;
  const borderWidth = parseFloat(border) * 2;

  // Розрахунок загальної ширини елемента
  return contentWidth + paddingWidth + borderWidth;
}

// Перевірка роботи функції
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
