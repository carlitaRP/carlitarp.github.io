import { Component, OnInit } from '@angular/core';
import { InterestsService } from '../../services/interests.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
  interests: { [key: string]: string } = {}; // Cambio en el tipo de la propiedad

  constructor(private interestsService: InterestsService) { }

  ngOnInit(): void {
    this.interestsService.getInterests().subscribe(data => {
      this.interests = data;
    });
  }
}


