import * as _pi from 'pareto-core/dist/interface'

import * as d_execute_unrestricted_command_command from "./generated/liana/schemas/execute_unrestricted_command_executable/data"
import * as d_execute_unrestricted_query_executable from "./generated/liana/schemas/execute_unrestricted_query_executable/data"
import * as d_execute_unrestricted_smelly_command_executable from "./generated/liana/schemas/execute_unrestricted_smelly_command_executable/data"
import * as d_execute_sandboxed_command_command from "./generated/liana/schemas/execute_sandboxed_command_executable/data"
import * as d_execute_sandboxed_query_executable from "./generated/liana/schemas/execute_sandboxed_query_executable/data"
import * as d_execute_sandboxed_smelly_command_command from "./generated/liana/schemas/execute_sandboxed_smelly_command_executable/data"
import * as d_fs_sandboxed_chmod from "./generated/liana/schemas/fs_sandboxed_chmod/data"
import * as d_fs_sandboxed_copy from "./generated/liana/schemas/fs_sandboxed_copy/data"
import * as d_fs_sandboxed_make_directory from "./generated/liana/schemas/fs_sandboxed_make_directory/data"
import * as d_fs_sandboxed_read_directory from "./generated/liana/schemas/fs_sandboxed_read_directory/data"
import * as d_fs_sandboxed_read_file from "./generated/liana/schemas/fs_sandboxed_read_file/data"
import * as d_fs_sandboxed_read_file_within_context from "./generated/liana/schemas/fs_sandboxed_read_file_within_context/data"
import * as d_fs_sandboxed_remove from "./generated/liana/schemas/fs_sandboxed_remove/data"
import * as d_fs_sandboxed_stat from "./generated/liana/schemas/fs_sandboxed_stat/data"
import * as d_fs_sandboxed_stat_possible_node from "./generated/liana/schemas/fs_sandboxed_stat_possible_node/data"
import * as d_fs_sandboxed_write_file from "./generated/liana/schemas/fs_sandboxed_write_file/data"
import * as d_fs_unrestricted_chmod from "./generated/liana/schemas/fs_unrestricted_chmod/data"
import * as d_fs_unrestricted_copy from "./generated/liana/schemas/fs_unrestricted_copy/data"
import * as d_fs_unrestricted_make_directory from "./generated/liana/schemas/fs_unrestricted_make_directory/data"
import * as d_fs_unrestricted_read_directory from "./generated/liana/schemas/fs_unrestricted_read_directory/data"
import * as d_fs_unrestricted_read_file from "./generated/liana/schemas/fs_unrestricted_read_file/data"
import * as d_fs_unrestricted_remove from "./generated/liana/schemas/fs_unrestricted_remove/data"
import * as d_fs_unrestricted_stat from "./generated/liana/schemas/fs_unrestricted_stat/data"
import * as d_fs_unrestricted_stat_possible_node from "./generated/liana/schemas/fs_unrestricted_stat_possible_node/data"
import * as d_fs_unrestricted_write_file from "./generated/liana/schemas/fs_unrestricted_write_file/data"
import * as d_stream_get_instream_data from "./generated/liana/schemas/stream_get_instream_data/data"
import * as d_stream_log from "./generated/liana/schemas/stream_log/data"
import * as d_stream_log_error from "./generated/liana/schemas/stream_log_error/data"
import * as d_main from "./to_be_generated/temp_main"
import * as d_read_directory_content from "./to_be_generated/read_directory_content"
import * as d_read_directory_structure from "./to_be_generated/read_directory_structure"
import * as d_write_directory_content from "./to_be_generated/write_directory_content"
import * as d_stream_write_to_stderr from "./generated/liana/schemas/stream_write_to_stderr/data"
import * as d_stream_write_to_stdout from "./generated/liana/schemas/stream_write_to_stdout/data"


export namespace filesystem_unrestricted {

    export namespace commands {

        export type chmod = _pi.Command<d_fs_unrestricted_chmod.Error, d_fs_unrestricted_chmod.Parameters>
        export type copy = _pi.Command<d_fs_unrestricted_copy.Error, d_fs_unrestricted_copy.Parameters>
        export type make_directory = _pi.Command<d_fs_unrestricted_make_directory.Error, d_fs_unrestricted_make_directory.Parameters>
        export type remove = _pi.Command<d_fs_unrestricted_remove.Error, d_fs_unrestricted_remove.Parameters>
        export type write_file = _pi.Command<d_fs_unrestricted_write_file.Error, d_fs_unrestricted_write_file.Parameters>

    }

    export namespace queries {

