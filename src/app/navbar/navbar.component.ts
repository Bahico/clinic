import { Component, OnInit } from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {PostCreateComponent} from "../product/create/create.component";
import {EmployeeCreateComponent} from "../employee/create/create.component";
import {AuthorizationService} from "../authorization/authorization.service";
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  language = localStorage.getItem('language');
  language_text = ''
  constructor(
    private readonly modal: NzModalService,
    public readonly service: AuthorizationService,
    private readonly route: Router,
    private readonly translate: TranslateService
  ) { }

  ngOnInit(): void {
    if (this.language === '1' || !this.language) {
      this.language_text = "๐บ๐ธ ENGLISH"
    } else if (this.language == '2') {
      this.language_text = '๐ท๐บ ะ ัััะบะธะน'
    } else {
      this.language_text = '๐บ๐ฟ O`zbekcha'
    }
  }

  clickPostCreate() {
    this.modal.create({
      nzContent: PostCreateComponent,
      nzFooter: null,
      nzTitle: '',
      nzWidth: '600px'
    });
  }
  clickEmployeeCreate() {
    this.modal.create({
      nzContent: EmployeeCreateComponent,
      nzFooter: null,
      nzTitle: '',
      nzWidth: '600px'
    });
  }

  clickLogout() {
    localStorage.removeItem('token')
    this.service.user = undefined;
    this.route.navigate(['authorization/login']).then()
  }
  clickLanguage(language: number) {

    this.language = language.toString()
    localStorage.setItem('language', language.toString())

    if (language === 1) {
      this.language_text = "๐บ๐ธ ENGLISH"
      this.translate.use('en')
    } else if (language === 2) {
      this.language_text = '๐ท๐บ ะ ัััะบะธะน'
      this.translate.use('ru')
    } else {
      this.language_text = '๐บ๐ฟ O`zbekcha'
      this.translate.use('uz')
    }
  }
}
