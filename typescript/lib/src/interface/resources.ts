import * as p_ci from 'pareto-core/dist/command/interface'
import * as p_qi from 'pareto-core/dist/query/interface'

import * as d_execute_unrestricted_command_command from "./generated/liana/schemas/execute_unrestricted_command_executable/data"
import * as d_execute_unrestricted_query_executable from "./generated/liana/schemas/execute_unrestricted_query_executable/data"
import * as d_execute_unrestricted_smelly_command_executable from "./generated/liana/schemas/execute_unrestricted_smelly_command_executable/data"
import * as d_execute_sandboxed_command_command from "./generated/liana/schemas/execute_sandboxed_command_executable/data"
import * as d_execute_sandboxed_query_executable from "./generated/liana/schemas/execute_sandboxed_query_executable/data"
import * as d_execute_sandboxed_smelly_command_command from "./generated/liana/schemas/execute_sandboxed_smelly_command_executable/data"
// import * as d_fs_sandboxed_chmod from "./generated/liana/schemas/fs_sandboxed_chmod/data"
// import * as d_fs_sandboxed_copy from "./generated/liana/schemas/fs_sandboxed_copy/data"
// import * as d_fs_sandboxed_make_directory from "./generated/liana/schemas/fs_sandboxed_make_directory/data"
// import * as d_fs_sandboxed_read_directory from "./generated/liana/schemas/fs_sandboxed_read_directory/data"
// import * as d_fs_sandboxed_read_file from "./generated/liana/schemas/fs_sandboxed_read_file/data"
// import * as d_fs_sandboxed_read_file_within_context from "./generated/liana/schemas/fs_sandboxed_read_file_within_context/data"
// import * as d_fs_sandboxed_remove from "./generated/liana/schemas/fs_sandboxed_remove/data"
// import * as d_fs_sandboxed_stat from "./generated/liana/schemas/fs_sandboxed_stat/data"
// import * as d_fs_sandboxed_stat_possible_node from "./generated/liana/schemas/fs_sandboxed_stat_possible_node/data"
// import * as d_fs_sandboxed_write_file from "./generated/liana/schemas/fs_sandboxed_write_file/data"
import * as d_fs_unrestricted_chmod from "./generated/liana/schemas/fs_unrestricted_chmod/data"
import * as d_fs_unrestricted_copy from "./generated/liana/schemas/fs_unrestricted_copy/data"
import * as d_fs_unrestricted_make_directory from "./generated/liana/schemas/fs_unrestricted_make_directory/data"
import * as d_fs_unrestricted_read_directory from "./generated/liana/schemas/fs_unrestricted_read_directory/data"
import * as d_fs_unrestricted_read_file from "./generated/liana/schemas/fs_unrestricted_read_file/data"
import * as d_fs_unrestricted_remove from "./generated/liana/schemas/fs_unrestricted_remove/data"
import * as d_fs_unrestricted_stat from "./generated/liana/schemas/fs_unrestricted_stat/data"
import * as d_fs_unrestricted_stat_possible_node from "./generated/liana/schemas/fs_unrestricted_stat_possible_node/data"
import * as d_fs_unrestricted_write_file from "./generated/liana/schemas/fs_unrestricted_write_file/data"
import * as d_main from "./to_be_generated/temp_main"
import * as d_read_directory_content from "./to_be_generated/read_directory_content"
import * as d_read_directory_structure from "./to_be_generated/read_directory_structure"
import * as d_write_directory_content from "./to_be_generated/write_directory_content"


export namespace filesystem_unrestricted {

    export namespace commands {

        export type chmod = p_ci.Command<d_fs_unrestricted_chmod.Error, d_fs_unrestricted_chmod.Parameters>
        export type copy = p_ci.Command<d_fs_unrestricted_copy.Error, d_fs_unrestricted_copy.Parameters>
        export type make_directory = p_ci.Command<d_fs_unrestricted_make_directory.Error, d_fs_unrestricted_make_directory.Parameters>
        export type remove = p_ci.Command<d_fs_unrestricted_remove.Error, d_fs_unrestricted_remove.Parameters>
        export type write_file = p_ci.Command<d_fs_unrestricted_write_file.Error, d_fs_unrestricted_write_file.Parameters>

    }

    export namespace queries {

        export type read_directory = p_qi.Query<d_fs_unrestricted_read_directory.Result, d_fs_unrestricted_read_directory.Error, d_fs_unrestricted_read_directory.Parameters>
        export type read_file = p_qi.Query<d_fs_unrestricted_read_file.Result, d_fs_unrestricted_read_file.Error, d_fs_unrestricted_read_file.Parameters>
        export type stat = p_qi.Query<d_fs_unrestricted_stat.Result, d_fs_unrestricted_stat.Error, d_fs_unrestricted_stat.Parameters>
        export type stat_possible_node = p_qi.Query<d_fs_unrestricted_stat_possible_node.Result, d_fs_unrestricted_stat_possible_node.Error, d_fs_unrestricted_stat_possible_node.Parameters>

    }
}

// export namespace filesystem_sandboxed {

//     export namespace commands {

//         export type chmod = p_ci.Command<d_fs_sandboxed_chmod.Error, d_fs_sandboxed_chmod.Parameters>
//         export type copy = p_ci.Command<d_fs_sandboxed_copy.Error, d_fs_sandboxed_copy.Parameters>
//         export type make_directory = p_ci.Command<d_fs_sandboxed_make_directory.Error, d_fs_sandboxed_make_directory.Parameters>
//         export type remove = p_ci.Command<d_fs_sandboxed_remove.Error, d_fs_sandboxed_remove.Parameters>
//         export type write_file = p_ci.Command<d_fs_sandboxed_write_file.Error, d_fs_sandboxed_write_file.Parameters>

//     }

//     export namespace queries {

//         export type read_directory = p_qi.Query<d_fs_sandboxed_read_directory.Result, d_fs_sandboxed_read_directory.Error, d_fs_sandboxed_read_directory.Parameters>
//         export type read_file = p_qi.Query<d_fs_sandboxed_read_file.Result, d_fs_sandboxed_read_file.Error, d_fs_sandboxed_read_file.Parameters>
//         export type read_file_within_context = p_qi.Query<d_fs_sandboxed_read_file_within_context.Result, d_fs_sandboxed_read_file_within_context.Error, d_fs_sandboxed_read_file_within_context.Parameters>
//         export type stat = p_qi.Query<d_fs_sandboxed_stat.Result, d_fs_sandboxed_stat.Error, d_fs_sandboxed_stat.Parameters>
//         export type stat_possible_node = p_qi.Query<d_fs_sandboxed_stat_possible_node.Result, d_fs_sandboxed_stat_possible_node.Error, d_fs_sandboxed_stat_possible_node.Parameters>

//     }
// }

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

export namespace resources {

    export namespace commands {

        export type main = p_ci.Command<d_main.Error, d_main.Parameters>
        export type write_directory_content = p_ci.Command<d_write_directory_content.Error, d_write_directory_content.Parameters>
    }

    export namespace queries {

        export type read_directory_content = p_qi.Query<d_read_directory_content.Result, d_read_directory_content.Error, d_read_directory_content.Parameters>
        export type read_directory_structure = p_qi.Query<d_read_directory_structure.Result, d_read_directory_structure.Error, d_read_directory_structure.Parameters>

    }

}