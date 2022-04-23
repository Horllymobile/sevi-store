import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LayoutService } from 'src/app/core/services/layout.service';

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.scss'],
})
export class ForgottenPasswordComponent implements OnInit {
  type!: string;

  constructor(
    private route: ActivatedRoute,
    public layoutService: LayoutService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((query) => {
      this.type = query['type'];
      console.log(this.type);
    });
  }
}