        export type read_directory = _pi.Query<d_fs_unrestricted_read_directory.Result, d_fs_unrestricted_read_directory.Error, d_fs_unrestricted_read_directory.Parameters>
        export type read_file = _pi.Query<d_fs_unrestricted_read_file.Result, d_fs_unrestricted_read_file.Error, d_fs_unrestricted_read_file.Parameters>
        export type stat = _pi.Query<d_fs_unrestricted_stat.Result, d_fs_unrestricted_stat.Error, d_fs_unrestricted_stat.Parameters>
        export type stat_possible_node = _pi.Query<d_fs_unrestricted_stat_possible_node.Result, d_fs_unrestricted_stat_possible_node.Error, d_fs_unrestricted_stat_possible_node.Parameters>

    }
}

export namespace filesystem_sandboxed {

    export namespace commands {

        export type chmod = _pi.Command<d_fs_sandboxed_chmod.Error, d_fs_sandboxed_chmod.Parameters>
        export type copy = _pi.Command<d_fs_sandboxed_copy.Error, d_fs_sandboxed_copy.Parameters>
        export type make_directory = _pi.Command<d_fs_sandboxed_make_directory.Error, d_fs_sandboxed_make_directory.Parameters>
        export type remove = _pi.Command<d_fs_sandboxed_remove.Error, d_fs_sandboxed_remove.Parameters>
        export type write_file = _pi.Command<d_fs_sandboxed_write_file.Error, d_fs_sandboxed_write_file.Parameters>

    }

    export namespace queries {

        export type read_directory = _pi.Query<d_fs_sandboxed_read_directory.Result, d_fs_sandboxed_read_directory.Error, d_fs_sandboxed_read_directory.Parameters>
        export type read_file = _pi.Query<d_fs_sandboxed_read_file.Result, d_fs_sandboxed_read_file.Error, d_fs_sandboxed_read_file.Parameters>
        export type read_file_within_context = _pi.Query<d_fs_sandboxed_read_file_within_context.Result, d_fs_sandboxed_read_file_within_context.Error, d_fs_sandboxed_read_file_within_context.Parameters>
        export type stat = _pi.Query<d_fs_sandboxed_stat.Result, d_fs_sandboxed_stat.Error, d_fs_sandboxed_stat.Parameters>
        export type stat_possible_node = _pi.Query<d_fs_sandboxed_stat_possible_node.Result, d_fs_sandboxed_stat_possible_node.Error, d_fs_sandboxed_stat_possible_node.Parameters>

    }
}

export namespace execute_unrestricted {

    export namespace commands {

        export type command_executable = _pi.Command<d_execute_unrestricted_command_command.Error, d_execute_unrestricted_command_command.Parameters>
        export type smelly_command_executable = _pi.Command<d_execute_unrestricted_smelly_command_executable.Error, d_execute_unrestricted_smelly_command_executable.Parameters>

    }

    export namespace queries {

        export type query_executable = _pi.Query<d_execute_unrestricted_query_executable.Result, d_execute_unrestricted_query_executable.Error, d_execute_unrestricted_query_executable.Parameters>

    }
}

export namespace execute_sandboxed {

    export namespace commands {

        export type command_executable = _pi.Command<d_execute_sandboxed_command_command.Error, d_execute_sandboxed_command_command.Parameters>
        export type smelly_command_executable = _pi.Command<d_execute_sandboxed_smelly_command_command.Error, d_execute_sandboxed_smelly_command_command.Parameters>

    }

    export namespace queries {

        export type query_executable = _pi.Query<d_execute_sandboxed_query_executable.Result, d_execute_sandboxed_query_executable.Error, d_execute_sandboxed_query_executable.Parameters>

    }
}

export namespace stream {

    export namespace commands {

        export type log = _pi.Command<null, d_stream_log.Parameters>
        export type log_error = _pi.Command<null, d_stream_log_error.Parameters>
        export type write_to_stderr = _pi.Command<null, d_stream_write_to_stderr.Parameters>
        export type write_to_stdout = _pi.Command<null, d_stream_write_to_stdout.Parameters>

    }

    export namespace queries {

        export type get_instream_data = _pi.Query<d_stream_get_instream_data.Result, null, d_stream_get_instream_data.Parameters>

    }
}

export namespace resources {

    export namespace commands {

        export type main = _pi.Command<d_main.Error, d_main.Parameters>
        export type write_directory_content = _pi.Command<d_write_directory_content.Error, d_write_directory_content.Parameters>
    }

    export namespace queries {

        export type read_directory_content = _pi.Query<d_read_directory_content.Result, d_read_directory_content.Error, d_read_directory_content.Parameters>
        export type read_directory_structure = _pi.Query<d_read_directory_structure.Result, d_read_directory_structure.Error, d_read_directory_structure.Parameters>

    }

}