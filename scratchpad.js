//helper function to figure out fibonacci number
function fibHelper(n){
    console.log("here");
    var value; 
    //create div element and add to doc
    var div = document.createElement('div');
    //set class = "fib"
    div.setAttribute("class", "fib");
    
    //base cases
    if(n <2){
        if(n === 0) value = 0;
        else if( n === 1) value = 1;
        
        //creates p tag and puts fib number sequence and its value
        var p = document.createElement('p');
        p.textContent = 'Fib('+ n +') = ' + value;
        //adds p tag to div
        div.appendChild(p);
    }
    else{
        //gets n-1 fibonacci term  (left child)
        var left = fibHelper(n-1);
        //get the class of the left child
        var leftClass = left.html.getAttribute("class");
        //sets the class of the left child
        left.html.setAttribute("class", leftClass + "fib-left");
        
        //gets n-2 fibonacci term (right child)
        var right = fibHelper(n-2);
        var rightClass = right.html.getAttribute("class");
        //sets the class of the right child
        right.html.setAttribute("class", rightClass + "fib-right");
        
        //f(n) = f(n-1) + f(n-2)
        value = left.value + right.value;
        //creates p tag and puts f(n) and its value in it
        var p = document.createElement('p');
        p.textContent = 'Fib(' + n + ') = ' + value;
        
        //add p tag to doc
        div.appendChild(p);
        //add left and right child to doc
        div.appendChild(left.html);
        div.appendChild(right.html);
    }
    //returns the fibonacci number
    return { 'value': value, 'html': div};
}

//function to figure out fibonacci number
var fib = function (n) {
	var tree = fibHelper(n)
		//node.appendChild(tree.html);
		//node.style = "display: inline-block;";
	    //node.setAttribute("id", "fib");
}

fib(10);
fib(11);