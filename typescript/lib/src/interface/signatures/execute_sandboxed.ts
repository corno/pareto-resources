import * as _pi from 'pareto-core/dist/interface'

import * as resources from "../resources"

export namespace commands {

    export type command_executable = _pi.Command_Procedure<
        resources.execute_sandboxed.commands.command_executable,
        {
            'unrestricted': resources.execute_unrestricted.commands.command_executable,
        },
        null,
        {
            'program': string,
        }
    >

    export type smelly_command_executable = _pi.Command_Procedure<
        resources.execute_sandboxed.commands.command_executable,
        {
            'unrestricted': resources.execute_unrestricted.commands.command_executable,
        },
        null,
        {
            'program': string,
        }
    >

}

export namespace queries {

    export type query_executable = _pi.Query_Function<
        resources.execute_sandboxed.queries.query_executable,
        {
            'unrestricted': resources.execute_unrestricted.queries.query_executable,
        },
        {
            'program': string,
        }
    >

}