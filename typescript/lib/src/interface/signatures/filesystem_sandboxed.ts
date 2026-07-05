
// import * as d_unrestricted_path from "../generated/liana/schemas/fs_unrestricted_path/data.js"
// import * as d_sandboxed_path from "../generated/liana/schemas/fs_sandboxed_path/data.js"

// import * as resources_pareto from "../resources.js"

// export namespace commands {

//     export type remove = p_ci.Command_Procedure<
//         resources_pareto.filesystem_sandboxed.commands.remove,
//         {
//             'unrestricted': resources_pareto.filesystem_unrestricted.commands.remove
//         },
//         null,
//         {
//             'context': d_unrestricted_path.Context_Path
//         }
//     >
    
//     export type write_file = p_ci.Command_Procedure<
//         resources_pareto.filesystem_sandboxed.commands.write_file,
//         {
//             'unrestricted': resources_pareto.filesystem_unrestricted.commands.write_file
//         },
//         null,
//         {
//             'context': d_unrestricted_path.Context_Path
//         }
//     >
    
//     export type make_directory = p_ci.Command_Procedure<
//         resources_pareto.filesystem_sandboxed.commands.make_directory,
//         {
//             'unrestricted': resources_pareto.filesystem_unrestricted.commands.make_directory
//         },
//         null,
//         {
//             'context': d_unrestricted_path.Context_Path
//         }
//     >
    
//     export type copy = p_ci.Command_Procedure<
//         resources_pareto.filesystem_sandboxed.commands.copy,
//         {
//             'unrestricted': resources_pareto.filesystem_unrestricted.commands.copy
//         },
//         null,
//         {
//             'context': d_unrestricted_path.Context_Path
//         }
//     >

// }

// export namespace queries {

//     export type read_file_from_unrestricted = p_qi.Query_Function<
//         resources_pareto.filesystem_sandboxed.queries.read_file,
//         {
//             'unrestricted': resources_pareto.filesystem_unrestricted.queries.read_file
//         },
//         {
//             'path': d_unrestricted_path.Node_Path
//         }
//     >

//     export type read_file_from_sandboxed = p_qi.Query_Function<
//         resources_pareto.filesystem_sandboxed.queries.read_file,
//         {
//             'sandboxed': resources_pareto.filesystem_sandboxed.queries.read_file
//         },
//         {
//             'path': d_sandboxed_path.Node_Path
//         }
//     >

//     export type read_file_within_context_from_unrestricted = p_qi.Query_Function<
//         resources_pareto.filesystem_sandboxed.queries.read_file_within_context,
//         {
//             'unrestricted': resources_pareto.filesystem_unrestricted.queries.read_file
//         },
//         {
//             'context': d_unrestricted_path.Context_Path
//         }
//     >

//     export type read_file_within_context_from_sandboxed = p_qi.Query_Function<
//         resources_pareto.filesystem_sandboxed.queries.read_file_within_context,
//         {
//             'sandboxed': resources_pareto.filesystem_sandboxed.queries.read_file
//         },
//         {
//             'context': d_sandboxed_path.Context_Path
//         }
//     >

// }