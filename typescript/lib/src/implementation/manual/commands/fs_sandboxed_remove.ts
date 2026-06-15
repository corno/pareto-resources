
// import * as signatures from "../../../interface/signatures/filesystem_sandboxed"

// //dependencies
// import * as t_path_to_path from "../transformers/sandboxed_path/unrestricted_path"


// export const $$: signatures.commands.remove = p_.command_procedure(
//     ($d, $s, $q, $c, $x) => [
//         $c.unrestricted.execute(
//             {
//                 'path': t_path_to_path.Context_Path(
//                     $p.path,
//                     {
//                         'context': $x.context
//                     }
//                 ),
//                 'error if not exists': $p['error if not exists']
//             },
//             ($) => $,
//         )
//     ]
// )