import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import type { AppDispatch, RootState } from "./store";


export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); //typeless hook  //provide store type 
// useAppDispatch = useDispatch + type
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector
// useSelector = useSelector + type

