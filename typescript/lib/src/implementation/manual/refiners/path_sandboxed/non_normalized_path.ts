// import * as pt from 'pareto-core/dist/assign'
// import * as p_di from 'pareto-core/dist/data/interface'

// import * as d_out from "../../../../interface/generated/liana/schemas/fs_sandboxed_path/data"
// import * as d_in from "../../../../interface/generated/liana/schemas/path_non_normalized/data"
// import * as d_function from "../../../../interface/to_be_generated/sandboxed_path_from_non_normalized_path"

// import { remove_last_element } from "../../../temp/temp_core"


// type Intermediate_Result = {
//     subppath: d_out.Context_Subpath
//     node: string | null
//     up_steps: number
// }

// export type Error =
//     | ['trailing slash not allowed', null]
//     | ['no node', null]
//     | ['absolute path not allowed', null]
//     | ['up steps not allowed', null]

// export namespace signatures {
//     export type Node_Path = p_ri.Refiner_With_Parameter<d_out.Node_Path, Error, d_in.Non_Normalized_Path, { 'pedantic': boolean }>
// }

// export const Node_Path: signatures.Node_Path = ($, abort, $p) => {

//     if ($p.pedantic) {
//         if ($['trailing slash']) {
//             abort(['trailing slash not allowed', null])
//         }
//     }
//     let intermediate_result: Intermediate_Result = {

//         subppath: pt.list.literal([]),
//         node: null,
//         up_steps: 0,
//     }

//     $.segments.__l_map(($) => {
//         intermediate_result = pt.decide.state($, ($): Intermediate_Result => {
//             switch ($[0]) {
//                 case 'parent': return pt.ss($, ($) => ({
//                     'up_steps': intermediate_result.node === null
//                         ? pt.boolean.from.list( intermediate_result.subppath).is_empty()
//                             ? intermediate_result.up_steps + 1
//                             : intermediate_result.up_steps
//                         : intermediate_result.up_steps,
//                     'subppath': intermediate_result.node === null
//                         ? pt.boolean.from.list( intermediate_result.subppath).is_empty()
//                             ? pt.list.literal([])
//                             : remove_last_element(intermediate_result.subppath)
//                         : intermediate_result.subppath,
//                     'node': null,
//                 }))
//                 case 'child': return pt.ss($, ($): Intermediate_Result => ({
//                     'up_steps': intermediate_result.up_steps,
//                     'subppath': intermediate_result.node === null
//                         ? intermediate_result.subppath
//                         : pt.list.nested_literal_old([
//                             intermediate_result.subppath,
//                             [
//                                 intermediate_result.node
//                             ]
//                         ]),
//                     'node': $,
//                 }))
//                 case 'current': return pt.ss($, ($) => intermediate_result)
//                 case 'nothing': return pt.ss($, ($) => intermediate_result)
//                 default: return pt.au($[0])
//             }
//         })
//     })

//     if (intermediate_result.node === null) {
//         return abort(['no node', null])
//     }

//     if ($['leading slash']) {
//         return abort(['absolute path not allowed', null])
//     }
//     if (intermediate_result.up_steps > 0) {
//         return abort(['up steps not allowed', null])
//     }
//     return {
//         'context': {
//             'start': null,
//             'subpath': intermediate_result.subppath,
//         },
//         'node': intermediate_result.node
//     }

// }

// type Intermediate_Result2 = {
//     subppath: d_out.Context_Subpath
//     up_steps: number
// }

// export const Context_Path: p_ri.Refiner<d_out.Context_Path, d_function.Error, d_in.Non_Normalized_Path> = (
//     $,
//     abort,
// ) => {

//     let intermediate_result: Intermediate_Result2 = {

//         subppath: pt.list.literal([]),
//         up_steps: 0,
//     }

//     $.segments.__l_map(($) => {
//         intermediate_result = pt.decide.state($, ($): Intermediate_Result2 => {
//             switch ($[0]) {
//                 case 'parent': return pt.ss($, ($) => ({
//                     'up_steps': pt.boolean.from.list(intermediate_result.subppath).is_empty()
//                         ? intermediate_result.up_steps + 1
//                         : intermediate_result.up_steps,
//                     'subppath': pt.boolean.from.list(intermediate_result.subppath).is_empty()
//                         ? intermediate_result.subppath
//                         : remove_last_element(intermediate_result.subppath),
//                     'node': null,
//                 }))
//                 case 'child': return pt.ss($, ($): Intermediate_Result2 => ({
//                     'up_steps': intermediate_result.up_steps,
//                     'subppath': pt.list.nested_literal_old([
//                         intermediate_result.subppath,
//                         [
//                             $
//                         ]
//                     ]),
//                 }))
//                 case 'current': return pt.ss($, ($) => intermediate_result)
//                 case 'nothing': return pt.ss($, ($) => intermediate_result)
//                 default: return pt.au($[0])
//             }
//         })
//     })

//     if ($['leading slash']) {
//         return abort(['absolute path not allowed', null])
//     }
//     if (intermediate_result.up_steps > 0) {
//         return abort(['up steps not allowed', null])
//     }
//     return {
//         'start': null,
//         'subpath': intermediate_result.subppath,
//     }

// }
