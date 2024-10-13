import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishItem } from '../../shared/models/wishitem';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css',
})
export class WishListComponent implements OnInit{
  @Input() wishes : WishItem[] = [];

  ngOnInit(): void {
  }
  @Input() filters!: ((item: WishItem) => boolean)[];

  listFilter: any = 0;

  get visibleItems(): WishItem[] {
    return this.wishes.filter(this.filters[this.listFilter]);
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
