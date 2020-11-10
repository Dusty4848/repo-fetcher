import { appReducer } from '.';

export type RootState = ReturnType<typeof appReducer>;

export type GetStateType = () => RootState;
