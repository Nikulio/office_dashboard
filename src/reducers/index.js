import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import {submitUserReducer} from "./submitUserReducer";
import {renderSidebarReducer} from "./renderSidebarReducer";
import {changeSidebarReducer} from "./changeSidebarReducer";
import {fetchNotificationsReducer} from "./fetchNotificationsReducer";
import {fetchUsersReducer} from "./fetchUsersReducer";

export default combineReducers({
  form: formReducer,
  sidebar: renderSidebarReducer,
  user: submitUserReducer,
  users: fetchUsersReducer,
  menu: changeSidebarReducer,
  notifications: fetchNotificationsReducer
});
