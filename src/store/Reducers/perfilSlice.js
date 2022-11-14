import { createSlice } from "@reduxjs/toolkit";
import { insertPost, getPosts } from "../../db";
import Perfil from "../../models/Perfil";

const initialState = {
    perfil: new Perfil(0, ''),
  };
  
  
  const perfilSlice = createSlice({
      name: "perfil",
      initialState,
      reducers: {
        addPost: (state, action) => {
          const newPerfil = new Perfil(
            action.payload.id.toString(),
            action.payload.image
          );

          state.perfil = newPerfil
        },
        setPosts: (state, action) => {
        
          state.perfil = action.payload;
        }
      },
    });

export const { addPost, setPosts } = perfilSlice.actions;


export const savePost = (image) => {
    return async (dispatch) => {
      try {
        const result = await insertPost(image);
        dispatch(addPost({ id: result.insertId, image}));
      } catch (error) {
        console.log("error", error);
        throw error;
      }
    }
  };
  

  export const loadPosts = () => {
    return async (dispatch) => {
      try {
        const result = await getPosts();
        dispatch(setPosts(result?.rows?._array));
      } catch (error) {
        console.log("error", error);
        throw error;
      }
    };
  }

export default perfilSlice.reducer