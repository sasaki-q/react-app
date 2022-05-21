export type Todo = {
    id: number;
    title: string;
    isDone: boolean;
}

export type AsyncState<T> = 
    | {
        state: "promise";
        value: Promise<T>;
    }
    | {
        state: "resolve";
        value: T;
    }
    | {
        state: "reject";
        value: Error;
    }