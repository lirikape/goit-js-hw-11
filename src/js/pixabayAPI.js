import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '39790443-28245d1c9624c9b106532caae';

export class PixabayAPI {
    #page = 1;
    #per_page = 40;
    #query = '';
    #totalPhotos = 0;
  
    async getPhotos() {
      const params = {
        page: this.#page,
        q: this.#query,
        per_page: this.#per_page,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      };
  
      const urlAXIOS = `?key=${API_KEY}`;
      // const urlAXIOS = `?key=${API_KEY}&q=${this.#query}&page=${this.#page}&per_page=${this.#per_page}`;
  
      const { data } = await axios.get(urlAXIOS, { params });
      // console.log('data: ', data);
      return data;
    }
  
    get query() {
      // this.#query;
      return this.#query;
    }
  
    set query(newQuery) {
      this.#query = newQuery;
    }
  
    incrementPage() {
      this.#page += 1;
    }
  
    resetPage() {
      this.#page = 1;
    }
  
    setTotal(total) {
      this.#totalPhotos = total;
    }
  
    hasMorePhotos() {
      // console.log('page', this.#page);
      // console.log('totalPhotos', this.#totalPhotos);
      // console.log('per_page', this.#per_page);
      return this.#page < Math.ceil(this.#totalPhotos / this.#per_page);
    }
  }