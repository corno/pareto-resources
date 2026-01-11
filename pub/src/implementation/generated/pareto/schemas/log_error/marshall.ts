import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/log_error/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


export const Parameters: _i_signatures._T_Parameters = ($, $p) => ['verbose group', _p.dictionary.literal({
    'lines': _p.deprecated_cc($['lines'], ($) => ['list', $.__l_map(($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })])]),
})]
