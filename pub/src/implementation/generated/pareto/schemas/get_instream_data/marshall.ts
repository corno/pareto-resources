import * as _pa from 'pareto-core-transformer'
import * as _pd from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/get_instream_data/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


export const Parameters: _i_signatures._T_Parameters = ($, $p) => ['nothing', null]
export const Result: _i_signatures._T_Result = ($, $p) => ['text', ({
    'delimiter': ['quote', null],
    'value': $,
})]
