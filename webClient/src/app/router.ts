/**
 * 路由文件
 */
//引入路由
import { Routes } from "@angular/router"; 
import { TestComponent } from "./views/test/test.component";
import { LoginPageComponent } from './views/login-page/login-page.component';

 

export const routerConfig: Routes = [
    //路由为空时重定向到home组件
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: "test", component: TestComponent },
    { path: "login", component: LoginPageComponent }
    //页面不存在路由，一定放最后
    // { path: '**', component: Page404Component }
];