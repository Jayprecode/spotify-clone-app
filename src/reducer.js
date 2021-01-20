export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
//Remove After finished developing
  token:
    "BQDKNXG172DHQWaOQFdorBo8fggOl_BqOMb9QZHDA7S7NqRjA8LDxqlw_rSJj09T8HA56e8rQSwECR7qhkNoYMl105JFPKTGxjEzZVWsI_CKxNDn4C5Y-IeFt_mtj8xaypy1G9ZmmSJ2qZAnG7oCbphnwUwoWrq97vXonUIQ7_c6xrPS",
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}
export default reducer;