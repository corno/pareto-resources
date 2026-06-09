// import * as _pi from 'pareto-core/dist/interface'
// import * as _p from 'pareto-core/dist/assign'

// import * as d_out from "../../../../interface/generated/liana/schemas/fs_unrestricted_path/data"
// import * as d_in from "../../../../interface/generated/liana/schemas/fs_sandboxed_path/data"

// export const Context_Path: _pi.Transformer_With_Parameter<d_in.Context_Path, d_out.Context_Path, { 'context': d_out.Context_Path }> = ($, $p) => ({
//     'start': $p.context.start,
//     'subpath': _p.list.nested_literal_old([
//         $p.context.subpath,
//         $.subpath,
//     ]),
// })


// export const Node_Path: _pi.Transformer_With_Parameter<d_in.Node_Path, d_out.Node_Path, { 'context': d_out.Context_Path }> = ($, $p) => ({
//     'context': Context_Path($.context, { 'context': $p.context }),
//     'node': $.node,
// })