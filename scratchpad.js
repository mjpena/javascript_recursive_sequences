//helper function to figure out fibonacci number
function fibHelper(n){
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
var fib = function (n, node) {
	var tree = fibHelper(n);
	node.appendChild(tree.html);
		//node.style = "display: inline-block;";
	  node.setAttribute("id", "fib");
}

//helper function to figure out pell number
function pellHelper(n){
    var value; 
    //create div element and add to doc
    var div = document.createElement('div');
    //set class = "pell"
    div.setAttribute("class", "pell");
    
    //base cases
    if(n <2){
        if(n === 0) value = 0;
        else if( n === 1) value = 1;
        
        //creates p tag and puts pell number sequence and its value
        var p = document.createElement('p');
        p.textContent = 'Pell('+ n +') = ' + value;
        //adds p tag to div
        div.appendChild(p);
    }
    else{
        //gets n-1 pell term  (left child)
        var left = pellHelper(n-1);
        //get the class of the left child
        var leftClass = left.html.getAttribute("class");
        //sets the class of the left child
        left.html.setAttribute("class", leftClass + "pell-left");
        
        //gets n-2 pell term (right child)
        var right = pellHelper(n-2);
        var rightClass = right.html.getAttribute("class");
        //sets the class of the right child
        right.html.setAttribute("class", rightClass + "pell-right");
        
        //f(n) = 2*f(n-1) + f(n-2)
        value = 2*left.value + right.value;
        //creates p tag and puts f(n) and its value in it
        var p = document.createElement('p');
        p.textContent = 'Pell(' + n + ') = ' + value;
        
        //add p tag to doc
        div.appendChild(p);
        //add left and right child to doc
        div.appendChild(left.html);
        div.appendChild(right.html);
    }
    //returns the pell number
    return { 'value': value, 'html': div};
}


//function to figure out pell number
var pell = function(n, node){
    var tree = pellHelper(n);
	node.appendChild(tree.html);
	  node.style = "display: inline-block;";
	  node.setAttribute("id", "pell");
}


//helper function to figure out tribonacci number
function tribHelper(n){
    var value; 
    //create div element and add to doc
    var div = document.createElement('div');
    //set class = "trib"
    div.setAttribute("class", "trib");
    
    //base cases
    if(n <3){
        if(n === 0) value = 0;
        else if( n === 1) value = 0;
        else if( n === 2) value = 1;
        
        //creates p tag and puts trib number sequence and its value
        var p = document.createElement('p');
        p.textContent = 'Trib('+ n +') = ' + value;
        //adds p tag to div
        div.appendChild(p);
    }
    else{
        //gets n-1 tribonacci term  (left child)
        var left = tribHelper(n-1);
        //get the class of the left child
        var leftClass = left.html.getAttribute("class");
        //sets the class of the left child
        left.html.setAttribute("class", leftClass + "trib-left");
        
        //gets n-2 tribanocci term (mid child)
        var mid = tribHelper(n-2);
        //get the class of the mid child
        var midClass = mid.html.getAttribute("class");
        //sets the class of the mid child
        mid.html.setAttribute("class", midClass + "trib-mid");
        
        //gets n-3 tribonacci term (right child)
        var right = tribHelper(n-3);
        var rightClass = right.html.getAttribute("class");
        //sets the class of the right child
        right.html.setAttribute("class", rightClass + "trib-right");
        
        //f(n) = 2*f(n-1) + f(n-2) + f(n-3)
        value = left.value + mid.value + right.value;
        //creates p tag and puts f(n) and its value in it
        var p = document.createElement('p');
        p.textContent = 'Trib(' + n + ') = ' + value;
        
        //add p tag to doc
        div.appendChild(p);
        //add left and right child to doc
        div.appendChild(left.html);
        div.appendChild(mid.html);
        div.appendChild(right.html);
    }
    //returns the tribonacci number
    return { 'value': value, 'html': div};
}


//function to figure out tribonacci number
var trib = function(n, node){
    var tree = tribHelper(n);
	node.appendChild(tree.html);
	  //node.style = "display: inline-block;";
	  node.setAttribute("id", "trib");
}


var style = document.createElement('style');
//style.textContent = 
document.querySelector('body').appendChild(style);

var divMakerMaker = function(color, id) {
	return function() {
		var div = document.createElement('div');
		div.setAttribute('class', color + ' shadowed stuff-box');
		div.setAttribute('id', id);
		document.body.appendChild(div);
	}
}


var divMaker = function(id) {
	return function() {
		var div = document.createElement('div');
		div.setAttribute('id', id);
		document.body.appendChild(div);
	}
}

var fibDiv = divMakerMaker('fib');
var pellDiv = divMakerMaker('pell');
var tribDiv = divMakerMaker('trib');

fibDiv();
pellDiv();
tribDiv();


fib(3, document.querySelector('.fib'));
pell(3, document.querySelector('.pell'));
trib(3, document.querySelector('.trib'));

