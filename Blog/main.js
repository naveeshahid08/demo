"use strict";
/* const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => displayData(json));
}; */

/* const fetchData = async () => {
  try {
    const reponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!reponse.ok) {
      throw new Error(`Error status:${reponse.status}`);
    }

    const data = await reponse.json();
    displayData(data);
  } catch (error) {
    console.error(error);
  }
};
fetchData();
const displayData = (data) => {
  const container = document.querySelector("#blogContainer");
  data.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.innerHTML = `<h2>${post.title}</h2> <p>${post.body}</p>`;
    container.appendChild(postElement);
  });
}; */

const fetchData = async () => {
  try {
    const reponse = await fetch("https://jsonplaceholder.typicode.com/photos");
    if (!reponse.ok) {
      throw new Error(`Error status:${reponse.status}`);
    }

    const data = await reponse.json();
    displayData(data);
  } catch (error) {
    console.error(error);
  }
};
fetchData();
const displayData = (data) => {
  const container = document.querySelector("#blogContainer");
  data.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.innerHTML = `<h2>${post.title}</h2><img src="${post.url}" alt="Girl in a jacket">`;
    container.appendChild(postElement);
  });
};
