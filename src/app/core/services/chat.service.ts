import { Injectable } from '@angular/core';
import {ReplaySubject} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';
import {Chat, User} from '../models';

@Injectable()
export class ChatService {
  private chatHistorySubject = new ReplaySubject<Chat>(20);
  chatHistoryList$ = this.chatHistorySubject.asObservable().pipe(distinctUntilChanged());

  setChatHistoryList(chatData: Chat) {
    this.chatHistorySubject.next(chatData);
  }

  setChatMessage(userData: User, message: string) {
    if (userData) {
      const chatMessage: Chat = {userName: userData.userName, age: userData.age, sendTime: this.getDate(), chatMessage: message};
      this.setChatHistoryList(chatMessage);
    }
  }

  setWelcomeMessage(userData: User) {
    if (userData) {
      const welcomeMessage = userData.userName.concat('(', userData.age, ')세 님이 접속하셨습니다.');
      const newWelcomeMessage: Chat = {userName: '관리자', age: '', sendTime: this.getDate(), chatMessage: welcomeMessage}
      this.setChatHistoryList(newWelcomeMessage);
    }
  }

  setGoodbyeMessage(userData: User) {
    if (userData) {
      const goodbyeMessage = userData.userName.concat('(', userData.age, ')세 님이 떠나셨습니다.');
      const newGoodbyeMessage: Chat = {userName: '관리자', age: '', sendTime: this.getDate(), chatMessage: goodbyeMessage}
      this.setChatHistoryList(newGoodbyeMessage);
    }
  }

  getDate(appendDay?: number): Date {
    const nextDay = new Date();
    if (appendDay) {
      nextDay.setDate(nextDay.getDate() + appendDay);
    }
    return nextDay;
  }

}
