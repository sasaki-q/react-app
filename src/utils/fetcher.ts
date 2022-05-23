
type AsyncState<T> = 
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

export class Fetcher<T, Arg> {
    private state: AsyncState<T>;

    constructor(fetcher: (arg: Arg) => Promise<T>, arg: Arg) {
        const value = fetcher(arg).then(
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