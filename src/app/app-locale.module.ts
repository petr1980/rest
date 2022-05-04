import { registerLocaleData } from '@angular/common';
import localeUa from '@angular/common/locales/ru-UA';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';

registerLocaleData(localeUa)

@NgModule({
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'uk-UA',
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'Грн',
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'uk-UA',
    },
  ],
})
export class AppLocaleModule { }
