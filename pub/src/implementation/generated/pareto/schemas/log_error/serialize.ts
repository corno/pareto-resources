import * as _pa from 'pareto-core-serializer'
import * as _pd from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/log_error/serialize"
import * as _i_serialize from "../../generic/serialize"
import * as _i_marshall from "./marshall"


export const Parameters: _i_signatures._T_Parameters = ($, $p) => _i_serialize.Document(
    _i_marshall.Parameters(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
