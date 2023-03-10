import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {PostCreateModule} from "./product/create/post-create.module";
import {NzModalModule} from "ng-zorro-antd/modal";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import {EmployeeCreateModule} from "./employee/create/employee-create.module";
import { HomeComponent } from './home/home.component';
import {NzButtonModule} from "ng-zorro-antd/button";
import { FooterComponent } from './footer/footer.component';
import {NzIconModule} from "ng-zorro-antd/icon";
import {AimOutline, PhoneOutline, MailOutline, PlusCircleOutline, PlusOutline} from "@ant-design/icons-angular/icons";
import {ProductModule} from "./product/product.module";
import {EmployeeModule} from "./employee/employee.module";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NzLayoutModule,
        NzMenuModule,
        PostCreateModule,
        NzModalModule,
        HttpClientModule,
        EmployeeCreateModule,
        NzButtonModule,
        NzIconModule,
        NzIconModule.forChild([AimOutline, PhoneOutline, PlusCircleOutline, MailOutline, PlusOutline]),
        ProductModule,
        EmployeeModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
