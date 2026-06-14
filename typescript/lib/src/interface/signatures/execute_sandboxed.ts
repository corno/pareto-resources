import * as p_ci from 'pareto-core/dist/command/interface'
import * as p_qi from 'pareto-core/dist/query/interface'

import * as resources from "../resources"

export namespace commands {

    export type command_executable = p_ci.Command_Procedure<
        resources.execute_sandboxed.commands.command_executable,
        {
            'program': string,
        },
        null,
        {
            'unrestricted': resources.execute_unrestricted.commands.command_executable,
        }
    >

    export type smelly_command_executable = p_ci.Command_Procedure<
        resources.execute_sandboxed.commands.smelly_command_executable,
        {
            'program': string,
        },
        null,
        {
            'unrestricted': resources.execute_unrestricted.commands.smelly_command_executable,
        }
    >

}

export namespace queries {

    export type query_executable = p_qi.Query_Function<
        resources.execute_sandboxed.queries.query_executable,
        {
            'program': string,
        },
        {
            'unrestricted': resources.execute_unrestricted.queries.query_executable,
        }
    >

}