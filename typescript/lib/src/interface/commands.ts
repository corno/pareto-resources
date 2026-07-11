import * as p_ from 'pareto-core/interface/command_interface'

import type * as s_execute_unrestricted_command_command from "./schemas/execute_unrestricted_command_executable.js"
import type * as s_execute_unrestricted_smelly_command_executable from "./schemas/execute_unrestricted_smelly_command_executable.js"
import type * as s_execute_sandboxed_command_command from "./schemas/execute_sandboxed_command_executable.js"
import type * as s_execute_sandboxed_smelly_command_command from "./schemas/execute_sandboxed_smelly_command_executable.js"

export namespace execute_unrestricted {


    export type command_executable = p_.Command_Interface<
        s_execute_unrestricted_command_command.Error,
        s_execute_unrestricted_command_command.Parameters
    >
    export type smelly_command_executable = p_.Command_Interface<
        s_execute_unrestricted_smelly_command_executable.Error,
        s_execute_unrestricted_smelly_command_executable.Parameters
    >

}

export namespace execute_sandboxed {


    export type command_executable = p_.Command_Interface<
        s_execute_sandboxed_command_command.Error,
        s_execute_sandboxed_command_command.Parameters
    >
    export type smelly_command_executable = p_.Command_Interface<
        s_execute_sandboxed_smelly_command_command.Error,
        s_execute_sandboxed_smelly_command_command.Parameters
    >

}