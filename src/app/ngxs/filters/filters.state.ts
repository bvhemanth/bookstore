import { State, Action, Selector, StateContext } from '@ngxs/store';
import { FiltersAction } from './filters.actions';
import * as action from './filters.actions';

export interface FiltersStateModel {
  items: string[];
}

@State<FiltersStateModel>({
  name: 'filters',
  defaults: {
    items: []
  }
})
export class FiltersState {

  @Selector()
  public static getState(state: FiltersStateModel) {
    return state;
  }

  @Action(action.FiltersAction)
  public add(ctx: StateContext<FiltersStateModel>, actions : action.FiltersAction ) {
    const stateModel = ctx.getState();
    stateModel.items = [...stateModel.items, actions.payload];
    ctx.setState(stateModel);
  }
}
