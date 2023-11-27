import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  messages: any;
  newMessage: string = '';

  constructor(
    private firestore: AngularFirestore,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    this.messages = this.firestore.collection('chats').doc('chatId')
                      .collection('messages', ref => ref.orderBy('timestamp'))
                      .valueChanges();
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.firestore.collection('chats').doc('chatId').collection('messages').add({
        senderId: 'User', 
        message: this.newMessage,
        timestamp: new Date().getTime()
      }).then(() => {
        this.newMessage = ''; // Limpia el campo después de enviar el mensaje
      }).catch(error => {
        console.error('Error al enviar el mensaje:', error);
      });
    }
  }

  navigateToHome() {
    this.router.navigate(['tabs/home']);
  }
}