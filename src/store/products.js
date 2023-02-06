import {createSlice} from "@reduxjs/toolkit";

const initialState ={
      questions:[
        {
          question: "What's your skin type?",
          answers: [
            {
              image:
                "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              value: "Normal",
            },
            {
              image:
                "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwzMTE5Nzc4OHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
              value: "Combination",
            },
            {
              image:
                "https://images.unsplash.com/photo-1601049541079-473f79fd3746?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzMTE5Nzc4OHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
              value: "Senstive",
            },
            {
              image:
                "https://images.unsplash.com/photo-1585652757146-e9d00bf2810c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8MzExOTc3ODh8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
              value: "Oily",
            },
          ],
        },
        {
          question: "What's your top concern?",
          answers: [
            { image: "https://images.unsplash.com/photo-1614859137322-20b54ff5d179?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bG90aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", value: "Loss of Firmness" },
            { image: "https://images.unsplash.com/photo-1585832622886-272fb3a927e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjF8MzExOTc3ODh8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", value: "Loss Of Elasticity" },
            { image: "https://images.unsplash.com/photo-1591375372170-5ad1e4ed461f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGxvdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", value: "Hyperpigmentation" },
            { image: "https://images.unsplash.com/photo-1623676706130-60a5606f8a5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGxvdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", value: "Dryness" },
            { image: "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjJ8MzExOTc3ODh8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", value: "Acne" },
            { image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGxvdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", value: "Dark Circles" },
            { image: "https://images.unsplash.com/photo-1623934630675-400ad1a1702b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fGxvdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", value: "Pigmentation" },
            { image: "https://images.unsplash.com/photo-1591375372170-5ad1e4ed461f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGxvdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", value: "Aging" },
          ],
        },
        {
          question: "What's your current skincare goal?",
          answers: [
            { image: "https://images.unsplash.com/photo-1625848354799-899651e425a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk4fHxsb3Rpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", value: "Even Skin Tone" },
            { image: "https://images.unsplash.com/photo-1593034107412-383866cbf46a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY3fHxsb3Rpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", value: "Hydrated" },
            { image: "https://images.unsplash.com/photo-1625848519294-129bf1cda9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk1fHxsb3Rpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", value: "Radiant" },
          ],
        },
        {
          question: "Which of these is the biggest plus for you?",
          answers: [
            { image: "https://images.unsplash.com/photo-1607522114939-5c268877b72f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE2fHxsb3Rpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", value: "Vegan," },
            { image: "https://images.unsplash.com/photo-1630398777700-afb6d24a502d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM5fHxsb3Rpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", value: "Fragrance Free" },
          ],
        },
      ],
    choices : []
}


const reducer = {
    addAnswer:(state , action)=>{
        state.choices.push(action.payload)
        console.log(state , action)
    },
    deleteAnswer:(state, action) =>{
        state.choices.splice(action.payload,1)
    }
    
}
export const products = createSlice({
    initialState,
    name: "products",
    reducers : reducer

})
export default products.reducer
export const {addAnswer , deleteAnswer} = products.actions;

