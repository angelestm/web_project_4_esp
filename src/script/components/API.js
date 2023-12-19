export class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  
  defaultProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
        .then(res => {
          if (res.ok) {
            return res.json();
          }
        });
  }
  
  getUsersCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          // si el servidor devuelve un error, rechaza el promise
          return Promise.reject(`Error: ${res.status}`);
        });
  }
  
  updateProfile(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    })
        .then(res => res.json())
        .then((result) => {
          console.log(result);
          return result;
        })
        .catch((err) => {
          console.log(err);
        });
  }
  
  addNewCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then((result) => {
        console.log(result);
        return result;
      })
        .catch((err) => {
          console.log(err);
        });
}

  editAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then((result) => {
        console.log(result);
        return result;
      })
        .catch((err) => {
          console.log(err);
        });
}

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    })
        .then(res => res.json())
        .then((result) => {
          console.log(result);
          return result;
        })
        .catch((err) => {
          console.log(err);
        });
  }
  
  addLike(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._headers,
    })
        .then(res => res.json())
        .then((result) => {
          console.log(result);
          return result;
        })
        .catch((err) => {
          console.log(err);
          });
  }
  
  deleteLike(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    })
        .then(res => res.json())
        .then((result) => {
          console.log(result);
          return result;
        })
        .catch((err) => {
          console.log(err);
        });
  }

}

