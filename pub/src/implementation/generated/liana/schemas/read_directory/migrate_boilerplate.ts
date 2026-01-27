
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/read_directory/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/read_directory/data"

import * as v_path from "../path/migrate_boilerplate"
export const Parameters: t_signatures.Parameters = ($,) => ({
    'path': _p.deprecated_cc($['path'], ($,) => v_path.Node_Path($)),
})
export const Error: t_signatures.Error = ($,) => _p.decide.state($, ($,): t_out.Error => {
    switch ($[0]) {
        case 'directory does not exist':
            return _p.ss($, ($,) => ['directory does not exist', null])
        case 'node is not a directory':
            return _p.ss($, ($,) => ['node is not a directory', null])
        default:
            return _p.au($[0])
    }
})
export const Node_Type: t_signatures.Node_Type = ($,) => _p.decide.state($, ($,): t_out.Node_Type => {
    switch ($[0]) {
        case 'file':
            return _p.ss($, ($,) => ['file', null])
        case 'directory':
            return _p.ss($, ($,) => ['directory', null])
        case 'other':
            return _p.ss($, ($,) => ['other', null])
        default:
            return _p.au($[0])
    }
})
export const Result: t_signatures.Result = ($,) => $.__d_map(($,id,) => ({
    'node type': _p.deprecated_cc($['node type'], ($,) => Node_Type($)),
    'context directory': _p.deprecated_cc($['context directory'], ($,) => v_path.Context_Path($)),
    'path': _p.deprecated_cc($['path'], ($,) => v_path.Node_Path($)),
}))
