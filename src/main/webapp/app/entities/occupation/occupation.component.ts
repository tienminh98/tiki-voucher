import { Component } from '@angular/core';

@Component({
  selector: 'jhi-occupation',
  standalone: true,
  imports: [],
  templateUrl: './occupation.component.html',
  styleUrl: './occupation.component.scss'
})
export class OccupationComponent {
  jobList: any[] = [
    {
      image: 'content/images/job0.jpeg',
      title: 'Đầu bếp'
    },
    {
      image: 'content/images/job1.jpeg',
      title: 'Xây dựng'
    },
    {
      image: 'content/images/job2.jpeg',
      title: 'Nông nghiệp'
    },
    {
      image: 'content/images/job3.jpeg',
      title: 'Trang trại'
    },
    {
      image: 'content/images/job4.jpeg',
      title: 'Ngành nghề khác'
    },
    {
      image: 'content/images/job5.jpeg',
      title: 'Khách sạn'
    },
  ];


}
