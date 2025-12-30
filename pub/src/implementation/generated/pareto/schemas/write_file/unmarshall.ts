import * as _pa from 'pareto-core-refiner'
import * as _pd from 'pareto-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/write_file/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/write_file/data_types/target"
import * as _i_r_path from "../path/unmarshall"


export const Parameters: _i_signatures._T_Parameters = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'path': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "path",
                }
            ), ($) => _i_r_path.Node_Path(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'data': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "data",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
        }),
    }
)
export const Error: _i_signatures._T_Error = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'permission denied': ($): _i_out._T_Error.SG => ['permission denied', _i_generic.process_nothing(
                $,
                null
            )],
        }),
    }
)
