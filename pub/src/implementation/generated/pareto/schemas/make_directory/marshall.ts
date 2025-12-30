import * as _pa from 'pareto-core-transformer'
import * as _pd from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/make_directory/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"
import * as _i_r_path from "../path/marshall"


export const Parameters: _i_signatures._T_Parameters = ($, $p) => _i_r_path.Node_Path(
    $,
    {
        'value serializers': $p['value serializers'],
    }
)
export const Error: _i_signatures._T_Error = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'directory already exists': return _pa.ss($, ($) => ({
            'state': "directory already exists",
            'value': ['nothing', null],
        }))
        case 'permission denied': return _pa.ss($, ($) => ({
            'state': "permission denied",
            'value': ['nothing', null],
        }))
        default: return _pa.au($[0])
    }
})]
