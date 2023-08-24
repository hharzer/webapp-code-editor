import { configureStore, createSlice } from "@reduxjs/toolkit"
import { initialState } from "./state"

const setSelectedLanguageId = type => (state, action) => {
  state[type].selectedLanguageId = action.payload.id;
};

const slice = createSlice({
  name: "root",
  initialState,
  reducers: {
    hideNotification(state) {
      state.notifications.isActive = false
    },
    setThemeMode(state, action) {
      state.themeMode = action.payload
      localStorage.setItem("themeMode", action.payload) // Current solution is temporary
    },
    setEditorMode(state, action) {
      state.editorMode = action.payload
    },
    setIsEditorReady(state, action) {
      state.isEditorReady = action.payload
    },
    showNotification(state, action) {
      state.notifications = {
        isActive: true,
        message: action.payload.message,
        variant: action.payload.variant,
        opt: action.payload.opt
      }
    },
    editorSetSelectedLanguageId:setSelectedLanguageId("editor"),
    editorSetOptions(state, action) {
      state.editor.options = action.payload
    },
    editorSetMonacoTheme(state, action) {
      state.monacoTheme = action.payload
    },
    diffEditorSetSelectedLanguageId:setSelectedLanguageId("diffEditor"),
  }
})

export const editor = {
  setSelectedLanguageId:  slice.actions.editorSetSelectedLanguageId,
  setOptions:             slice.actions.editorSetOptions,
  setMonacoTheme:         slice.actions.editorSetMonacoTheme,
}

export const diffEditor = {
  setSelectedLanguageId:  slice.actions.diffEditorSetSelectedLanguageId,
}

export const {
  hideNotification, setThemeMode, setEditorMode, setIsEditorReady, showNotification
} = slice.actions

export const store = configureStore({
  reducer: {
    root: slice.reducer
  }
})
