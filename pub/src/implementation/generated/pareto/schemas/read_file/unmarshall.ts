import * as _pa from 'pareto-core-refiner'
import * as _pd from 'pareto-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/read_file/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/read_file/data_types/target"
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
            'file does not exist': ($): _i_out._T_Error.SG => ['file does not exist', _i_generic.process_nothing(
                $,
                null
            )],
            'node is not a file': ($): _i_out._T_Error.SG => ['node is not a file', _i_generic.process_nothing(
                $,
                null
            )],
            'permission denied': ($): _i_out._T_Error.SG => ['permission denied', _i_generic.process_nothing(
                $,
                null
            )],
            'file too large': ($): _i_out._T_Error.SG => ['file too large', _i_generic.process_nothing(
                $,
                null
            )],
            'device not ready': ($): _i_out._T_Error.SG => ['device not ready', _i_generic.process_nothing(
                $,
                null
            )],
        }),
    }
)
export const Result: _i_signatures._T_Result = ($, $p) => _i_generic.process_text(
    $,
    null
)
