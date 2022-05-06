import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    posts: [],
  },
  reducers: {
    addPost(state, action) {
      console.log(action.payload);
      state.posts.push({
        title: action.payload.title,
        text: action.payload.text,
        author: action.payload.author,
        id: new Date().getTime(),
        date:
          new Date().toISOString().slice(0, 10) +
          " " +
          new Date().getHours() +
          ":" +
          new Date().getMinutes(),
      });
      localStorage.setItem("posts", JSON.stringify(state.posts));
    },
    setPosts(state, action) {
      console.log(action.payload);
      state.posts = action.payload;
    },
    saveEditPost(state, action) {
      console.log(action.payload);
      const editPost = state.posts.find(
        (post) => post.id === action.payload.id
      );
      editPost.title = action.payload.title;
      editPost.text = action.payload.text;
    },

    removePost(state, action) {
      console.log(action.payload.id);
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
    },
    // sortPosts(state, action) {
    //   console.log(action.payload);
    //   switch ({...action.payload}) {
    //     case "titleIncrement":
    //       return (state.posts = state.posts.sort((a, b) =>
    //         a.title.toLowerCase().localeCompare(b.title.toLowerCase())
    //       ));
    //     case "titleDecrement":
    //       return state.posts.sort((a, b) =>
    //         b.title.toLowerCase().localeCompare(a.title.toLowerCase())
    //       );
    //     case "authorIncrement":
    //       return state.posts.sort((a, b) =>
    //         a.author.toLowerCase().localeCompare(b.author.toLowerCase())
    //       );
    //     case "authorDecrement":
    //       return state.posts.sort((a, b) =>
    //         b.author.toLowerCase().localeCompare(a.author.toLowerCase())
    //       );
    //     case "dateIncrement":
    //       return state.posts.sort((a, b) => a.id - b.id);
    //     case "dateDecrement":
    //       return state.posts.sort((a, b) => b.id - a.id);
    //     default:
    //       return state.posts;
    //   }
    // },
  },
});

export const { addPost, setPosts, saveEditPost, removePost, sortPosts } =
  todoSlice.actions;
export default todoSlice.reducer;
