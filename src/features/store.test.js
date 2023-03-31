import newsSlice, {switchViewNews} from './newsStore';
import { store } from './store';

const reducer = newsSlice.reducer;

test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
        loading: false,
        news: [],
        viewGridNews: true,
        country:'',
        count: 0,
        error: ''
      })
  })

  test('should create an action with switchViewNews', () => {
   store.dispatch(switchViewNews(false));
   expect(store.getState().news.viewGridNews).toBe(false);
  })
