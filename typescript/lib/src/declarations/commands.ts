import * as p_ from 'pareto-core/interface/command_implementation'

import * as command_actions from "../interface/commands.js"

export type command_executable = p_.Command_Implementation<
    command_actions.execute_sandboxed.command_executable,
    {
        'program': string,
    },
    null,
    {
        'unrestricted': command_actions.execute_unrestricted.command_executable,
    }
>

export type smelly_command_executable = p_.Command_Implementation<
    command_actions.execute_sandboxed.smelly_command_executable,
    {
        'program': string,
    },
    null,
    {
        'unrestricted': command_actions.execute_unrestricted.smelly_command_executable,
    }
>