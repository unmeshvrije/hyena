const queryClick = (event) => {
    console.log("button is clicked");
    queryStr = document.createTextNode("? bornIn Amsterdam");
    document.getElementById("content").appendChild(queryStr);
};

document.getElementById("query").addEventListener('click', queryClick)