import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  carouselData = [
    {
      id: 1,
      title: 'How to add a booking source',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati laudantium nihil rerum. Modi illo cum explicabo error dolorum. Nesciunt sapiente nemo quae aliquam nostrum corporis consectetur laboriosam perspiciatis unde error.',
    },
    {
      id: 2,
      title: 'How to add a promo code',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati laudantium nihil rerum. Modi illo cum explicabo error dolorum. Nesciunt sapiente nemo quae aliquam nostrum corporis consectetur laboriosam perspiciatis unde error.',
    },
    {
      id: 3,
      title: 'How to create account',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati laudantium nihil rerum. Modi illo cum explicabo error dolorum. Nesciunt sapiente nemo quae aliquam nostrum corporis consectetur laboriosam perspiciatis unde error.',
    },
    {
      id: 4,
      title: 'How to add to cart',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati laudantium nihil rerum. Modi illo cum explicabo error dolorum. Nesciunt sapiente nemo quae aliquam nostrum corporis consectetur laboriosam perspiciatis unde error.',
    },
  ];
}
