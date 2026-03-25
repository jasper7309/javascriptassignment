1. DOM Document Object Model is a tree-like object structure in which browsers represents a webpage.

2. The document object is the entry point to the DOM. It represents the entire webpage and provides methods and properties to access and manipulate HTML elements.

3. they are all DOM methods used to get data 

    getElementById gets just one html element that has a specified ID
    getElementByClassName returns a list of elements with a specified class name
    querySelector retrives the first instance of a specified css selector
    querySelectorAll retrieves all instances of a specified css selector

4. innerHtml is a method used to insert texts/html elements in a page tags are parsed as HTML
   textContent is a DOM property used to insert/append just texts inside a html tag/page no HTML parsing

5. to change the text of an element we used the getElementById method to access the element and the textContent property  to change the text 
 (document.getElementById("text").textContent = "hii my name is jasper")

 to change the style of an element we get access to the element using getElementById then we use the .style property to 
 change the styles

 document.getElementById("text").style.color = "purple"
    
6.  in javascripts events are actions performed by the user when interacting with a webpage interface
    
7. event listeners are functions that constantly wait for events to occur and carry out an action/task when the events occurs

8. two methods we can use the .onclick property or the addEventListener function
 
   button.onclick = function() {
  console.log("clicked");
  };
   or const button = document.getElementById("button");
      button.addEventListener("click", function() {
        .......
      });

9. onclick is a property while addEventListener is a function
   .onclick can only wait for one event while addEventListener can listen to multtiple event instances

10. You must wait for the DOM to load because JavaScript may run before HTML elements exist. If you try to access elements too early, you get null errors