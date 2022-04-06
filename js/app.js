function post (){
    axios.request ({
        method : "GET",
        url : "https://jsonplaceholder.typicode.com/posts"
    }).then(postSuccess).catch(postFail);
}

function postSuccess (response) {
    console.log(response);
    console.log(response.data);
    document.getElementById("post").innerText = "You posted! Yay!";
}

function postFail (error) {
    console.log(error);
}

document.getElementById("postJsonButton").addEventListener('click', post);


function patch () {
    axios.request ({
        method : "PATCH", 
        url : "https://jsonplaceholder.typicode.com/posts/1"
    }).then(patchSuccess).catch(patchFail);
}

function patchSuccess (response) {
    console.log(response);
    console.log(response.data);
}

function patchFail (error) {
    console.log(error);
}

document.getElementById("patchJson").addEventListener('click', patch);

function baleeted () {
    axios.request ({
        method : "DELETE",
        url: "https://jsonplaceholder.typicode.com/posts/1"
    }).then(deleteSuccess).catch(deleteFail);
}

function deleteSuccess (response) {
    console.log(response);
    console.log(response.data);
}

function deleteFail (error) {
    console.log(error);
}

document.getElementById("deleteJson").addEventListener('click', baleeted);

function get () {
    axios.request ({
        method : "GET",
        url : "https://jsonplaceholder.typicode.com/posts"
    }).then(getSuccess).catch(getFail);
}

function getSuccess (response) {
    console.log(response);
    console.log(response.data);
    fetch('https://jsonplaceholder.typicode.com/posts/').then((response)=>response.json()).then((json) => console.log(json));
    document.getElementById("allPosts").innerText = response;
}

function getFail (error) {
    console.log(error);
}

document.getElementById("getJson").addEventListener('click', get);