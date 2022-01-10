import { createSlice } from '@reduxjs/toolkit'

const initialValue = {
    name: "",
    imageUrl: "",
    email: ""
}

export const sliceUser = createSlice({
    name: "user",
    initialState: {
        users: initialValue
    },
    reducers: {
        saveInfo: (state, action) => {
            const newUser = {...action.payload}
            state.users = newUser
        },
        deleteInfo: (state) => {
            state.users = initialValue
        }
    }
})

export const { saveInfo, deleteInfo } = sliceUser.actions;
export default sliceUser.reducer;