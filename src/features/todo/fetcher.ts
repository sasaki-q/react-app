import { AsyncState } from "features/todo/type"

export class Fetcher<T> {
    private state: AsyncState<T>;

    constructor(fetcher: () => Promise<T>) {
        const value = fetcher().then(
            res => {
                this.state = {
                    state: "resolve",
                    value: res,
                }
                return res
            },
            err => {
                this.state = {
                    state: "reject",
                    value: err,
                }
                throw err;
            },
        );
        this.state = {
            state: "promise",
            value: value,
        }
    }

    public filterState = (): T => {
        if(this.state.state === "resolve") {
            console.log(`current state: ${this.state.state}, value: ${this.state.value}`);
            return this.state.value;
        }

        console.log(`current state: ${this.state.state}, value: ${this.state.value}`);
        throw this.state.value;
    };
}