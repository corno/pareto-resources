import * as _pi from 'pareto-core-interface'

import * as resources from "./resources"

import * as d_write_directory_content from "./to_be_generated/write_directory_content"

export namespace commands {

    export type write_directory_content = _pi.Command_Procedure<
        resources.commands.write_directory_content,
        {
            // 'make directory': resources_exupery.commands.make_directory
            'write file': resources.commands.write_file

        },
        null>
    export type write_file = _pi.Command_Procedure<
        resources.commands.write_file,
        null,
        null
    >
    export type make_directory = _pi.Command_Procedure<
        resources.commands.make_directory,
        null,
        null
    >
    export type remove = _pi.Command_Procedure<
        resources.commands.remove,
        null,
        null
    >
    export type copy = _pi.Command_Procedure<
        resources.commands.copy,
        null,
        null
    >
    export type log = _pi.Command_Procedure<
        resources.commands.log,
        null,
        null
    >
    export type log_error = _pi.Command_Procedure<
        resources.commands.log_error,
        null,
        null
    >
    export type execute_command_procedure_executable = _pi.Command_Procedure<
        resources.commands.execute_command_executable,
        null,
        null
    >
    export type execute_any_command_procedure_executable = _pi.Command_Procedure<
        resources.commands.execute_any_command_executable,
        null,
        null
    >
    export type execute_any_smelly_command_procedure_executable = _pi.Command_Procedure<
        resources.commands.execute_any_smelly_command_executable,
        null,
        null
    >
    export type write_to_stdout = _pi.Command_Procedure<
        resources.commands.write_to_stdout,
        null,
        null
    >
    export type write_to_stderr = _pi.Command_Procedure<
        resources.commands.write_to_stderr,
        null,
        null
    >

}

export namespace queries {
    export type read_directory_content = _pi.Query_Function<
        resources.queries.read_directory_content,
        {
            'read directory': resources.queries.read_directory,
            'read file': resources.queries.read_file,
        }
    >
    export type read_file = _pi.Query_Function<
        resources.queries.read_file,
        null
    >
    export type stat = _pi.Query_Function<
        resources.queries.stat,
        null
    >
    export type get_instream_data = _pi.Query_Function<
        resources.queries.get_instream_data,
        null
    >
    export type execute_any_query_executable = _pi.Query_Function<
        resources.queries.execute_any_query_executable,
        null
    >

}