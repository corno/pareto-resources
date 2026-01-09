import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/read_file/marshall"
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
        case 'file does not exist': return _p.ss($, ($) => ({
            'state': "file does not exist",
            'value': ['nothing', null],
        }))
        case 'node is not a file': return _p.ss($, ($) => ({
            'state': "node is not a file",
            'value': ['nothing', null],
        }))
        case 'permission denied': return _p.ss($, ($) => ({
            'state': "permission denied",
            'value': ['nothing', null],
        }))
        case 'file too large': return _p.ss($, ($) => ({
            'state': "file too large",
            'value': ['nothing', null],
        }))
        case 'device not ready': return _p.ss($, ($) => ({
            'state': "device not ready",
            'value': ['nothing', null],
        }))
        default: return _p.au($[0])
    }
})]
export const Result: _i_signatures._T_Result = ($, $p) => ['text', ({
    'delimiter': ['quote', null],
    'value': $,
})]
