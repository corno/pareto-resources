// import * as pt from 'pareto-core/dist/query'

// import * as signatures from "../../../interface/signatures/filesystem_sandboxed"

// //dependencies
// import * as t_path_to_path from "../transformers/sandboxed_path/unrestricted_path"


// export const $$: signatures.queries.read_file_within_context_from_unrestricted = pt.query_function(
//     ($d, $s, $q) => $q.unrestricted(
//         t_path_to_path.Node_Path(
//             $p,
//             {
//                 'context': $x.context
//             }
//         ),
//         ($) => $,
//     )
// )