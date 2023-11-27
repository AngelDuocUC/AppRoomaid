import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GiphyService } from '../../giphy.service'; 

@Component({
 selector: 'app-newchat',
 templateUrl: './newchat.page.html',
 styleUrls: ['./newchat.page.scss'],
})
export class NewchatPage implements OnInit {

 messages: { sender: string, text: string,isGif?: boolean }[] = [
    { sender: 'Juan', text: 'Hola! Que paso???' },
    { sender: 'Sarah', text: 'Quien fue el cochino que no limpio el baño??' },
    { sender: 'Miguel', text: 'Le tocaba al Juan 🗿🗿🗿 ' },
 ];
 newMessage: string = '';
 gifQuery: string = '';

 constructor(private router: Router, private giphyService: GiphyService) { }

 ngOnInit() {
 }

 navigateToHome() {
    this.router.navigate(['tabs/home']);
 }

 sendGif() {
  if (this.gifQuery.trim() !== '') {
     this.giphyService.searchGifs(this.gifQuery)
       .then(data => {
         if (data && data.data && data.data.length > 0) {
           const gifUrl = data.data[0].images.fixed_height.url;
           this.messages.push({ sender: 'Nico', text: gifUrl, isGif: true });
         }
       });
     this.gifQuery = '';
  }
 }

 sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({ sender: 'Nico', text: this.newMessage });
      this.newMessage = '';
    } else if (this.gifQuery.trim() !== '') {
      this.sendGif();
    }
 }
}