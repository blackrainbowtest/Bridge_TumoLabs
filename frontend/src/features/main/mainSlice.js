import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    workSlider: [
        {
            id: "WS001",
            bgImage: null,
            title: "Shaping Khoronq’s future with “Armath”",
            description: "“Armath”: Algorithm of the Future",
            url: null
        },
        {
            id: "WS002",
            bgImage: null,
            title: "Meta Gait",
            description: "Let’s help our veterans get back on their feet",
            url: null
        },
        {
            id: "WS003",
            bgImage: null,
            title: "Gagarin project's music program",
            description: " \"The program enters homes and communities through students and brings about positive change to our lives.\"",
            url: null
        }
    ]
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        // FIXME: add reducers
    },
});

// FIXME: uncomment after reducer add
// export const { } = mainSlice.actions;
export default mainSlice.reducer;