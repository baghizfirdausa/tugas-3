import { configureStore } from "@reduxjs/toolkit";
import addReducer from './add'

export default configureStore ({
  reducer: {
    add: addReducer
  }
})