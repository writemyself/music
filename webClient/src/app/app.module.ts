import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { TestComponent } from './views/test/test.component';

//引入路由模块
import { RouterModule } from "@angular/router";
//引入路由
import { routerConfig } from './router';
import { LoginByPhoneComponent } from './components/login-by-phone/login-by-phone.component';
import { RegisterByPhoneComponent } from './components/register-by-phone/register-by-phone.component';
import { LoginPageComponent } from './views/login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,   //测试页
    LoginByPhoneComponent,
    RegisterByPhoneComponent,
    LoginPageComponent,    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
