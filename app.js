document.getElementById("button1").addEventListener("click", getJokes);

function getJokes(e){
    const number = document.getElementById("number").value;
    
    let xhr = new XMLHttpRequest();

    xhr.open("GET",`http://api.icndb.com/jokes/random/${number}`,true);

    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
        }
    }

    xhr.send();

    e.preventDefault();
}