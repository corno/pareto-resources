
// import * as interface_ from "../../../interface/signatures/filesystem_sandboxed"

// //dependencies
// import * as t_path_to_path from "../transformers/sandboxed_path/unrestricted_path"


// export const $$: interface_.commands.make_directory = p_.command_procedure(
//     ($d, $s, $q, $c, $x) => [
//         $c.unrestricted.execute(
//             {
//                 'path': t_path_to_path.Node_Path(
//                     $p.path,
//                     {
//                         'context': $x.context
//                     }
//                 ),
//                 'delete existing': $p['delete existing']
//             },
//             ($) => $,
//         )
//     ]
// )