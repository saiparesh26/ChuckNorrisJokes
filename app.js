document.getElementById("button1").addEventListener("click", getJokes);

function getJokes(e){
    const number = document.getElementById("number").value;
    
    let xhr = new XMLHttpRequest();

    xhr.open("GET",`http://api.icndb.com/jokes/random/${number}`,true);

    xhr.onload = function(){
        if(this.status === 200){
            const jokes = JSON.parse(this.responseText);

            console.log(jokes);
            let output = "";

            if(jokes.type === "success"){
                jokes.value.forEach(function(joke){
                    output += `
                        <li>${joke.joke}</l1>
                    `
                });

                document.getElementById("get-jokes").innerHTML = output;
            }
        }
    }

    xhr.send();

    e.preventDefault();
}

