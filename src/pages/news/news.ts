import { Component } from '@angular/core';
import { Content, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { NewsServiceProvider } from '../../providers/news-service/news-service';
import { News, Article  } from '../../models/news';
import { publish } from 'rxjs/operators/publish';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

news: News;
articles: Article[];
total: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public newsServPro: NewsServiceProvider,
              public loadCtrl: LoadingController
               ) {
  }
getNews(): void{

let loading = this.loadCtrl.create({
  content: 'กำลังโหลดข่าว...',
  duration: 3000
});
 

  this.newsServPro.getNews().subscribe(
    (news) => {
      this.news = news;
      this.articles = news.articles;
      this.total = this.news.totalResults;
    }
  )
}

ionViewWillEnter(){
  this.getNews();
}
}
