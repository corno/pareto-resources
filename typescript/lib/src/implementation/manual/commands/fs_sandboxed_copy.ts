// import * as _p from 'pareto-core/dist/command'

// import * as signatures from "../../../interface/signatures/filesystem_sandboxed"

// //dependencies
// import * as t_path_to_path from "../transformers/sandboxed_path/unrestricted_path"


// export const $$: signatures.commands.copy = _p.command_procedure(
//     ($p, $cr, $qr, $x) => [
//         $cr.unrestricted.execute(
//             {
//                 'source': t_path_to_path.Node_Path(
//                     $p.source,
//                     {
//                         'context': $x.context
//                     }
//                 ),
//                 'target': t_path_to_path.Node_Path(
//                     $p.target,
//                     {
//                         'context': $x.context
//                     }
//                 ),
//                 'options': $p.options
//             },
//             ($) => $,
//         )
//     ]
// )