import {Component, OnDestroy, OnInit} from '@angular/core';
import {Chat, User} from '../core/models';
import {ChatService, UserService} from '../core/services';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  chatData: Chat;
  chatHistory: string[];
  connectedUser: User;
  isSubscribe = true;
  inputText = '';

  constructor(
    private chatService: ChatService,
    private userService: UserService,
  ) {
    this.chatHistory = new Array<string>();
    this.chatService.chatHistoryList$.pipe(takeWhile(() => this.isSubscribe)).subscribe(chatHistory => {
      this.setChatHistory(chatHistory);
    });
  }

  setChatHistory(chatHistory: Chat) {
    if (chatHistory) {
      this.chatHistory.push(this.getChatFormat(chatHistory));
    }
  }

  setConnectedUser(userData: User) {
    if (userData.userName) {
      this.connectedUser = userData;
      this.chatService.setWelcomeMessage(userData);
    }
  }

  setDisconnectedUser() {
    this.chatService.setGoodbyeMessage(this.connectedUser);
  }

  ngOnInit() {
    this.userService.currentUser$.pipe(takeWhile(() => this.isSubscribe)).subscribe(user => {
      this.setConnectedUser(user);
    });
  }

  ngOnDestroy(): void {
    this.isSubscribe = false;
    this.setDisconnectedUser();
  }

  setChatMessage() {
    this.chatService.setChatMessage(this.connectedUser, this.inputText);
    this.inputText = '';
  }

  getChatFormat(chatData: Chat): string {
    const chatString = chatData.userName.concat('님의 메시지 > ', chatData.chatMessage);
    return chatString;
  }

}
