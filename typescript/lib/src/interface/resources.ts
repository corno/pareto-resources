import * as p_ci from 'pareto-core/interface/command'
import * as p_qi from 'pareto-core/interface/query'

import * as d_execute_unrestricted_command_command from "./generated/liana/schemas/execute_unrestricted_command_executable/data.js"
import * as d_execute_unrestricted_query_executable from "./generated/liana/schemas/execute_unrestricted_query_executable/data.js"
import * as d_execute_unrestricted_smelly_command_executable from "./generated/liana/schemas/execute_unrestricted_smelly_command_executable/data.js"
import * as d_execute_sandboxed_command_command from "./generated/liana/schemas/execute_sandboxed_command_executable/data.js"
import * as d_execute_sandboxed_query_executable from "./generated/liana/schemas/execute_sandboxed_query_executable/data.js"
import * as d_execute_sandboxed_smelly_command_command from "./generated/liana/schemas/execute_sandboxed_smelly_command_executable/data.js"

export namespace execute_unrestricted {

    export namespace commands {

        export type command_executable = p_ci.Command<d_execute_unrestricted_command_command.Error, d_execute_unrestricted_command_command.Parameters>
        export type smelly_command_executable = p_ci.Command<d_execute_unrestricted_smelly_command_executable.Error, d_execute_unrestricted_smelly_command_executable.Parameters>

    }

    export namespace queries {

        export type query_executable = p_qi.Query<d_execute_unrestricted_query_executable.Result, d_execute_unrestricted_query_executable.Error, d_execute_unrestricted_query_executable.Parameters>

    }
}

export namespace execute_sandboxed {

    export namespace commands {

        export type command_executable = p_ci.Command<d_execute_sandboxed_command_command.Error, d_execute_sandboxed_command_command.Parameters>
        export type smelly_command_executable = p_ci.Command<d_execute_sandboxed_smelly_command_command.Error, d_execute_sandboxed_smelly_command_command.Parameters>

    }

    export namespace queries {

        export type query_executable = p_qi.Query<d_execute_sandboxed_query_executable.Result, d_execute_sandboxed_query_executable.Error, d_execute_sandboxed_query_executable.Parameters>

    }
}