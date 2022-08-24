import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
export interface CharData {
  name: string;
  ilvl: number;
  class: string;
}
export interface CharGroup {
  name: string;
  characters: CharData[];
  color?: string;
}

@Component({
  selector: 'app-tranquil',
  templateUrl: './tranquil.component.html',
  styleUrls: ['./tranquil.component.scss'],
})
export class TranquilComponent implements OnInit {
  characters: CharData[] = [
    {
      name: 'Hinatsoru',
      ilvl: 1485,
      class: 'scrapper',
    },
    {
      name: 'Polarize',
      ilvl: 1475,
      class: 'shadowhuneter',
    },
    {
      name: 'Deley',
      ilvl: 1475,
      class: 'paladin',
    },
    {
      name: 'Ckusty',
      ilvl: 1490,
      class: 'sorceress',
    },
    {
      name: 'Redd',
      ilvl: 1495,
      class: 'deathblade',
    },
    {
      name: 'Monkey',
      ilvl: 1500,
      class: 'striker',
    },
    {
      name: 'Goodofwarrrrrr',
      ilvl: 1475,
      class: 'berserker',
    },
    {
      name: 'Lampage',
      ilvl: 1475,
      class: 'paladin',
    },
    {
      name: 'Thopaz',
      ilvl: 1490,
      class: 'wardancer',
    },
    {
      name: 'Centelhafinal',
      ilvl: 1490,
      class: 'sorceress',
    },
    {
      name: 'Soulgoku',
      ilvl: 1495,
      class: 'soulfist',
    },
    {
      name: 'Rosalin',
      ilvl: 1480,
      class: 'wardancer',
    },
    {
      name: 'Danikah',
      ilvl: 1475,
      class: 'scrapper',
    },
    {
      name: 'Lukeskywalker',
      ilvl: 1480,
      class: 'gunlancer',
    },
    {
      name: 'Nandeusa',
      ilvl: 1490,
      class: 'wardancer',
    },
    {
      name: 'Arkmeta',
      ilvl: 1490,
      class: 'sorceress',
    },
  ];

  groups: CharGroup[] = [
    {
      name: 'DPS',
      characters: [],
    },
  ];

  showClockface = false;

  constructor() {}

  ngOnInit(): void {}

  drop(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  toggleClockface() {
    this.showClockface = !this.showClockface;
  }

  getCharacters() {
    return this.characters.sort((a, b) => a.name.localeCompare(b.name));
  }

  removeCharacter(name: string) {
    const index = this.characters.findIndex((char) => char.name === name);
    if (index >= 0) {
      this.characters.splice(index, 1);
    }
  }
}
