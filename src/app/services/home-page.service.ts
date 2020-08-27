import { NoticeModel } from './../models/notice-model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private firestore: AngularFirestore) { }

  getNotices(){
    return this.firestore.collection('noticies').snapshotChanges();
  }

  saveNotice(notice: NoticeModel){
    const noticeJson = JSON.parse(JSON.stringify(notice));
    return this.firestore.collection('noticies').add(noticeJson);
  }

  updateNotice(notice: NoticeModel){
    delete notice.id;
    this.firestore.doc('noticies/' + notice.id).update(notice);
  }

  deleteNotice(noticeId: string){
    this.firestore.doc('noticies/' + noticeId).delete();
}


}
