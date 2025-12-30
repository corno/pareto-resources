import * as _pa from 'pareto-core-refiner'
import * as _pd from 'pareto-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/make_directory/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/make_directory/data_types/target"
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
            'directory already exists': ($): _i_out._T_Error.SG => ['directory already exists', _i_generic.process_nothing(
                $,
                null
            )],
            'permission denied': ($): _i_out._T_Error.SG => ['permission denied', _i_generic.process_nothing(
                $,
                null
            )],
        }),
    }
)
