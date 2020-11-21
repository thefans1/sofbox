import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  items = [
    { title: 'consectetur adipiscing elit', subtitle: 'Proin sed risus mattis', image: 'https://dummyimage.com/384x250/000/fff', rating: '4', regular_price: '99.00', offer_price: '50.00', type: '' },
    { title: 'Sed dictum orci vel', subtitle: 'Proin sed risus mattis', image: 'https://dummyimage.com/384x250/000/fff', rating: '5', regular_price: '199.00', offer_price: '15.00', type: 'New' },
    { title: 'neque venenatis', subtitle: 'Proin sed risus mattis', image: 'https://dummyimage.com/384x250/000/fff', rating: '4', regular_price: '1000.00', offer_price: '500.00', type: '' },
    { title: 'Etiam interdum nisi et', subtitle: 'Proin sed risus mattis', image: 'https://dummyimage.com/384x250/000/fff', rating: '4', regular_price: '100.00', offer_price: '50.00', type: '' },
    { title: 'Proin at diam sit amet', subtitle: 'Proin sed risus mattis', image: 'https://dummyimage.com/384x250/000/fff', rating: '5', regular_price: '150.00', offer_price: '50.00', type: 'New' },
    { title: 'augue rhoncus ornare', subtitle: 'Proin sed risus mattis', image: 'https://dummyimage.com/384x250/000/fff', rating: '4', regular_price: '599.00', offer_price: '99.00', type: '' },
    { title: 'Nulla venenatis mi sed', subtitle: 'Proin sed risus mattis', image: 'https://dummyimage.com/384x250/000/fff', rating: '3', regular_price: '199.00', offer_price: '50.00', type: '' },
    { title: 'Etiam interdum nisi et', subtitle: 'Proin sed risus mattis', image: 'https://dummyimage.com/384x250/000/fff', rating: '4', regular_price: '100.00', offer_price: '50.00', type: '' },
    { title: 'dignissim orci quis', subtitle: 'Proin sed risus mattis', image: 'https://dummyimage.com/384x250/000/fff', rating: '5', regular_price: '150.00', offer_price: '50.00', type: 'New' }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
