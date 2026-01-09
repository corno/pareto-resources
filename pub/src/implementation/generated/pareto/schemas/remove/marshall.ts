import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/remove/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"
import * as _i_r_path from "../path/marshall"


export const Parameters: _i_signatures._T_Parameters = ($, $p) => ['verbose group', _p.dictionary.literal({
    'path': _p.deprecated_cc($['path'], ($) => _i_r_path.Node_Path(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'error if not exists': _p.deprecated_cc($['error if not exists'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['boolean'](
            $,
            null
        ),
    })]),
})]
export const Error: _i_signatures._T_Error = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'node does not exist': return _p.ss($, ($) => ({
            'state': "node does not exist",
            'value': ['nothing', null],
        }))
        case 'permission denied': return _p.ss($, ($) => ({
            'state': "permission denied",
            'value': ['nothing', null],
        }))
        default: return _p.au($[0])
    }
})]
