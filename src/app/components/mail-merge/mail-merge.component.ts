/**
 * Mail Merge - This sample demonstrates the complete employee details in List report item.
 */
import { Component } from '@angular/core';
import { Globals } from '../globals';
@Component({
  selector: 'ej-sample',
  templateUrl: './mail-merge.component.html',
  styleUrls: ['./mail-merge.component.css']
})
export class MailMergeComponent {
  // Specifies the report Web API service URL. It is used to process the reports.
  public serviceUrl = Globals.SERVICE_URL;
  // Specifies the path of the RDL report file
  public reportPath: string;
  public toolbarSettings = Globals.TOOLBAR_OPTIONS;
  public onToolbarItemClick = Globals.EDIT_REPORT;

  constructor() {
    this.reportPath = 'mail-merge';
  }
}
