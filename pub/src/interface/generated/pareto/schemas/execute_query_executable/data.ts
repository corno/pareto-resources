
import * as _pi from "pareto-core/dist/interface"

import * as i__location from "../../core/location"

export namespace Parameters_ {

    export namespace args {

        export type L = string

    }

    export type args = _pi.List<args.L>

}

export type Parameters_ = {
    readonly 'args': Parameters_.args
}

export namespace Error_ {

    export namespace failed_to_spawn {

        export type message = string
        export type message_as_list = _pi.List<string>

    }

    export type failed_to_spawn = {
        readonly 'message': failed_to_spawn.message
        readonly 'message as list': failed_to_spawn.message_as_list
    }

    export namespace non_zero_exit_code {

        export namespace exit_code {

            export type O = number

        }

        export type exit_code = _pi.Optional_Value<exit_code.O>

        export type stderr = string
        export type stderr_as_list = _pi.List<string>

    }

    export type non_zero_exit_code = {
        readonly 'exit code': non_zero_exit_code.exit_code
        readonly 'stderr': non_zero_exit_code.stderr
        readonly 'stderr as list': non_zero_exit_code.stderr_as_list
    }

}

export type Error_ =
    | readonly ['failed to spawn', Error_.failed_to_spawn]
    | readonly ['non zero exit code', Error_.non_zero_exit_code]

export namespace Result_ {

    export type stdout = string
    export type stdout_as_list = _pi.List<string>

}

export type Result_ = {
    readonly 'stdout': Result_.stdout
    readonly 'stdout as list': Result_.stdout_as_list
    
}

export {
    Parameters_ as Parameters,
    Error_ as Error,
    Result_ as Result,
}
