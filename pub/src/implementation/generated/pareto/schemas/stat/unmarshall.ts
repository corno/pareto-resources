import * as _pa from 'pareto-core-refiner'
import * as _pd from 'pareto-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/stat/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/stat/data_types/target"
import * as _i_r_path from "../path/unmarshall"


export const Parameters: _i_signatures._T_Parameters = ($, $p) => _i_r_path.Node_Path(
    $,
    {
        'value deserializers': $p['value deserializers'],
    }
)
export const Error: _i_signatures._T_Error = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'node does not exist': ($): _i_out._T_Error.SG => ['node does not exist', _i_generic.process_nothing(
                $,
                null
            )],
        }),
    }
)
export const Node_Type: _i_signatures._T_Node_Type = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'file': ($): _i_out._T_Node_Type.SG => ['file', _i_generic.process_nothing(
                $,
                null
            )],
            'directory': ($): _i_out._T_Node_Type.SG => ['directory', _i_generic.process_nothing(
                $,
                null
            )],
        }),
    }
)
export const Result: _i_signatures._T_Result = ($, $p) => Node_Type(
    $,
    {
        'value deserializers': $p['value deserializers'],
    }
)
