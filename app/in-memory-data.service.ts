import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 11, name: 'Mr. nice' },
      { id: 12, name: 'Jay 305' },
      { id: 13, name: 'Kendrick' },
      { id: 14, name: 'Dom' },
      { id: 15, name: 'Drake' },
      { id: 16, name: 'Yachty' },
      { id: 17, name: 'Travis' },
      { id: 18, name: 'Rashad' },
      { id: 19, name: 'Q' },
      { id: 20, name: 'Noname' }
    ];
    return { heroes };
  }
}
