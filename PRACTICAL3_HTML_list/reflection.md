## Main Concepts Applied

### Headings and Text Alignment
I used headings (`<h1>`, `<h3>`) to effectively organize content hierarchically, making it more readable and accessible. I applied inline styling to the `<h1>` tag (`style="text-align: center;"`) to center the main title, which improves readability.

### Lists (Ordered and Unordered)
I used both ordered (`<ol>`) and unordered lists (`<ul>`) to structure content logically:

- **Unordered Lists** for items that don’t require a specific order (like courses, the to-do list, and goals).
- **Ordered Lists** for sequences that need to follow a time-sensitive order (such as the daily schedule), which makes the information easier to follow.

### Nested Lists
For study goals, I combined unordered and ordered lists to create nested lists. Each goal area is represented as an unordered list item with ordered lists of tasks or objectives underneath, making it easy to follow the steps within each goal area.

### External Stylesheet Link
I linked an external CSS file (`list_styles.css`) in the `<head>` section to separate styling from HTML, which is a good practice for maintainable and scalable web development.

## Skills or Knowledge Acquired

This exercise helped me learn the importance of:

- Structuring content hierarchically using headings and lists for readability.
- Choosing between ordered and unordered lists based on the type of information.
- Using inline styles selectively and linking to an external CSS file for better formatting and layout control.

## Challenges and Solutions

### Challenge 1
Creating a properly nested list can be confusing for me, especially when ensuring the correct hierarchy between the unordered list (`<ul>`) and ordered lists (`<ol>`).

### Solution 
I made sure to clearly define each academic goal as a list item within an unordered list, followed by an ordered list for the specific tasks under each goal. However, I realized that a more proper structure would typically involve wrapping the ordered lists within each list item. This approach would ensure that the list maintains semantic correctness and logical nesting.

### Challenge 2

Maintaining distinction between (`<ul>`) , (`<ol>`) and (`<h1>` and `<h3>`) for efficient readability .

### Solution 
I created an externalCSS file and added different colors using `element selector` and `class selector` :
```
h1,h3 {
    color: blueviolet;
}

ul, ol {
    color: plum;
}

.sub {
    color: rgb(111, 12, 111);
}
```



