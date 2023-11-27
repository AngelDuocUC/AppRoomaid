
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
 providedIn: 'root'
})
export class GiphyService {
  
 private apiKey = 'YYp96zhkzywUj2AWfOc1Tx8lhcIYuwOc';
 private apiUrl = 'https://api.giphy.com/v1/gifs/search';

 constructor(private http: HttpClient) { }

 searchGifs(query: string): Promise<any> {
    const url = `${this.apiUrl}?api_key=${this.apiKey}&q=${query}&limit=1&offset=0&rating=g&lang=en`;
    return this.http.get(url)
    .toPromise()
    .then(response => response)
    .catch(error => {
       console.error('There was an error with the Giphy API request:', error);
       return Promise.reject(error);
    });
   }
}