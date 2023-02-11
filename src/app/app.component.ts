import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'resume';

   constructor(public translate: TranslateService) {}

  onSelectChange(e: Event) {
    const target = e.target as HTMLSelectElement
    console.log(target.value);

    this.translate.use(target.value)
  }
}
