import { Injectable } from '@angular/core';
import { ConstantsService } from '../../core/services/constants.service';
import { NgxSpinnerService } from 'ngx-spinner';
import moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class CommonsService {
  constructor(private spinnerService: NgxSpinnerService) {}

  date_ymd(dateValue: any): string {
    return moment(dateValue).format(ConstantsService.DATE_YMD);
  }

  date_dmy(dateValue: any): string {
    return moment(dateValue).format(ConstantsService.DATE_DMY);
  }

  date_dmmmy(dateValue: any): string {
    return moment(dateValue).format(ConstantsService.DATE_DMMMY);
  }

  date_diff_ymd(startDate: any, endDate: any): number | undefined {
    if (startDate && endDate) {
      const start = moment(startDate, ConstantsService.DATE_YMD);
      const end = moment(endDate, ConstantsService.DATE_YMD);
      return end.diff(start, 'years');
    }
    return undefined;
  }

  date_diff_days_ymd(currentDate: any, noOfDays: number): moment.Moment | undefined {
    if (currentDate && noOfDays) {
      const current = moment(currentDate, ConstantsService.DATE_YMD);
      return current.subtract(noOfDays, 'days');
    }
    return undefined;
  }

  date_last_date_of_the_month(currentDate: any): moment.Moment | undefined {
    if (currentDate) {
      return moment(currentDate, ConstantsService.DATE_DMY).endOf('month');
    }
    return undefined;
  }

  show(): void {
    this.spinnerService.show();
  }

  hide(): void {
    this.spinnerService.hide();
  }
}
