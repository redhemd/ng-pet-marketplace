import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/admin/common/alert.service';

@Component({
  selector: 'app-client-alert',
  templateUrl: './client-alert.component.html',
  styleUrls: ['./client-alert.component.scss'],
})
export class ClientAlertComponent implements OnInit, OnDestroy {
  @Input() delay = 5000;

  public text: string;
  public type = 'success';
  alertSub: Subscription;

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.alertSub = this.alertService.alert$.subscribe((alert) => {
      this.text = alert.text;
      this.type = alert.type;

      const timeout = setTimeout(() => {
        clearTimeout(timeout);
        this.text = '';
      }, this.delay);
    });
  }

  ngOnDestroy(): void {
    if (this.alertSub) {
      this.alertSub.unsubscribe();
    }
  }
}
