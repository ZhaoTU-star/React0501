// Implement your fetch method using XHR api, 
// so you can make get, post, put, delete with it.
function myFetchXHR(method, url, data) {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
          var response = xhr.responseText;
          try {
            response = JSON.parse(response);
          } catch (e) {}
          resolve(response);
        } else {
          reject({
            status: xhr.status,
            statusText: xhr.statusText
          });
        }
      };
      xhr.onerror = function() {
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        });
      };
      if (data) {
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(JSON.stringify(data));
      } else {
        xhr.send();
      }
    });
  }
  
  
// GET request
myFetchXHR('GET', 'https://jsonplaceholder.typicode.com/todos/1')
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.error(error);
  });

// POST request
var data = {
    name: 'John',
    age: 30
  };
  myFetchXHR('POST', 'https://jsonplaceholder.typicode.com/posts', data)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.error(error);
    });

// PUT request
var data = {
    name: 'John',
    title: 'Mr.',
    age: 30
  };
  myFetchXHR('PUT', 'https://jsonplaceholder.typicode.com/posts/1', data)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.error(error);
    });

// DELETE request
myFetchXHR('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.error(error);
  });
  
