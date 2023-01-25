import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AboutPage } from '../pages/about/about';
import { YoutubePage } from '../pages/youtube/youtube';
import { NewsPage } from '../pages/news/news';
import { NewsServiceProvider } from '../providers/news-service/news-service';
import { HttpClientModule } from '@angular/common/http';
import { SubjectServiceProvider } from '../providers/subject-service/subject-service';
import { GradePage } from '../pages/grade/grade';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    AboutPage,
    YoutubePage,
    NewsPage,
    GradePage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    AboutPage,
    YoutubePage,
    NewsPage,
    GradePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsServiceProvider,
    SubjectServiceProvider
  ]
})
export class AppModule {}
