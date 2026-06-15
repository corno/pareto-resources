// import * as p_di from 'pareto-core/dist/data/interface'
// import p_list_from_text from 'pareto-core/dist/specials/list_from_text'

// //data types
// import * as d_out from "../../../../interface/generated/liana/schemas/fs_sandboxed_path/data"
// import * as d_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/text/data"
// import * as d_error from "./non_normalized_path"
// import * as d_function from "../../../../interface/to_be_generated/sandboxed_path_from_non_normalized_path"

// export type Parameters = { 'pedantic': boolean }

// export namespace signatures {
//     export type Node_Path = p_ri.Refiner_With_Parameter<d_out.Node_Path, d_error.Error, d_in.Text, Parameters>
// }


// //dependencies
// import * as t_from_list_of_characters from "./list_of_characters"


// export const Node_Path: signatures.Node_Path = ($, abort, $p) => {
//     return t_from_list_of_characters.Node_Path(
//         p_list_from_text(
//             $,
//             ($) => $
//         ),
//         abort,
//         $p,
//     )
// }

// export const Context_Path: p_ri.Refiner<d_out.Context_Path, d_function.Error, d_in.Text> = (
//     $,
//     abort,
// ) => t_from_list_of_characters.Context_Path(
//     p_list_from_text(
//         $,
//         ($) => $
//     ),
//     abort,
// )