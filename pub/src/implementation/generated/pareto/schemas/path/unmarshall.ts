import * as _pa from 'pareto-core-refiner'
import * as _pd from 'pareto-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/path/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/path/data_types/target"


export const Up_Steps: _i_signatures._T_Up_Steps = ($, $p) => _i_generic.process_number(
    $,
    {
        'deserializer': $p['value deserializers']['default number'],
    }
)
export const Start: _i_signatures._T_Start = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'absolute': ($): _i_out._T_Start.SG => ['absolute', _i_generic.process_nothing(
                $,
                null
            )],
            'relative': ($): _i_out._T_Start.SG => ['relative', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'up steps': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "up steps",
                            }
                        ), ($) => Up_Steps(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )),
                    }),
                }
            )],
        }),
    }
)
export const Context_Subpath: _i_signatures._T_Context_Subpath = ($, $p) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => _i_generic.process_text(
            $,
            null
        ),
    }
)
export const Context_Path: _i_signatures._T_Context_Path = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'start': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "start",
                }
            ), ($) => Start(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'subpath': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "subpath",
                }
            ), ($) => Context_Subpath(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
        }),
    }
)
export const Node_Path: _i_signatures._T_Node_Path = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'context': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "context",
                }
            ), ($) => Context_Path(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'node': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "node",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
        }),
    }
)
export const Non_Normalized_Path: _i_signatures._T_Non_Normalized_Path = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'leading slash': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "leading slash",
                }
            ), ($) => _i_generic.process_boolean(
                $,
                {
                    'deserializer': $p['value deserializers']['boolean'],
                }
            )),
            'segments': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "segments",
                }
            ), ($) => _i_generic.process_unconstrained_list(
                $,
                {
                    'value': ($) => _i_generic.process_unconstrained_state_group(
                        $,
                        {
                            'states': _pa.dictionary_literal({
                                'parent': ($): _i_out._T_Non_Normalized_Path.segments.L.SG => ['parent', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                'child': ($): _i_out._T_Non_Normalized_Path.segments.L.SG => ['child', _i_generic.process_text(
                                    $,
                                    null
                                )],
                                'current': ($): _i_out._T_Non_Normalized_Path.segments.L.SG => ['current', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                'nothing': ($): _i_out._T_Non_Normalized_Path.segments.L.SG => ['nothing', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                            }),
                        }
                    ),
                }
            )),
            'trailing slash': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "trailing slash",
                }
            ), ($) => _i_generic.process_boolean(
                $,
                {
                    'deserializer': $p['value deserializers']['boolean'],
                }
            )),
        }),
    }
)
