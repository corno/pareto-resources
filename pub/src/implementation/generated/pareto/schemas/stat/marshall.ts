import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/stat/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"
import * as _i_r_path from "../path/marshall"


export const Parameters: _i_signatures._T_Parameters = ($, $p) => _i_r_path.Node_Path(
    $,
    {
        'value serializers': $p['value serializers'],
    }
)
export const Error: _i_signatures._T_Error = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'node does not exist': return _p.ss($, ($) => ({
            'state': "node does not exist",
            'value': ['nothing', null],
        }))
        default: return _p.au($[0])
    }
})]
export const Node_Type: _i_signatures._T_Node_Type = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'file': return _p.ss($, ($) => ({
            'state': "file",
            'value': ['nothing', null],
        }))
        case 'directory': return _p.ss($, ($) => ({
            'state': "directory",
            'value': ['nothing', null],
        }))
        default: return _p.au($[0])
    }
})]
export const Result: _i_signatures._T_Result = ($, $p) => Node_Type(
    $,
    {
        'value serializers': $p['value serializers'],
    }
)
