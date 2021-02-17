import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { FiltersState, FiltersStateModel } from './filters.state';
import { FiltersAction } from './filters.actions';

describe('Filters store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([FiltersState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: FiltersStateModel = {
      items: ['item-1']
    };
    store.dispatch(new FiltersAction('item-1'));
    const actual = store.selectSnapshot(FiltersState.getState);
    expect(actual).toEqual(expected);
  });

});
