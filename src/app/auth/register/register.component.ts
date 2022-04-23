import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LayoutService } from 'src/app/core/services/layout.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  type!: string;
  display: boolean = false;

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

  showDialog() {
    this.display = true;
  }
}
