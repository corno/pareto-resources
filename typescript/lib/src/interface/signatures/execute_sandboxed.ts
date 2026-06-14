import * as pci from 'pareto-core/dist/command_interface'
import * as pqi from 'pareto-core/dist/query_interface'

import * as resources from "../resources"

export namespace commands {

    export type command_executable = pci.Command_Procedure<
        resources.execute_sandboxed.commands.command_executable,
        {
            'program': string,
        },
        null,
        {
            'unrestricted': resources.execute_unrestricted.commands.command_executable,
        }
    >

    export type smelly_command_executable = pci.Command_Procedure<
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

    export type query_executable = pqi.Query_Function<
        resources.execute_sandboxed.queries.query_executable,
        {
            'program': string,
        },
        {
            'unrestricted': resources.execute_unrestricted.queries.query_executable,
        }
    >

}