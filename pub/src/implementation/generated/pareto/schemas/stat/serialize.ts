import * as _pa from 'pareto-core-serializer'
import * as _pd from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/stat/serialize"
import * as _i_serialize from "../../generic/serialize"
import * as _i_marshall from "./marshall"
import * as _i_r_path from "../path/serialize"


export const Parameters: _i_signatures._T_Parameters = ($, $p) => _i_serialize.Document(
    _i_marshall.Parameters(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Error: _i_signatures._T_Error = ($, $p) => _i_serialize.Document(
    _i_marshall.Error(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Node_Type: _i_signatures._T_Node_Type = ($, $p) => _i_serialize.Document(
    _i_marshall.Node_Type(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Result: _i_signatures._T_Result = ($, $p) => _i_serialize.Document(
    _i_marshall.Result(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
