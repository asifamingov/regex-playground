import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {Form, FormGroup, FormsModule} from '@angular/forms';

interface Results {
  match?: object;
  stringEntered: string;
  flags: string;
  method: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public Mod: any;
  regexMod: any;
  stringMod: any;
  regexFlagMod: any = 'g';
  obj: Results;
  RegExpMethodMod: any;
  stringMethodMod: any;

  constructor() {}


  calRegex(calForm: FormGroup) {
    if (calForm.valid) {
      let res: any;
      const regexMethod = calForm.controls.RegExpMethod.value;
      const stringMethod = calForm.controls.stringMethod.value;
      const regexFlag = calForm.controls.regexFlag.value;
      const regexVal = new RegExp(calForm.controls.regexInput.value, 'g');
      const stringVal = calForm.controls.stringInput.value;
      if (regexMethod === 'exec') {
        res = regexVal.exec(stringVal);
      }
      if (regexMethod === 'test') {
        res = regexVal.test(stringVal);
      }
      if (stringMethod === 'match') {
        res = stringVal.match(regexVal);
      }
      if (stringMethod === 'replace') {
        res = stringVal.replace(regexVal);
      }
      if (stringMethod === 'search') {
        res = stringVal.search(regexVal);
      }
      if (stringMethod === 'split') {
        res = stringVal.split(regexVal);
      }

      // console.log(stringVal.match(regexVal));
      this.obj = {
        match : res,
        stringEntered : stringVal,
        flags : regexFlag,
        method: regexMethod
      };
    }
  }
}
